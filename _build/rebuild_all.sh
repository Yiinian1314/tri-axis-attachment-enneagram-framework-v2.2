#!/bin/bash
# ========================================================
# rebuild_all.sh — 一键重转所有 PDF + (可选)打包 + (可选)验证
# ========================================================
# 用法: ./rebuild_all.sh [target_version] [options]
#   默认 target_version=v2.2
# 选项:
#   --pack         打包 zip(默认不打,等用户确认)
#   --verify       跑 verify.sh(默认不跑,等用户确认)
#   --all          等价于 --pack --verify
#   -h, --help     显示帮助
# 流程:
#   1. 转换所有 MD → PDF
#   2. (可选)打包 zip
#   3. (可选)运行 verify.sh
# ========================================================

set +e  # 不要 set -e,后面用 if 控制流程

TARGET_VERSION="v2.2"
DO_PACK=false
DO_VERIFY=false

# 解析参数
for arg in "$@"; do
  case "$arg" in
    --pack) DO_PACK=true ;;
    --verify) DO_VERIFY=true ;;
    --all) DO_PACK=true; DO_VERIFY=true ;;
    -h|--help)
      echo "用法: ./rebuild_all.sh [target_version] [options]"
      echo "  target_version: 默认 v2.2"
      echo "  --pack         打包 zip(默认不打)"
      echo "  --verify       跑 verify.sh(默认不跑)"
      echo "  --all          --pack --verify"
      exit 0
      ;;
    -*)
      echo "未知选项: $arg"
      exit 1
      ;;
    *)
      TARGET_VERSION="$arg"
      ;;
  esac
done

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$PROJECT_DIR"

echo ""
echo "=========================================="
echo " 全量重建 (目标版本: $TARGET_VERSION)"
echo " 打包: $DO_PACK | 验证: $DO_VERIFY"
echo "=========================================="
echo ""

# ---------- 步骤 1: 重转所有 PDF ----------
echo "【步骤 1/3】重转 MD → PDF"
echo ""

COUNT=0
FAILED=0

# 1) 顶级文件
for f in 01-理论架构与咨询指南.md 02-咨询师速查工具卡.md README.md; do
  out="PDFs/${f%.md}.pdf"
  if pandoc "$f" --from=markdown-yaml_metadata_block --pdf-engine=xelatex --template=_build/template.tex \
    -V title="$(basename ${f%.md} | sed 's/^0[0-9]-\?//;s/^[a-z]\+//')" \
    -V author="Mavis" -V date="2026-07-20" --toc --toc-depth=3 \
    -o "$out" 2>/dev/null; then
    echo "  ✓ $out"
    COUNT=$((COUNT+1))
  else
    echo "  ✗ $out"
    FAILED=$((FAILED+1))
  fi
done

# 2) 各模块
for module in 05-构型深度展开 06-咨询录音脚本 07-咨询师自我校准 08-督导专题包 09-案例库 10-客体关系专题包 督导使用指南; do
  if [ -d "$module" ]; then
    for src in $module/*.md; do
      name=$(basename "$src" .md)
      out="PDFs/${module}/${name}.pdf"
      if pandoc "$src" --from=markdown-yaml_metadata_block --pdf-engine=xelatex --template=_build/template.tex \
        -V title="${name}" \
        -V author="Mavis" -V date="2026-07-20" --toc --toc-depth=3 \
        -o "$out" 2>/dev/null; then
        echo "  ✓ $out"
        COUNT=$((COUNT+1))
      else
        echo "  ✗ $out"
        FAILED=$((FAILED+1))
      fi
    done
  fi
done

# 3) 04 来访者手册 (HTML)
pandoc 04-来访者自助手册/client-self-help-manual.html --from=html --pdf-engine=xelatex --template=_build/template.tex \
  -V title="来访者自助手册" -o PDFs/04-来访者自助手册.pdf 2>/dev/null
cp PDFs/04-来访者自助手册.pdf 04-来访者自助手册/来访者自助手册.pdf
echo "  ✓ PDFs/04-来访者自助手册.pdf"
COUNT=$((COUNT+1))

echo ""
echo "  生成: $COUNT 个 PDF,失败: $FAILED 个"
echo ""

# ---------- 步骤 2: (可选)打包 zip ----------
if [ "$DO_PACK" = "true" ]; then
  echo "【步骤 2/3】打包 zip"
  echo ""
  rm -f "依恋×九型×客体关系三轴融合情感咨询理论套件-${TARGET_VERSION}.zip"
  zip -qr "依恋×九型×客体关系三轴融合情感咨询理论套件-${TARGET_VERSION}.zip" PDFs/
  ls -la "依恋×九型×客体关系三轴融合情感咨询理论套件-${TARGET_VERSION}.zip"
  echo ""
else
  echo "【步骤 2/3】打包 — 跳过(默认不打,需要时加 --pack)"
  echo "  提示: 交付前我会先问你'要不要打包',你说打我才打"
  echo ""
fi

# ---------- 步骤 3: (可选)验证 ----------
if [ "$DO_VERIFY" = "true" ]; then
  echo "【步骤 3/3】运行 verify.sh 验证"
  echo ""
  ./_build/verify.sh "$TARGET_VERSION"
  VERIFY_EXIT=$?
  echo ""
  if [ $VERIFY_EXIT -eq 0 ]; then
    echo "=========================================="
    echo -e " \033[0;32m✅ 全部通过!交付物已就绪\033[0m"
    [ "$DO_PACK" = "true" ] && echo " zip: 依恋×九型×客体关系三轴融合情感咨询理论套件-${TARGET_VERSION}.zip"
    echo "=========================================="
    exit 0
  else
    echo "=========================================="
    echo -e " \033[0;31m❌ 验证未通过!请修复后重试\033[0m"
    echo "=========================================="
    exit 1
  fi
else
  echo "【步骤 3/3】验证 — 跳过(默认不跑,需要时加 --verify)"
  echo ""
  echo "=========================================="
  echo " PDF 重建完成(未打包未验证)"
  echo "=========================================="
  echo ""
  echo "  下一步(交付前的标准动作):"
  echo "    1. 告诉用户 PDF 已重建好,展示几个关键页"
  echo "    2. 问用户:'要不要打包 zip?'"
  echo "    3. 用户说'打' → 跑: ./_build/rebuild_all.sh $TARGET_VERSION --pack --verify"
  echo "    4. 用户说'先看看' → 等用户确认后再决定"
  echo ""
fi

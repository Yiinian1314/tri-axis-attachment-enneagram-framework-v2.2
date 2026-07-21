#!/bin/bash
# ========================================================
# verify.sh — 交付前自动验证脚本
# 目的: 在打包前自动检查产物是否真的升级到目标版本
# 用法: ./verify.sh [target_version]
#   默认 target_version=v2.2
# ========================================================
# 检查 5 项:
#   1. 每个 PDF 页眉含目标版本号
#   2. 每个 PDF 字体是 SC(避免 jp fallback)
#   3. PPT/PDF 含三轴关键词(防止"源文件升级但产物没重生成")
#   4. PPT 标题是"依恋 × 九型 × 客体关系"
#   5. zip 文件存在且 CRC 校验通过
# ========================================================

set +e

TARGET_VERSION="${1:-v2.2}"
PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
PDFS_DIR="$PROJECT_DIR/PDFs"
ZIP_FILE="$PROJECT_DIR/依恋九型-情感咨询融合理论套件-${TARGET_VERSION}-PDF合集.zip"

# 颜色
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

pass=0
fail=0
warn=0

check() {
  local name="$1"
  local condition="$2"
  local detail="$3"
  if [ "$condition" = "true" ]; then
    echo -e "  ${GREEN}✓${NC} $name"
    pass=$((pass+1))
  else
    echo -e "  ${RED}❌${NC} $name"
    [ -n "$detail" ] && echo "    ${RED}$detail${NC}"
    fail=$((fail+1))
  fi
}

warn_check() {
  local name="$1"
  local condition="$2"
  if [ "$condition" != "true" ]; then
    echo -e "  ${YELLOW}⚠️${NC}  $name"
    warn=$((warn+1))
  else
    pass=$((pass+1))
  fi
}

echo ""
echo "=========================================="
echo " 交付前验证 (目标版本: $TARGET_VERSION)"
echo "=========================================="
echo ""

# ---------- 检查 1: PDF 页眉含版本号 ----------
echo "【检查 1/5】PDF 页眉含 $TARGET_VERSION 标识"
header_ok=0
header_total=0
for pdf in $(find "$PDFS_DIR" -name "*.pdf" -not -path "*/03-培训PPT/*" | sort); do
  header_total=$((header_total+1))
  first_line=$(pdftotext -f 1 -l 1 -layout "$pdf" - 2>/dev/null | head -3)
  if echo "$first_line" | grep -q "$TARGET_VERSION"; then
    header_ok=$((header_ok+1))
  else
    echo "  ${RED}❌ 页眉缺版本号${NC}: $pdf"
  fi
done
check "PDF 页眉含 $TARGET_VERSION" \
  "$([ $header_ok -eq $header_total ] && echo true || echo false)" \
  "$header_ok/$header_total"
echo ""

# ---------- 检查 2: 字体是 SC ----------
echo "【检查 2/5】PDF 字体是 SC(思源宋体/思源黑体)"
sc_ok=0
sc_total=0
for pdf in $(find "$PDFS_DIR" -name "*.pdf" -not -path "*/03-培训PPT/*" | sort); do
  sc_total=$((sc_total+1))
  fonts=$(pdffonts "$pdf" 2>/dev/null | grep -i "cjk" | head -1)
  if echo "$fonts" | grep -q "CJKsc"; then
    sc_ok=$((sc_ok+1))
  else
    echo "  ${RED}❌ 字体非 SC${NC}: $pdf → $fonts"
  fi
done
check "PDF 字体是 SC" \
  "$([ $sc_ok -eq $sc_total ] && echo true || echo false)" \
  "$sc_ok/$sc_total"
echo ""

# ---------- 检查 3: PPT 标题是三轴 ----------
echo "【检查 3/5】PPT 是 v2.2 三轴融合理论版"
PPT_PDF="$PDFS_DIR/03-培训PPT/attachment-enneagram-consultation-training.pdf"
if [ -f "$PPT_PDF" ]; then
  ppt_text=$(pdftotext "$PPT_PDF" - 2>/dev/null)
  
  has_title=$(echo "$ppt_text" | head -10 | grep -c "依恋.*九型.*客体关系")
  has_three_axis=$(echo "$ppt_text" | grep -c "三轴")
  has_obj_rel=$(echo "$ppt_text" | grep -c "客体关系")
  has_v22=$(echo "$ppt_text" | grep -c "$TARGET_VERSION")
  has_v10=$(echo "$ppt_text" | head -10 | grep -c "v1\.0")
  
  check "PPT 标题含三轴(依恋 × 九型 × 客体关系)" \
    "$([ $has_title -gt 0 ] && echo true || echo false)"
  check "PPT 含'三轴'关键词(≥3 次)" \
    "$([ $has_three_axis -ge 3 ] && echo true || echo false)" \
    "实际: $has_three_axis 次"
  check "PPT 含'客体关系'关键词(≥3 次)" \
    "$([ $has_obj_rel -ge 3 ] && echo true || echo false)" \
    "实际: $has_obj_rel 次"
  check "PPT 含 $TARGET_VERSION 标识" \
    "$([ $has_v22 -gt 0 ] && echo true || echo false)"
  warn_check "PPT 不含 v1.0 旧标识" "$([ $has_v10 -eq 0 ] && echo true || echo false)"
else
  echo -e "  ${YELLOW}⚠️${NC}  PPT PDF 不存在: $PPT_PDF"
  warn=$((warn+1))
fi
echo ""

# ---------- 检查 4: 关键文档含三轴 ----------
echo "【检查 4/5】关键文档含三轴核心概念"
MAIN_PDF="$PDFS_DIR/01-理论架构与咨询指南.pdf"
if [ -f "$MAIN_PDF" ]; then
  main_text=$(pdftotext "$MAIN_PDF" - 2>/dev/null)
  has_integrate=$(echo "$main_text" | grep -c "整合公式\|三轴")
  check "主文档含'三轴/整合公式'" \
    "$([ $has_integrate -ge 5 ] && echo true || echo false)" \
    "实际: $has_integrate 次"
fi

# 检查 09 案例库
if [ -d "$PDFS_DIR/09-案例库" ]; then
  cnt_5_6=$(grep -l "5\.6 客体关系视角" "$PROJECT_DIR"/09-案例库/*.md 2>/dev/null | wc -l)
  check "案例库 5.6 节(客体关系视角)" \
    "$([ $cnt_5_6 -ge 4 ] && echo true || echo false)" \
    "实际: $cnt_5_6/6 案例"
fi

# 检查 10 客体关系专题包
if [ -d "$PDFS_DIR/10-客体关系专题包" ]; then
  cnt_10=$(find "$PDFS_DIR/10-客体关系专题包" -name "*.pdf" | wc -l)
  check "10 客体关系专题包" \
    "$([ $cnt_10 -ge 3 ] && echo true || echo false)" \
    "实际: $cnt_10 个 PDF"
fi
echo ""

# ---------- 检查 5: zip 完整性 ----------
echo "【检查 5/5】zip 文件完整性"
if [ -f "$ZIP_FILE" ]; then
  zip_size=$(ls -la "$ZIP_FILE" | awk '{print $5}')
  unzip -t "$ZIP_FILE" > /dev/null 2>&1
  crc_ok=$?
  check "zip 文件存在" "true"
  check "zip 大小合理(>5MB)" \
    "$([ $zip_size -gt 5000000 ] && echo true || echo false)" \
    "实际: $((zip_size/1024/1024))MB"
  check "zip CRC 校验通过" \
    "$([ $crc_ok -eq 0 ] && echo true || echo false)"
  
  # 检查 zip 内的 PPT PDF 是否含 v2.2
  if command -v unzip >/dev/null 2>&1; then
    unzip -p "$ZIP_FILE" "PDFs/03-培训PPT/attachment-enneagram-consultation-training.pdf" 2>/dev/null | \
      pdftotext - - 2>/dev/null | grep -q "$TARGET_VERSION"
    check "zip 内的 PPT PDF 含 $TARGET_VERSION" \
      "$([ $? -eq 0 ] && echo true || echo false)"
  fi
else
  echo -e "  ${RED}❌${NC} zip 文件不存在: $ZIP_FILE"
  fail=$((fail+1))
fi
echo ""

# ---------- 总结 ----------
echo "=========================================="
TOTAL=$((pass+fail+warn))
if [ $fail -eq 0 ]; then
  echo -e " ${GREEN}✅ 通过: $pass 项${NC} | ${YELLOW}⚠️ 警告: $warn 项${NC} | ${RED}❌ 失败: $fail 项${NC}"
  echo " 总计: $TOTAL 项检查"
  echo "=========================================="
  exit 0
else
  echo -e " ${GREEN}✅ 通过: $pass 项${NC} | ${YELLOW}⚠️ 警告: $warn 项${NC} | ${RED}❌ 失败: $fail 项${NC}"
  echo " 总计: $TOTAL 项检查"
  echo "=========================================="
  echo -e " ${RED}❌ 验证失败!请修复后重新打包${NC}"
  exit 1
fi

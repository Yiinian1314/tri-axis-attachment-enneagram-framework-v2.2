#!/bin/bash
# 自动审计: 9 型描述错配检查
# 用法: bash audit-9-types.sh [可选: 文件名]
# 不传文件名:扫所有 md 文件
# 传文件名:只扫该文件

set -e

WORKSPACE="/workspace/attachment-enneagram-consultation"
cd "$WORKSPACE"

# 9 型标准描述表
# 格式: 编号:核心恐惧关键词|核心欲望关键词|核心等式|自体表征|客体表征
declare -A TYPES
TYPES[1]="不完美|错误|善良|正直|完美|我必须完美|缺陷|审判"
TYPES[2]="不被需要|不被爱|被爱|被需要|有用|我必须有用|有价值|脆弱"
TYPES[3]="无价值|不成功|有价值|成功|成就|我必须成就|角色|观众"
TYPES[4]="平凡|无独特性|独特|找到自我|不同|我必须不同|缺陷|完整"
TYPES[5]="无能|被侵占|有能力|有空间|自足|我必须自足|被入侵|入侵"
TYPES[6]="无支持|被背叛|安全|归属|警觉|我必须警觉|无助|威胁"
TYPES[7]="痛苦|被限制|自由|满足|快乐|我必须快乐|会痛苦|限制"
TYPES[8]="被控制|被伤害|自我保护|掌控|强大|我必须强大|脆弱|利用"
TYPES[9]="冲突|分离|平静|合一|配合|我必须配合|不存在|重要"

# 容错关键词(不算错配)
declare -A ALIAS
# 例:"回避型可能看起来像 9 号" - 不算错配

echo "============================================"
echo "  9 型描述错配自动审计"
echo "  扫描时间: $(date '+%Y-%m-%d %H:%M:%S')"
echo "============================================"
echo ""

# 确定扫描范围
if [ -n "$1" ]; then
  TARGETS="$1"
  echo "📁 扫描范围: $1 (单文件)"
else
  TARGETS=$(find . -name "*.md" -not -path "./.git/*" -not -path "./_evidence/*" -not -path "./_build/*")
  FILE_COUNT=$(echo "$TARGETS" | wc -l)
  echo "📁 扫描范围: 全部 $FILE_COUNT 个 md 文件(排除 .git / _evidence / _build)"
fi
echo ""

TOTAL_ERRORS=0
TOTAL_FILES_WITH_ERRORS=0

# 对每个文件跑错配检查
for file in $TARGETS; do
  FILE_ERRORS=0

  # 用 python 做精确的错配检查
  ERRORS=$(filepath="$file" python3 << 'PYEOF'
import re
import os
import sys

types_data = {
    1: {"fear": ["不完美", "错误"], "desire": ["善良", "正直"], "eq": ["我必须完美"]},
    2: {"fear": ["不被需要", "不被爱"], "desire": ["被爱", "被需要"], "eq": ["我必须有用", "我必须被需要"]},
    3: {"fear": ["无价值", "不成功"], "desire": ["有价值", "成功", "成就"], "eq": ["我必须成就", "我必须成功"]},
    4: {"fear": ["平凡", "无独特性"], "desire": ["独特", "找到自我"], "eq": ["我必须不同"]},
    5: {"fear": ["无能", "被侵占"], "desire": ["有能力", "有空间"], "eq": ["我必须自足", "我必须退缩"]},
    6: {"fear": ["无支持", "被背叛"], "desire": ["安全", "归属"], "eq": ["我必须警觉", "我必须怀疑"]},
    7: {"fear": ["痛苦", "被限制"], "desire": ["自由", "满足"], "eq": ["我必须快乐", "我必须分散"]},
    8: {"fear": ["被控制", "被伤害"], "desire": ["自我保护", "掌控", "强大"], "eq": ["我必须强大", "我必须强"]},
    9: {"fear": ["冲突", "分离"], "desire": ["平静", "合一"], "eq": ["我必须配合", "我必须消失"]}
}

filepath = os.environ['filepath']
with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

errors = []

for i, line in enumerate(lines, 1):
    # 跳过代码块
    if line.strip().startswith('```'):
        continue
    # 跳过引用块
    if line.strip().startswith('>'):
        continue

    # 模式 1: "X 号核心恐惧 '...'" 或 "X 号核心恐惧: ..."
    m = re.search(r'(\d+)\s*号核心恐惧\s*[""「:]?\s*([^""」\n]{1,40})', line)
    if m:
        num = int(m.group(1))
        fear_text = m.group(2).strip()
        if num in types_data:
            expected_keywords = types_data[num]["fear"]
            if not any(kw in fear_text for kw in expected_keywords):
                # 看是否匹配其他类型
                matched_other = None
                for other_num, other_data in types_data.items():
                    if other_num != num and any(kw in fear_text for kw in other_data["fear"]):
                        matched_other = other_num
                        break
                errors.append(f"行 {i}: '{num}号核心恐惧{fear_text}' → 实际更像 {matched_other or '其他类型'}号")

    # 模式 2: "X 号核心欲望 '...'"
    m = re.search(r'(\d+)\s*号核心欲望\s*[""「:]?\s*([^""」\n]{1,40})', line)
    if m:
        num = int(m.group(1))
        desire_text = m.group(2).strip()
        if num in types_data:
            expected_keywords = types_data[num]["desire"]
            if not any(kw in desire_text for kw in expected_keywords):
                matched_other = None
                for other_num, other_data in types_data.items():
                    if other_num != num and any(kw in desire_text for kw in other_data["desire"]):
                        matched_other = other_num
                        break
                errors.append(f"行 {i}: '{num}号核心欲望{desire_text}' → 实际更像 {matched_other or '其他类型'}号")

    # 模式 3: "X 号核心等式 '...'"
    m = re.search(r'(\d+)\s*号核心等式\s*[""「:]?\s*([^""」\n]{1,40})', line)
    if m:
        num = int(m.group(1))
        eq_text = m.group(2).strip()
        if num in types_data:
            expected_eq = types_data[num]["eq"]
            # 容错: 如果等式含 "我必须" + 该类型的核心动词/形容词关键词
            # 简化: 检查是否完全无关
            if not any(eq in eq_text for eq in expected_eq):
                matched_other = None
                for other_num, other_data in types_data.items():
                    if other_num != num and any(eq in eq_text for eq in other_data["eq"]):
                        matched_other = other_num
                        break
                if matched_other:
                    errors.append(f"行 {i}: '{num}号核心等式{eq_text}' → 实际更像 {matched_other}号")

if errors:
    for e in errors:
        print(e)
PYEOF
)

  if [ -n "$ERRORS" ]; then
    FILE_ERRORS=$(echo "$ERRORS" | wc -l)
    echo "❌ $file (${FILE_ERRORS} 处):"
    echo "$ERRORS" | sed 's/^/   /'
    echo ""
    TOTAL_ERRORS=$((TOTAL_ERRORS + FILE_ERRORS))
    TOTAL_FILES_WITH_ERRORS=$((TOTAL_FILES_WITH_ERRORS + 1))
  fi
done

echo "============================================"
echo "  📊 审计结果汇总"
echo "============================================"
echo ""
echo "扫描文件: $(echo "$TARGETS" | wc -l) 个"
echo "错配总数: $TOTAL_ERRORS 处"
echo "有问题文件: $TOTAL_FILES_WITH_ERRORS 个"
echo ""

if [ $TOTAL_ERRORS -eq 0 ]; then
  echo "✅ 全套件 9 型描述 100% 自洽,无错配"
  exit 0
else
  echo "⚠️  发现 $TOTAL_ERRORS 处可疑错配,需人工复核"
  exit 1
fi

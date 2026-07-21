#!/bin/bash
# 章节编号一致性审计:扫所有 md 文件,检查"目录"列表的章节号是否跟正文一致
# 解决:正文改了,目录忘改的常见错误

set -e

cd /workspace/attachment-enneagram-consultation

echo "============================================"
echo "  章节编号一致性审计(TOC ↔ 正文)"
echo "  扫描时间: $(date '+%Y-%m-%d %H:%M:%S')"
echo "============================================"
echo ""

python3 << 'PYEOF'
import re
import glob
import os

def extract_heading_id(title):
    """把标题转成 GitHub/LaTeX anchor 格式:小写、空格变 -、去标点"""
    # 简化版:GitHub 风格
    s = title.lower()
    s = re.sub(r'[^\w\s\u4e00-\u9fa5-]', '', s)  # 保留中英文和 -
    s = re.sub(r'\s+', '-', s.strip())
    return s

def main():
    issues = []
    total_files = 0

    for md_file in sorted(glob.glob('/workspace/attachment-enneagram-consultation/**/*.md', recursive=True)):
        if '/.git/' in md_file or '/_evidence/' in md_file or '/_build/' in md_file:
            continue
        total_files += 1
        rel = md_file.replace('/workspace/attachment-enneagram-consultation/', '')

        with open(md_file, 'r', encoding='utf-8') as f:
            content = f.read()

        # 找目录区域(从开头到 "---" 或第一个 ## 章节)
        lines = content.split('\n')
        toc_lines = []
        body_started = False
        for i, line in enumerate(lines):
            # 跳过文件头 1-2 行(标题 + 空行)
            if i < 2:
                continue
            if line.startswith('---') and not body_started:
                body_started = True
                continue
            if body_started:
                break
            if line.lstrip().startswith('- ['):
                toc_lines.append(line)

        if not toc_lines:
            continue

        # 解析目录条目: 提取 [标题](#anchor)
        toc_entries = []
        for line in toc_lines:
            m = re.search(r'\[([^\]]+)\]\(#([^)]+)\)', line)
            if m:
                toc_entries.append((m.group(1), m.group(2)))

        if not toc_entries:
            continue

        # 找正文章节标题 (## 和 ### 层级)
        body_headings = {}
        body_text = '\n'.join(lines)
        for m in re.finditer(r'^(#{2,4})\s+(.+?)$', body_text, re.MULTILINE):
            hashes = len(m.group(1))
            title = m.group(2).strip()
            # 计算 anchor
            anchor = extract_heading_id(title)
            body_headings[anchor] = (hashes, title)

        # 检查每个目录条目
        for title_text, anchor in toc_entries:
            # 找正文里匹配 anchor 的章节
            if anchor in body_headings:
                continue  # OK
            # 看是不是有标题"看起来像"的
            best_match = None
            for body_anchor, (level, body_title) in body_headings.items():
                # 如果 anchor 包含 body_anchor,或 body_anchor 包含 anchor
                if anchor in body_anchor or body_anchor in anchor:
                    best_match = (level, body_title)
                    break
                # 如果 title 文本相似
                if title_text.strip() == body_title.strip():
                    best_match = (level, body_title)
                    break

            if best_match is None:
                # 完全找不到
                issues.append(f"  ❌ {rel}")
                issues.append(f"     目录条目 '{title_text}' (#{anchor}) 在正文找不到对应章节")
            else:
                # 找到但 anchor 不匹配
                level, body_title = best_match
                issues.append(f"  ⚠️  {rel}")
                issues.append(f"     目录 '#{anchor}' ≠ 正文标题 '{body_title}'")
                issues.append(f"     目录文本: '{title_text}'")
                issues.append(f"     实际 anchor: '{extract_heading_id(body_title)}'")

    print(f"扫描文件: {total_files} 个")
    if not issues:
        print("✅ 所有 md 文件目录与正文章节编号完全一致")
        return 0
    else:
        print(f"发现 {len([i for i in issues if '❌' in i])} 处错配,需修复:\n")
        for issue in issues:
            print(issue)
        return 1

exit(main())
PYEOF

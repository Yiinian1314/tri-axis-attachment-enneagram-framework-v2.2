#!/bin/bash
# 批量转换 Markdown 到 PDF
# 用法: ./convert.sh <src.md> <output.pdf> [title]

src="$1"
out="$2"
title="${3:-$(basename "$src" .md)}"

# 注意:不要加 --highlight-style,会引入别的字体配置
pandoc "$src" \
  --from=markdown-yaml_metadata_block \
  --pdf-engine=xelatex \
  --template=_build/template.tex \
  -V title="$title" \
  -V author="Mavis" \
  -V date="2026-07-20" \
  --toc --toc-depth=3 \
  -o "$out" 2>&1 | grep -v "Missing character" | tail -3
echo "  ✓ $out"

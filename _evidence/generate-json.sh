#!/bin/bash
# 生成 JSON 证据文件
cd "$(dirname "$0")/.."

python3 << 'PYEOF'
import json
import os
import hashlib
from datetime import datetime, timezone, timedelta

# 读取原始哈希
files = []
with open('_evidence/sha256-evidence-raw.txt', 'r', encoding='utf-8') as f:
    for line in f:
        parts = line.strip().split(None, 3)
        if len(parts) == 4:
            sha256, size, mtime, path = parts
            files.append({
                "sha256": sha256,
                "size_bytes": int(size),
                "mtime": mtime,
                "path": path,
                "filename": os.path.basename(path)
            })

# 按文件类型分组
groups = {
    "top_level_md": [f for f in files if f["path"].count("/") == 1 and f["path"].endswith(".md")],
    "case_library": [f for f in files if "/09-案例库/" in f["path"]],
    "supervision_guide": [f for f in files if "/督导使用指南/" in f["path"]],
    "configurations": [f for f in files if "/05-构型深度展开/" in f["path"]],
    "scripts": [f for f in files if "/06-咨询录音脚本/" in f["path"]],
    "ppt": [f for f in files if "/03-培训PPT/" in f["path"] and f["path"].endswith(".md")],
    "other_md": [f for f in files if (
        "/04-来访者自助手册/" in f["path"] or
        "/07-咨询师自我校准/" in f["path"] or
        "/08-督导专题包/" in f["path"] or
        "/10-客体关系专题包/" in f["path"] or
        "/_build/" in f["path"]
    )],
    "pdfs": [f for f in files if "/PDFs/" in f["path"]],
    "deliverable": [f for f in files if f["path"].endswith(".zip")]
}

# 读根哈希
with open('_evidence/root-hash.txt', 'r') as f:
    root_hash = f.read().strip()

# 输出 JSON
result = {
    "metadata": {
        "name": "依恋九型-情感咨询融合理论套件",
        "version": "v2.2",
        "evidence_generated_at": "2026-07-21T22:55:00+08:00",
        "evidence_timezone": "Asia/Shanghai",
        "total_files": len(files),
        "total_size_bytes": sum(f["size_bytes"] for f in files),
        "root_hash": root_hash,
        "root_hash_algorithm": "SHA-256",
        "evidence_chain_method": "email + git + (optional) blockchain"
    },
    "originality_declaration": {
        "author": "[作者署名位置]",
        "creation_complete_date": "2026-07-21",
        "copyright_status": "自动取得(中国著作权法)",
        "original_contributions": [
            "三轴融合框架(依恋 × 九型防御位 × 客体关系)结构化整合",
            "12 构型工作网格(4 依恋 × 3 防御位)命名与临床描述",
            "5.6 节 客体关系视角",
            "督导使用指南三件套体系"
        ],
        "academic_foundations": {
            "attachment_x_object_relations": "Bowlby 学派 + West & Sheldon-Kell (1988)",
            "attachment_x_enneagram": "Arthur (2008) 等方向性先例",
            "enneagram_x_object_relations": "未见完全对应先例"
        }
    },
    "file_groups": groups
}

with open('_evidence/originality-evidence-v2.2-20260721.json', 'w', encoding='utf-8') as f:
    json.dump(result, f, ensure_ascii=False, indent=2)

print("JSON 证据文件已生成")
print(f"总文件数: {len(files)}")
print(f"各组数量: {', '.join(f'{k}={len(v)}' for k, v in groups.items())}")
PYEOF

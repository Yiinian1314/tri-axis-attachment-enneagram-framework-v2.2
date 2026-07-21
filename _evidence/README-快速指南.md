# 原创性证据 - 快速使用指南

> **生成时间**: 2026-07-21 22:55 (Asia/Shanghai)
> **状态**: ✅ 动作 1+2 已完成

---

## 已完成的两件事

### ✅ 动作 1: SHA-256 完整证据链

| 文件 | 大小 | 用途 |
|---|---|---|
| `sha256-evidence-raw.txt` | 14.5KB | 93 个文件 SHA-256 原始哈希表 |
| `root-hash.txt` | 65B | 根哈希(对原始哈希表再次 SHA-256) |
| `originality-evidence-v2.2-20260721.json` | 44KB | 机器可读 JSON 证据 |
| `ORIGINALITY-EVIDENCE-v2.2-20260721.md` | 4.7KB | 给人看的证据文档(给邮件用) |
| `EMAIL-TEMPLATE.md` | 2.8KB | 邮件自存操作模板 |
| `GITHUB-GUIDE.md` | 5.2KB | GitHub 推送完整指南 |

### ✅ 动作 2: 本地 Git 仓库 + Bundle

| 关键证据 | 值 |
|---|---|
| Git Commit Hash (SHA-1) | `023907ceb837c3991260094c28f5ce20021f21b4` |
| Commit Author | `Mavis <mavis-archive@local>`(注:用户推送 GitHub 前需改为真实姓名邮箱) |
| Commit Time (UTC) | `Tue Jul 21 14:57:29 2026 +0000` |
| Commit Time (Asia/Shanghai) | `2026-07-21 22:57:29` |
| Files Committed | 135 (含 .gitignore + _evidence 内部) |
| Lines Added | 28,663 |
| Git Bundle File | `git-bundle-v2.2-20260721.bundle` (22MB) |
| Bundle SHA-256 | `f5cf41779e959510f1001f1af386c70edff31a9b8b91eaec3589bf026b09c15b` |

---

## 最关键的两个数字(请记下来)

```
文件级根哈希 (Root Hash):
6fd551309f68fdbfb4de9e2cf3d4f6d326c24ee500c935c98a7ec89bf83e8dbf

Git 提交哈希 (Commit Hash):
023907ceb837c3991260094c28f5ce20021f21b4
```

这两个哈希是套件 v2.2 在 2026-07-21 22:55 时刻的**唯一数字指纹**。
任何修改都会让哈希变化。

---

## 你接下来要做的 3 步(共 15-20 分钟)

### 步骤 1: 邮件自存(5 分钟) ⏰

按 `EMAIL-TEMPLATE.md` 操作:
1. 把 `EMAIL-TEMPLATE.md` 整个内容复制到邮件正文
2. 把 `_evidence/` 整个目录 + `README.md` + `01-理论架构与咨询指南.md` + `02-咨询师速查工具卡.md` + `依恋九型-情感咨询融合理论套件-v2.2-PDF合集.zip` 打包成 tar.gz 作为附件
3. 发到自己 1-2 个邮箱
4. **不要删除这封邮件**

### 步骤 2: 推 GitHub(8 分钟) ⏰

按 `GITHUB-GUIDE.md` 操作:

```bash
# 1. 在 GitHub 创建空仓库(2 分钟)
#    仓库名: attachment-enneagram-consultation-v2
#    可见性: Public(推荐)

# 2. 重要: 改回你的真实姓名邮箱(我们刚才是用临时账户提交的)
cd /workspace/attachment-enneagram-consultation
git config --global user.name "[你的真实姓名]"
git config --global user.email "[你的真实邮箱]"

# 3. 改最后一次 commit 的作者(因为要用真名)
#    注意: 这会改 commit 哈希!如果想保留临时账户版本,跳过这步
git commit --amend --reset-author --no-edit

# 4. 添加远程并推送
git remote add origin https://github.com/[你的用户名]/attachment-enneagram-consultation-v2.git
git push -u origin main
```

### 步骤 3: 推 Gitee(5 分钟) ⏰

类似步骤 2,只是远程地址换成 Gitee:
```bash
git remote add gitee https://gitee.com/[你的用户名]/attachment-enneagram-consultation-v2.git
git push -u gitee main
```

---

## 现在的证据强度

| 证据类型 | 状态 | 司法接受度 |
|---|---|---|
| 本地 SHA-256 哈希链 | ✅ 完成 | 中 |
| 本地 Git 仓库 | ✅ 完成 | 中-高 |
| **Git Bundle(独立可传)** | ✅ **完成** | **中-高** |
| 邮件自存(下一步) | ⏳ 待做 | 中 |
| GitHub Public Commit(下一步) | ⏳ 待做 | 高 |
| Gitee Public Commit(下一步) | ⏳ 待做 | 高(国内) |
| 区块链存证(可选) | 📋 后续 | 极高 |
| 中国版权中心登记(可选) | 📋 后续 | 法律推定 |

**当前强度**: 中(本地证据完整,但还没公网见证)
**完成 3 步后**: 高(已足够应对 99% 的争议场景)
**完成所有项后**: 极高(几乎不可被推翻)

---

## Bundle 的特殊价值

`git-bundle-v2.2-20260721.bundle` 是一个**独立、可传输的 git 仓库快照**:

任何人收到这个文件后可以这样验证:
```bash
git clone /path/to/git-bundle-v2.2-20260721.bundle my-verification
cd my-verification
git log
# 应该看到 commit 023907ceb837c3991260094c28f5ce20021f21b4
```

**比邮件附件好的地方**:
- 可以**单独**给律师/公证人/合作者传这个文件
- 验证简单(一行命令)
- 文件完整性强(自带校验)

**怎么用**:
- 上传到微盘/百度网盘/坚果云,作为长期冷备份
- 给可信第三方(导师/合作者/律师)各传一份
- 配合邮件自存使用,作为"独立第三方见证"

---

## 完整文件清单

```
_evidence/
├── README-快速指南.md                              # 本文件(先读这个)
├── ORIGINALITY-EVIDENCE-v2.2-20260721.md           # 给人看的证据文档
├── originality-evidence-v2.2-20260721.json         # 机器可读哈希
├── sha256-evidence-raw.txt                         # 原始哈希表(93 行)
├── root-hash.txt                                   # 根哈希(关键!)
├── EMAIL-TEMPLATE.md                               # 邮件自存操作指南
├── GITHUB-GUIDE.md                                 # GitHub 推送指南
├── generate-json.sh                                # JSON 生成脚本
└── git-bundle-v2.2-20260721.bundle                 # 独立 git 证据包(22MB)

总大小: 约 24MB(含 22MB bundle)
```

---

**最后提醒**: 完成 3 步后,在 README 顶部加一段"本套件首发于 2026-07-21,公开时间戳见..."的声明,把哈希值写进去,让任何看到套件的人都能验证时间戳。

---

**生成时间**: 2026-07-21 22:55 (Asia/Shanghai)

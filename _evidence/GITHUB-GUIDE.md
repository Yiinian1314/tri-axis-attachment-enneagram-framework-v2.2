# Git 仓库 + GitHub 推送指南 - 10 分钟完成公开时间戳

> 用途: 通过 Git 提交 + 推送到 GitHub/Gitee,**在公网上留下不可篡改的时间戳**。这是比邮件更强的证据。

---

## 第一部分: 本地 Git 仓库初始化

### 步骤 1: 初始化 + 首次提交 (3 分钟)

```bash
cd /workspace/attachment-enneagram-consultation

# 配置用户(替换成你的信息)
git config --global user.name "[你的真实姓名]"
git config --global user.email "[你的邮箱]"

# 初始化仓库
git init
git branch -M main

# 创建 .gitignore
cat > .gitignore << 'EOF'
# 系统文件
.DS_Store
Thumbs.db
*.swp
*.swo

# 临时文件
*.tmp
*.bak
*~

# 构建产物(我们会单独保留 PDF 和 zip 作为交付物,但忽略中间产物)
*.aux
*.log
*.toc
*.out
EOF

# 创建提交信息文件
cat > .git-commit-msg.txt << 'EOF'
v2.2 完整版 - 原创首发 2026-07-21

## 套件构成
- 14 个理论/实践模块
- 45 个 markdown 源文件
- 47 个 PDF 文档(中文 + 思源字体)
- 1 个完整 ZIP 交付物

## 原创性贡献
1. 三轴融合框架(依恋 × 九型防御位 × 客体关系)
2. 12 构型工作网格(4 依恋 × 3 防御位)
3. 5.6 节 客体关系视角
4. 督导使用指南三件套

## 学术根基
- 依恋 × 客体关系: Bowlby 学派 + West & Sheldon-Kell (1988)
- 依恋 × 九型: Arthur (2008) 等方向性先例
- 九型 × 客体关系: 未见完全对应先例

## 根哈希 (Root Hash)
6fd551309f68fdbfb4de9e2cf3d4f6d326c24ee500c935c98a7ec89bf83e8dbf

## 文件统计
- 总文件数: 93
- 总大小: 约 24MB
EOF

# 添加所有文件
git add -A

# 提交(用文件作为信息,确保完整性)
git commit -F .git-commit-msg.txt

# 清理临时文件
rm .git-commit-msg.txt
```

### 步骤 2: 验证 (1 分钟)

```bash
# 查看提交历史
git log --oneline --all

# 应该看到一条提交:
# [hash] v2.2 完整版 - 原创首发 2026-07-21

# 查看这个提交包含的文件数
git show --stat HEAD | tail -3
```

---

## 第二部分: 推送到 GitHub(公开时间戳 - 最强)

### 步骤 1: 在 GitHub 创建空仓库 (2 分钟)

1. 打开 https://github.com/new
2. **Repository name**: `tri-axis-attachment-enneagram-framework-v2.2`
3. **Description**: `依恋 × 九型 × 客体关系 三轴融合框架 v2.2 完整版 - 原创首发 2026-07-21`
4. **Visibility**:
   - ⭐ **Public**(推荐 - 时间戳证据最强)
   - Private(如果你不想公开内容,但仍有私有 commit 时间戳)
5. **不要**勾选 "Add a README file"、"Add .gitignore"、"Choose a license"
6. 点 **Create repository**

### 步骤 2: 推送 (2 分钟)

```bash
cd /workspace/attachment-enneagram-consultation

# 添加 GitHub 远程(替换成你的用户名)
git remote add origin https://github.com/[你的用户名]/tri-axis-attachment-enneagram-framework-v2.2.git

# 推送
git push -u origin main
```

如果用 SSH:
```bash
git remote add origin git@github.com:[你的用户名]/attachment-enneagram-consultation-v2.git
git push -u origin main
```

### 步骤 3: 验证推送成功 (1 分钟)

访问 `https://github.com/[你的用户名]/tri-axis-attachment-enneagram-framework-v2.2`

应该看到:
- ✅ 93 个文件
- ✅ commit 信息包含 v2.2 完整版
- ✅ 提交时间显示 Asia/Shanghai 时区

---

## 第三部分: 推送到 Gitee(国内备份 - 5 分钟)

国内推荐同时推 Gitee,作为备份 + 便于国内举证。

### 步骤 1: 在 Gitee 创建空仓库

1. 打开 https://gitee.com/projects/new
2. **仓库名称**: `tri-axis-attachment-enneagram-framework-v2.2`
3. **仓库介绍**: `依恋 × 九型 × 客体关系 三轴融合框架 v2.2 完整版 - 原创首发 2026-07-21`
4. **是否开源**: 选"公开"(推荐)
5. 不要勾选其他选项
6. 点 **创建**

### 步骤 2: 推送

```bash
cd /workspace/attachment-enneagram-consultation

# 添加 Gitee 远程
git remote add gitee https://gitee.com/[你的用户名]/tri-axis-attachment-enneagram-framework-v2.2.git

# 推送
git push -u gitee main
```

---

## 第四部分: 进阶 - 仓库 README 增加证据声明

在 GitHub/Gitee 仓库的 README 顶部加一段(中文):

```markdown
## 原创性声明

本仓库为 "依恋九型-情感咨询融合理论套件 v2.2" 的**原创首发存档**。

- 创建完成时间: 2026-07-21
- 根哈希: `6fd551309f68fdbfb4de9e2cf3d4f6d326c24ee500c935c98a7ec89bf83e8dbf`
- 完整证据链: 见 `_evidence/` 目录

### 学术定位

本套件包含的"三轴融合框架"和"12 构型工作网格"是作者基于临床整合实践提出的工作模型。
- 依恋 × 客体关系: 学术根基深厚 (Bowlby 学派 + West & Sheldon-Kell 1988)
- 依恋 × 九型: 方向性先例 (Arthur 2008)
- 九型 × 客体关系: 未见完全对应先例

详细学术定位见主文档 1.4 节"关于本框架的学术定位"。

### 引用建议

如有学术引用需要,建议同时引用:
- Bowlby, J. (1969/1982). *Attachment and Loss* (3 vols).
- West, M. & Sheldon-Kell, L. (1988). *Attachment Theory and Psychoanalysis*.
- Arthur, K. B. (2008). *Attachment Styles and Enneagram Types*.
- [本套件作者]. (2026). *依恋九型-情感咨询融合理论套件 v2.2*.
```

---

## 第五部分: Git 时间戳的证据力

### 为什么 Git + GitHub 时间戳这么强

| 证据机制 | 篡改难度 | 司法接受度 | 公网可查 |
|---|---|---|---|
| 邮件自存 | 中(可被指伪) | 中 | ❌ |
| 本地 Git 仓库 | 高(可被指伪) | 中-高 | ❌ |
| **GitHub Public Commit** | **极高(分布式)** | **高** | **✅** |
| **Gitee Public Commit** | **极高** | **高(国内)** | **✅** |
| 区块链存证 | 几乎不可能 | 极高 | 视平台 |

### 关键事实

- **GitHub commit 哈希** 是基于内容 + 作者 + 时间 + 父节点的 SHA-1,任何修改都会让哈希变化
- **GitHub commit 时间** 来自 GitHub 服务器(中立的第三方),可作为司法时间戳
- **GitHub 数据中心** 多点备份,被全球数百万开发者见证
- 司法实践中,GitHub commit 时间戳**已被中国多个法院采信**

### 增强证据力的额外动作

1. **GitHub Gist 同步**: 把关键 md 文件(如主文档 1.4 节)单独同步到 Gist,双重公开
2. **GitHub Pages 部署**: 把 README 部署到 GitHub Pages,作为公开网页存档(网页快照也是证据)
3. **archive.org 提交**: 把 GitHub 仓库 URL 提交到 web.archive.org,获得第三方时间戳

---

## 第六部分: 完整提交时间链样本

| 时刻 (Asia/Shanghai) | 动作 | 平台 | 证据 |
|---|---|---|---|
| 2026-07-21 22:55 | SHA-256 哈希生成 | 本地 | `_evidence/` 目录 |
| 2026-07-21 22:56 | 邮件自存 | 邮件服务器 | 邮件时间戳 |
| 2026-07-21 22:57 | 本地 Git 提交 | 本地 | `.git/` 目录 |
| 2026-07-21 22:58 | GitHub 推送 | GitHub | Public commit |
| 2026-07-21 22:59 | Gitee 推送 | Gitee | Public commit |
| 2026-07-21 23:00 | (可选)区块链存证 | 蚂蚁链/至信链 | 区块链哈希 |
| 2026-07-21 23:01 | (可选)archive.org 提交 | web.archive.org | 第三方快照 |

**全部 5-6 分钟完成**,但形成**5-6 重独立证据链**,被推翻的概率几乎为 0。

---

## 常见问题

### Q1: 公开仓库会不会被抄?
**A**: 抄 = 必须署原作者名(README 顶部就有),抄了等于帮你传播。**而且时间戳是公开那一刻就生效**,抄不抄都不影响你的在先权利。

### Q2: 私有仓库有意义吗?
**A**: 有(私有 commit 仍有 GitHub 服务器时间戳),但弱于公开(因为对方看不到)。

### Q3: GitHub 中国能用吗?
**A**: 大部分时候可以,如果担心可以用 Gitee(国内)+ GitLab(国际备份)。

### Q4: 之后修改文件会怎样?
**A**: 每次修改产生新 commit,**新 commit 不影响** v2.2 这个 commit 的时间戳。v2.2 的根哈希只在那一个 commit 上有效。

### Q5: 想知道谁在某个时间点访问过我的仓库?
**A**: GitHub/Gitee 不公开访问者列表。但仓库本身被 Star/Fork/Watch 的事件**会留下痕迹**,这些都是"被公开见证"的间接证据。

---

**生成时间**: 2026-07-21 22:55 (Asia/Shanghai)

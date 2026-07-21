#!/bin/bash
# 一键推送脚本 - 推送到 GitHub + Gitee
# 用法:
#   1. 先在 https://github.com/new 创建空仓库 (Public, 名称: tri-axis-attachment-enneagram-framework-v2.2)
#   2. 先在 https://gitee.com/projects/new 创建空仓库 (公开, 名称: tri-axis-attachment-enneagram-framework-v2.2)
#   3. 改下面 5 个变量为你的真实信息
#   4. 运行: bash _evidence/一键推送.sh

# ============= 在这里改 =============
YOUR_NAME="[你的真实姓名]"
YOUR_EMAIL="[你的真实邮箱]"
GITHUB_USER="[你的 GitHub 用户名]"
GITEE_USER="[你的 Gitee 用户名]"
# ===================================

set -e

echo "============================================"
echo "  依恋九型套件 v2.2 - 一键推送到 GitHub + Gitee"
echo "============================================"
echo ""

# 1. 改 git 配置
echo "[1/5] 改 git 配置..."
git config --global user.name "$YOUR_NAME"
git config --global user.email "$YOUR_EMAIL"
echo "  ✓ 用户名: $YOUR_NAME"
echo "  ✓ 邮箱: $YOUR_EMAIL"

# 2. 改 commit 作者(把临时作者改成你)
echo ""
echo "[2/5] 改 commit 作者(用 reset-author)..."
echo "  注意: 这会改 commit 哈希,改完后才是你的"
git commit --amend --reset-author --no-edit -q
git commit --amend --reset-author --no-edit -q  # 改第二个 commit
echo "  ✓ 改完,新 commit 哈希:"
git rev-parse HEAD

# 3. 添加 GitHub 远程
echo ""
echo "[3/5] 配置 GitHub 远程..."
GITHUB_URL="https://github.com/${GITHUB_USER}/tri-axis-attachment-enneagram-framework-v2.2.git"
git remote add origin "$GITHUB_URL" 2>/dev/null || git remote set-url origin "$GITHUB_URL"
echo "  ✓ GitHub URL: $GITHUB_URL"

# 4. 推 GitHub
echo ""
echo "[4/5] 推送到 GitHub..."
echo "  (如果弹出认证窗口,请输入 GitHub 用户名 + Personal Access Token)"
git push -u origin main
echo "  ✓ GitHub 推送完成"

# 5. 添加 Gitee 远程 + 推送
echo ""
echo "[5/5] 配置 Gitee 远程 + 推送..."
GITEE_URL="https://gitee.com/${GITEE_USER}/tri-axis-attachment-enneagram-framework-v2.2.git"
git remote add gitee "$GITEE_URL" 2>/dev/null || git remote set-url gitee "$GITEE_URL"
echo "  ✓ Gitee URL: $GITEE_URL"
git push -u gitee main
echo "  ✓ Gitee 推送完成"

echo ""
echo "============================================"
echo "  ✅ 全部完成!"
echo "============================================"
echo ""
echo "GitHub: https://github.com/${GITHUB_USER}/tri-axis-attachment-enneagram-framework-v2.2"
echo "Gitee:  https://gitee.com/${GITEE_USER}/tri-axis-attachment-enneagram-framework-v2.2"
echo ""
echo "新 commit 哈希:"
git rev-parse HEAD
echo ""
echo "下一步:"
echo "1. 访问上面两个 URL 确认仓库公开可见"
echo "2. 在仓库的 About/描述里加: '原创首发 2026-07-21, 根哈希 6fd551309f68f...'"
echo "3. 把这两个 URL 补到 README.md 的'原创性证据'小节"
echo "4. 邮件自存: 照 EMAIL-TEMPLATE.md 把 _evidence 整个打包发自己邮箱"
echo ""

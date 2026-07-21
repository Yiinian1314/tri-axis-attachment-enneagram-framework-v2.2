# _build/ — 构建工具与模板

本目录是构建工具区,**不打包进交付物**。

## 📁 文件清单

| 文件 | 作用 |
|------|------|
| `template.tex` | LaTeX 模板(页眉带版本号 + 思源字体 + 配色) |
| `convert.sh` | 单文件 MD → PDF 转换 |
| `rebuild_all.sh` | 一键全量重建 + 打包 + 验证 |
| `verify.sh` | 交付前自动验证(16 项检查,含 9 型错配 + TOC 一致性) |
| `audit-9-types.sh` | 9 型描述错配自动审计(独立可用) |
| `audit-toc-sync.sh` | 章节编号一致性审计(目录 ↔ 正文)(独立可用) |
| `README.md` | 本文件 |

## 🔄 推荐工作流

### 场景 A:单文件改了,想重新转这个文件
```bash
./_build/convert.sh "01-理论架构与咨询指南.md" \
                   "PDFs/01-理论架构与咨询指南.pdf" \
                   "主文档 (v2.2)"
```

### 场景 B:模板改了,想重转所有 PDF
```bash
# 默认: 只重转 PDF,不打包不验证
./_build/rebuild_all.sh v2.2

# 如果用户说"打包":
./_build/rebuild_all.sh v2.2 --pack --verify
```

### 场景 C:升级版本号(从 v2.2 → v2.3)
```bash
# 1) 改模板硬编码版本号
sed -i 's/v2\.2/v2.3/g' _build/template.tex

# 2) 改 README/主文档 版本号
sed -i 's/v2\.2/v2.3/g' README.md
sed -i 's/v2\.2/v2.3/g' 01-理论架构与咨询指南.md

# 3) 改 PDF 源文件里的 v2.2 标识
# 用 grep -rl 'v2.2' 找所有位置,逐个改

# 4) 全量重建
./_build/rebuild_all.sh v2.3
```

### 场景 D:交付前确认产物 OK
```bash
./_build/verify.sh v2.2
# 14 项检查,任何一项失败就退出 1
```

## 🤝 交付前确认流程(必做)

升级或重转完 PDF 后,**默认不打 zip**,而是:

1. **告诉用户**: PDF 重建好了,展示 2-3 个关键页(主文档首页/速查卡/PPT 1 页)
2. **问用户**: "要不要打包?"
3. **等回答**:
   - 用户说"打" / "打包" / "OK" → `rebuild_all.sh v2.2 --pack --verify`
   - 用户说"先看看" / "再调整" → 等下一步指示
   - 用户说"改 X 再打" → 先改,改完重复 1-3

**绝对不要**:
- ❌ 升级完自己就 `rebuild_all.sh --all` 打完事
- ❌ 用户没确认就发 zip
- ❌ "顺手"打个新版本号

**rebuild_all.sh 默认行为**:
- 不带参数:只重转 PDF,不打包不验证
- `--pack`:打包 zip
- `--verify`:跑 verify.sh
- `--all`:等价于 `--pack --verify`

## 🚨 核心纪律(从这次复盘沉淀)

### ❌ 错误模式(我之前犯的)

1. **"源文件升级 ≠ 产物升级"**
   - 改完 8 个 PPT slide 源文件 → 以为完事
   - 实际: 没重生成 PPTX,没重导 PDF,zip 还是 v1.0 双轴版
   - 教训: 源文件 / PPTX / PDF / zip 是**4 层独立产物**,必须逐层验证

2. **"源文件 grep 通过 = 产物通过"**
   - 改完源文件 grep "v2.2" 命中
   - 实际: PPTX/PDF 还是旧版
   - 教训: 必须用 `pdftotext` 验证产物,不能用源文件 grep

3. **"打包完不验证"**
   - 打完 zip 就交
   - 实际: zip 里的 PPT PDF 还是 v1.0
   - 教训: 打包前必须跑 verify.sh

4. **"擅自打包"**
   - 升级完自己默认就打 zip
   - 实际: 用户可能还想再调整,或者正在审 PDF
   - 教训: **交付前问用户"要不要打包",用户说打才打**

5. **"编造事实"** (最致命)
   - 写"xxx 在 1980-2010 年代是主流"这种无文献支持的断言
   - 教训: **事实类表述必须可查证**,否则标"实践经验"或删除

### ✅ 正确流程

```
1. 改源文件 (.md / .js / .html)
       ↓
2. 重新生成中间产物 (PPTX / PDF)
       ↓
3. 用 pdftotext 验证产物含目标版本号 + 关键概念
       ↓
4. 重新打包 zip
       ↓
5. 运行 verify.sh 验证 zip 内产物
       ↓
6. 交付
```

**关键工具**:
- `pdftotext` 验证 PDF 文本内容
- `pdftoppm` 渲染 PNG 视觉验证(关键页)
- `pdffonts` 验证字体是 SC
- `verify.sh` 14 项自动验证

## 🛡️ 9 型描述错配自动审计

**问题:**写“多个示例"时,容易复制粘贴忘了改"X 号"那一行,导致"九型"是 8 号但"三轴整合"却写 2 号。

**解法:**`_build/audit-9-types.sh` 会扫所有 md 文件,检查"X 号核心恐惧/欲望/等式"是否跟类型对得上。

**用法:**
```bash
bash _build/audit-9-types.sh                   # 扫全部 md
bash _build/audit-9-types.sh 某个文件.md        # 扫单个文件
```

**会报的错(示例):**
```
❌ /path/to/file.md (3 处):
   行 9:  '2号核心恐惧被控制...' → 实际更像 8号
   行 10: '8号核心恐惧不被爱...' → 实际更像 2号
   行 11: '5号核心恐惧痛苦...'  → 实际更像 7号
```

**集成:** `verify.sh` 交付前会调用。

**限制:**脚本是“启发式检查",不是语义检查。某些表达是隐含的(如"2 号核心恐惧后面写'被需要但不表达'")会报误报。需人工复核。

## 🔗 章节编号一致性审计(TOC ↔ 正文)

**问题:**改了"3.2.5 → 3.3"时,改了正文章节标题但漏改"## 目录"区,导致 PDF 目录仍显示旧的(3.3 防御机制),但正文是新的(3.3 九型 × 客体关系)。

**解法:**`_build/audit-toc-sync.sh` 扫所有 md 文件,检查目录列表里的 anchor 链接是否能在正文找到对应章节。

**用法:**
```bash
bash _build/audit-toc-sync.sh
```

**会报的错(示例):**
```
❌ ./01-理论架构与咨询指南.md
   目录 '#33-防御机制的三层识别' 指向旧标题
   实际章节: '### 3.4 防御机制的三层识别'
```

**集成:** `verify.sh` 检查 7/7 会调用。

## 🚨 事实核查纪律(必读)

**绝不编造事实类表述!** 包括:
- 年代断言:如 "xxx 是 1980-2010 年代主流" ← 30 年跨度无文献支持
- 历史地位:如 "xxx 是权威/标准/经典"
- 学派声称:如 "xxx 学派认为..." / "xxx 创立..."
- 数据统计:如 "xx% 的咨询师..." ← 拍脑袋
- 引用论文/书名:如 "xxx (1999) 发现..." ← 实际没查

**只能写什么**:
- 公认的学术事实(可查证):Bowlby 1969 依恋理论
- 工具名称:RHETI 问卷、Riso-Hudson 9 层模型
- 概念名称:Klein 的 "投射性认同"、Kohut 的 "自体客体"
- 临床经验总结(标 "实践/经验"):"临床经验显示..."

**自我审查脚本**:
```bash
python3 << 'EOF'
import re, os
for root, _, names in os.walk('.'):
    if 'PDFs' in root: continue
    for n in names:
        if not n.endswith('.md'): continue
        path = os.path.join(root, n)
        with open(path, encoding='utf-8') as f:
            for i, line in enumerate(f, 1):
                if re.search(r'(19|20)\d{2}\s*[-~到至]\s*(19|20)?\d{0,2}\s*年代', line):
                    print(f'  {path}:{i} {line[:100]}')
                if re.search(r'(广泛|主流|权威|标准|经典)\s*(使用|认可|采用)', line):
                    print(f'  {path}:{i} {line[:100]}')
EOF
```

**示例修正**:
```diff
- 依恋 × 九型(双轴)在 1980-2010 年代是主流的咨询整合框架
+ 在情感咨询实践中,依恋 × 九型(双轴)是常见的整合框架
+ (本节基于整合实践经验,非历史性声明)
```

## 📊 verify.sh 检查项(14 项)

1. **PDF 页眉含 v2.2 标识**(45/45)
2. **PDF 字体是 SC(思源宋体/黑体)**(避免 jp fallback)
3. **PPT 标题含三轴**(依恋 × 九型 × 客体关系)
4. **PPT 含 "三轴" 关键词**(≥3 次)
5. **PPT 含 "客体关系" 关键词**(≥3 次)
6. **PPT 含 v2.2 标识**
7. **PPT 不含 v1.0 旧标识**(警告)
8. **主文档含三轴核心概念**
9. **案例库 5.6 节**(客体关系视角)
10. **10 客体关系专题包**
11. **zip 文件存在**
12. **zip 大小合理**(>5MB)
13. **zip CRC 校验通过**
14. **zip 内的 PPT PDF 含 v2.2**(防 "外 v2.2 内 v1.0")

## 🔧 LaTeX 模板关键配置

```latex
% 字体 - 必须用 .otf 文件名而非 family name
\setCJKmainfont{NotoSerifCJK-SC-Regular.otf}[
  Path = /usr/share/fonts/opentype/noto/,
  BoldFont = NotoSerifCJK-SC-Bold.otf
]
\setCJKfamilyfont{zhhei}{NotoSansCJK-SC-Regular.otf}[
  Path = /usr/share/fonts/opentype/noto/
]

% 页眉 - 显式指定字体和字号
\fancyhead[L]{\fontsize{10}{12}\selectfont\CJKfamily{zhhei} 依恋 × 九型 × 客体关系 情感咨询融合理论 (v2.2)}
```

**3 个隐藏坑**:
1. 不要用 `ctex` 文档类: 锁字体,后续 setCJKmainfont 不生效
2. 不要用 family name: fontconfig 优先 .ttc,子集映射到 JP
3. 不要 `--highlight-style=tango`: 引入别的字体配置导致回退

## 📝 备忘

- 未来加新模块: 改 `rebuild_all.sh` 里的 `for module in ...` 列表
- 未来加新检查项: 改 `verify.sh` 里的 check 函数
- 未来升级版本号: 见上面的 "场景 C"

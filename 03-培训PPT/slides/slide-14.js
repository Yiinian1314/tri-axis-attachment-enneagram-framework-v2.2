// Slide 14: High-Frequency Combinations
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText('高频构型速查', {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 30, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.primary
  });
  slide.addText('High-Frequency Combinations in Practice', {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 12, fontFace: 'Arial', italic: true,
    color: theme.accent, charSpacing: 3
  });

  // 6 cards in 2x3 grid
  const combos = [
    {
      label: '焦虑 x 2号',
      desc: '关系中过度付出 → 期待回报 → 未得 → 情绪勒索',
      tip: '"我能不能不付出地被爱"'
    },
    {
      label: '焦虑 x 6号',
      desc: '反复求证 / 测试 / 投射怀疑 / 信任建立极慢',
      tip: '区分"直觉"vs"投射的恐惧"'
    },
    {
      label: '回避 x 5号',
      desc: '退入思考 / 情感冻结 / 亲密升级时本能想撤',
      tip: '慢暴露, 让他觉得"感受是安全的"'
    },
    {
      label: '回避 x 8号',
      desc: '外强中干 / 控制 / 不允许自己"被看到弱"',
      tip: '在绝对安全的咨询空间里承认脆弱'
    },
    {
      label: '混乱 x 4号',
      desc: '推拉戏剧 / 自我矛盾 / 不知道"被爱"该怎么接',
      tip: '持续在场 + 命名"推开"的预警信号'
    },
    {
      label: '焦虑 x 4号',
      desc: '戏剧化追 / 强烈情绪起伏 / 在关系中放大感受',
      tip: '命名激活态, 慢下来回到身体'
    }
  ];

  combos.forEach((c, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 0.5 + col * 3.1;
    const y = 1.5 + row * 1.7;
    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.9, h: 1.5,
      fill: { color: 'FFFFFF' }, line: { color: theme.light, width: 1 }
    });
    // Top color bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.9, h: 0.06,
      fill: { color: theme.accent }, line: { type: 'none' }
    });
    // Label
    slide.addText(c.label, {
      x: x + 0.2, y: y + 0.15, w: 2.5, h: 0.35,
      fontSize: 16, fontFace: 'Microsoft YaHei', bold: true,
      color: theme.primary
    });
    // Desc
    slide.addText(c.desc, {
      x: x + 0.2, y: y + 0.55, w: 2.5, h: 0.55,
      fontSize: 10, fontFace: 'Microsoft YaHei',
      color: theme.secondary, lineSpacingMultiple: 1.2
    });
    // Tip
    slide.addText('干预核心: ' + c.tip, {
      x: x + 0.2, y: y + 1.1, w: 2.5, h: 0.35,
      fontSize: 10, fontFace: 'Microsoft YaHei', bold: true, italic: true,
      color: theme.accent
    });
  });

  slide.addText('14', {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: 'Arial',
    color: theme.secondary, align: 'right'
  });

  // Brand watermark
  slide.addText('一念三轴 · Yiinian Triaxis (v2.2)', {
    x: 6.5, y: 5.35, w: 3.0, h: 0.25,
    fontSize: 9, fontFace: 'Microsoft YaHei',
    color: theme.accent, align: 'right'
  });

}

module.exports = { createSlide };
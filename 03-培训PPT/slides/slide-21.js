// Slide 21: Case - Avoidant 5
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText('案例: 回避 x 5号观察型', {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.primary
  });
  slide.addText('Case Study: Dismissive-Avoidant x Type 5', {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 12, fontFace: 'Arial', italic: true,
    color: theme.accent, charSpacing: 3
  });

  // Left: profile
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.5, w: 4.4, h: 3.5,
    fill: { color: 'FFFFFF' }, line: { color: theme.light, width: 1 }
  });
  slide.addText('来访者画像', {
    x: 0.7, y: 1.6, w: 4, h: 0.4,
    fontSize: 15, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.accent
  });

  const profile = [
    'M 先生, 38 岁, 程序员',
    '主诉: "我太独立, 没办法靠近她"',
    '早年: 母亲很忙, 他从小自己玩, "不碍事" 让他活下来',
    '"独立 = 自由 / 依赖 = 枷锁" 的等式',
    '健康层级: 平均 (4-5 层)',
    '在亲密升级时, 本能想撤, 把"感受" 切换为"分析"'
  ];

  profile.forEach((p, i) => {
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: 2.1 + i * 0.42, w: 0.08, h: 0.08,
      fill: { color: theme.accent }, line: { type: 'none' }
    });
    slide.addText(p, {
      x: 0.85, y: 2.05 + i * 0.42, w: 4, h: 0.3,
      fontSize: 10, fontFace: 'Microsoft YaHei',
      color: theme.primary
    });
  });

  // Right: intervention
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 1.5, w: 4.4, h: 3.5,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText('咨询路径', {
    x: 5.3, y: 1.6, w: 4, h: 0.4,
    fontSize: 15, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.accent
  });

  const interventions = [
    '阶段 1: 不催促"打开"——先承认"你的独立很可能保护过你"',
    '阶段 2: 小剂量身体——"你愿意试, 一边说, 一边把手放在胸口吗?"',
    '阶段 3: 命名"不去感受"——"你刚才说时眼眶动了, 敢感受不容易"',
    '阶段 4: 慢暴露——"想象她哭着说我需要你, 你身体什么反应? 想关上门? 让它在"',
    '整合方向: 健康 5 号的"有选择的连接"——既独立, 也能深度共在'
  ];

  interventions.forEach((it, i) => {
    slide.addText(it, {
      x: 5.3, y: 2.1 + i * 0.55, w: 4, h: 0.55,
      fontSize: 10, fontFace: 'Microsoft YaHei',
      color: theme.bg, lineSpacingMultiple: 1.2
    });
  });

  slide.addText('21', {
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
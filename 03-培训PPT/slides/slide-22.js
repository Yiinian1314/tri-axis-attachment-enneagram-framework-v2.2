// Slide 22: Case - Disorganized 4
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText('案例: 混乱 x 4号浪漫型', {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.primary
  });
  slide.addText('Case Study: Fearful-Avoidant x Type 4', {
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
    'C 女士, 28 岁, 设计师',
    '主诉: 反复在关系里追-逃, "我知道不对, 但我停不下来"',
    '早年: 父母离异, 在两边被"推"过来又"推"过去',
    '"被爱 = 即将失去" 的底层逻辑',
    '健康层级: 不健康 (6-7 层)',
    '解离 + 戏剧化, 经常"测试"伴侣, 测试失败后自我封闭'
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
    '阶段 1: 命名激活态——"你的系统在响警报, 但这不代表警报是真的"',
    '阶段 2: 命名"要消失" 的预警——"你发现你在发抖, 我和你一起"',
    '阶段 3: 触碰核心——"你最怕的是被离开, 还是被靠近之后又失去?"',
    '阶段 4: 矫正性经验——咨询师"持续在场, 不被推开吓退" 本身就是治疗',
    '整合方向: 健康 4 号的"将感受转化为创造"——从沉溺到落地'
  ];

  interventions.forEach((it, i) => {
    slide.addText(it, {
      x: 5.3, y: 2.1 + i * 0.55, w: 4, h: 0.55,
      fontSize: 10, fontFace: 'Microsoft YaHei',
      color: theme.bg, lineSpacingMultiple: 1.2
    });
  });

  slide.addText('22', {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: 'Arial',
    color: theme.secondary, align: 'right'
  });
}

module.exports = { createSlide };

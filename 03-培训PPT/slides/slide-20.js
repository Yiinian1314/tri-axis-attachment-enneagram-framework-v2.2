// Slide 20: Case - Anxious 2
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText('案例: 焦虑 x 2号助人型', {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.primary
  });
  slide.addText('Case Study: Anxious-Preoccupied x Type 2', {
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
    'L 女士, 32 岁, 市场营销',
    '主诉: 亲密关系中过度付出, 对方疏远后情绪崩溃',
    '早年: 父母情绪不稳, 她通过"照顾弟弟"获得关注',
    '"被爱 = 被需要" 的等式已经形成 20+ 年',
    '健康层级: 平均-不健康过渡 (5-6 层)',
    '压力方向: 2 -> 8, 表现为爆发与控制'
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
    '阶段 1: 不急着安抚"被抛弃"的恐惧——先慢下来, 让她看见自己的付出模式',
    '阶段 2: 邀请她说"过去一周, 你自己想做的事, 做了多少?"',
    '阶段 3: 触碰核心——"如果真的不被需要, 你会变成什么?"',
    '阶段 4: 新经验——"一个朋友说, 我不需要你做什么, 我就是爱你"',
    '整合方向: "我能不能不付出地被爱"——这是 2 号真正的自由'
  ];

  interventions.forEach((it, i) => {
    slide.addText(it, {
      x: 5.3, y: 2.1 + i * 0.55, w: 4, h: 0.55,
      fontSize: 10, fontFace: 'Microsoft YaHei',
      color: theme.bg, lineSpacingMultiple: 1.2
    });
  });

  slide.addText('20', {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: 'Arial',
    color: theme.secondary, align: 'right'
  });
}

module.exports = { createSlide };

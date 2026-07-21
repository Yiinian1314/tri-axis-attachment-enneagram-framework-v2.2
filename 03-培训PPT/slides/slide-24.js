// Slide 24: Self-Calibration Content
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText('咨询师的三轴自我觉察 (v2.2)', {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 30, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.primary
  });
  slide.addText('Therapist Self-Awareness on Tri-Axis (依恋×九型×客体关系)', {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 12, fontFace: 'Arial', italic: true,
    color: theme.accent, charSpacing: 3
  });

  // Two main blocks
  // Block 1: your attachment
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.5, w: 4.4, h: 3.0,
    fill: { color: 'FFFFFF' }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.5, w: 0.1, h: 3.0,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText('你的依恋象限, 影响你对来访者的反应', {
    x: 0.7, y: 1.6, w: 4, h: 0.4,
    fontSize: 14, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.primary
  });

  const items1 = [
    '焦虑咨询师 x 回避来访者: 容易"没被回应" 而生气 / 退却',
    '焦虑咨询师 x 焦虑来访者: 容易陷入"双焦虑" 的纠缠',
    '回避咨询师 x 焦虑来访者: 容易被压垮, 或变得麻木',
    '混乱咨询师 x 混乱来访者: 容易一起"翻车"',
    '安全咨询师: 是稀缺资源, 但也可能"无法理解" 非安全来访者'
  ];
  items1.forEach((it, i) => {
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: 2.1 + i * 0.45, w: 0.08, h: 0.08,
      fill: { color: theme.accent }, line: { type: 'none' }
    });
    slide.addText(it, {
      x: 0.85, y: 2.05 + i * 0.45, w: 4, h: 0.4,
      fontSize: 10, fontFace: 'Microsoft YaHei',
      color: theme.primary, lineSpacingMultiple: 1.2
    });
  });

  // Block 2: your enneagram
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 1.5, w: 4.4, h: 3.0,
    fill: { color: 'FFFFFF' }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 1.5, w: 0.1, h: 3.0,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText('你的九型 + 客体关系维度, 决定你的"咨询盲区"', {
    x: 5.3, y: 1.6, w: 4.2, h: 0.4,
    fontSize: 14, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.primary
  });

  const items2 = [
    '1 号咨询师: 可能对来访者"太严" / 难以接纳混乱',
    '2 号咨询师: 容易过度卷入, 难以拒绝"被需要"',
    '3 号咨询师: 看起来什么都会, 难以长处"不知道"',
    '5 号咨询师: 难以触碰身体, 容易把情感转化为分析',
    '9 号咨询师: 难以碰冲突, 容易跟着来访者的节奏走',
    'v2.2 新增: 咨询师自身的"内在客体关系图"也会被激活——警惕自己的投射性认同'
  ];
  items2.forEach((it, i) => {
    slide.addShape(pres.shapes.OVAL, {
      x: 5.3, y: 2.1 + i * 0.45, w: 0.08, h: 0.08,
      fill: { color: theme.accent }, line: { type: 'none' }
    });
    slide.addText(it, {
      x: 5.45, y: 2.05 + i * 0.45, w: 4, h: 0.4,
      fontSize: 10, fontFace: 'Microsoft YaHei',
      color: theme.primary, lineSpacingMultiple: 1.2
    });
  });

  // Bottom callout
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.7, w: 9, h: 0.4,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText('应对: 暂停, 督导(用 5 技术自评卡), 回到自己的身体; 必要时要转介来访者', {
    x: 0.7, y: 4.75, w: 8.6, h: 0.3,
    fontSize: 12, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.bg
  });

  slide.addText('24', {
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
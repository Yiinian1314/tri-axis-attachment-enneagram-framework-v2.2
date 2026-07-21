// Slide 6: Anxiety-Avoidance Two-Dimension Model
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText('焦虑-回避: 一个连续谱, 而不是四类人', {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.primary
  });
  slide.addText('Two Dimensions, Not Four Types', {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 12, fontFace: 'Arial', italic: true,
    color: theme.accent, charSpacing: 3
  });

  // Quadrant diagram (left side)
  // Background axes area
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.6, w: 5, h: 3.3,
    fill: { color: 'FFFFFF' }, line: { color: theme.light, width: 1 }
  });

  // Vertical axis (Avoidance)
  slide.addShape(pres.shapes.LINE, {
    x: 3.0, y: 1.8, w: 0, h: 2.9,
    line: { color: theme.secondary, width: 1 }
  });
  // Arrow top
  slide.addText('高回避', {
    x: 3.0, y: 1.6, w: 0.8, h: 0.25,
    fontSize: 9, fontFace: 'Microsoft YaHei',
    color: theme.secondary, align: 'center'
  });
  slide.addText('低回避', {
    x: 3.0, y: 4.7, w: 0.8, h: 0.25,
    fontSize: 9, fontFace: 'Microsoft YaHei',
    color: theme.secondary, align: 'center'
  });

  // Horizontal axis (Anxiety)
  slide.addShape(pres.shapes.LINE, {
    x: 0.7, y: 3.25, w: 4.6, h: 0,
    line: { color: theme.secondary, width: 1 }
  });
  slide.addText('低焦虑', {
    x: 0.5, y: 3.32, w: 0.7, h: 0.25,
    fontSize: 9, fontFace: 'Microsoft YaHei',
    color: theme.secondary
  });
  slide.addText('高焦虑', {
    x: 4.65, y: 3.32, w: 0.7, h: 0.25,
    fontSize: 9, fontFace: 'Microsoft YaHei',
    color: theme.secondary
  });

  // Quadrant labels
  slide.addText('混乱', {
    x: 0.7, y: 1.85, w: 2.1, h: 0.35,
    fontSize: 16, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.accent
  });
  slide.addText('高焦虑 + 高回避', {
    x: 0.7, y: 2.15, w: 2.1, h: 0.25,
    fontSize: 9, fontFace: 'Microsoft YaHei',
    color: theme.secondary
  });

  slide.addText('回避', {
    x: 3.05, y: 1.85, w: 2.1, h: 0.35,
    fontSize: 16, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.accent
  });
  slide.addText('低焦虑 + 高回避', {
    x: 3.05, y: 2.15, w: 2.1, h: 0.25,
    fontSize: 9, fontFace: 'Microsoft YaHei',
    color: theme.secondary
  });

  slide.addText('焦虑', {
    x: 0.7, y: 3.7, w: 2.1, h: 0.35,
    fontSize: 16, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.accent
  });
  slide.addText('高焦虑 + 低回避', {
    x: 0.7, y: 4.0, w: 2.1, h: 0.25,
    fontSize: 9, fontFace: 'Microsoft YaHei',
    color: theme.secondary
  });

  slide.addText('安全', {
    x: 3.05, y: 3.7, w: 2.1, h: 0.35,
    fontSize: 16, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.accent
  });
  slide.addText('低焦虑 + 低回避', {
    x: 3.05, y: 4.0, w: 2.1, h: 0.25,
    fontSize: 9, fontFace: 'Microsoft YaHei',
    color: theme.secondary
  });

  // Right side: key insights
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.8, y: 1.6, w: 3.7, h: 3.3,
    fill: { color: theme.primary }, line: { type: 'none' }
  });

  slide.addText('关键认知', {
    x: 6.0, y: 1.75, w: 3.4, h: 0.4,
    fontSize: 16, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.accent
  });

  slide.addText('1. 不是性格, 是关系中的情绪调节策略', {
    x: 6.0, y: 2.25, w: 3.4, h: 0.5,
    fontSize: 12, fontFace: 'Microsoft YaHei',
    color: theme.bg
  });

  slide.addText('2. 早期形成, 但可在后续关系中被修复', {
    x: 6.0, y: 2.8, w: 3.4, h: 0.5,
    fontSize: 12, fontFace: 'Microsoft YaHei',
    color: theme.bg
  });

  slide.addText('3. 压力下激活, 稳定时休眠', {
    x: 6.0, y: 3.35, w: 3.4, h: 0.5,
    fontSize: 12, fontFace: 'Microsoft YaHei',
    color: theme.bg
  });

  slide.addText('4. 大多数人是"获得性安全"——非原生, 但可后天建构', {
    x: 6.0, y: 3.9, w: 3.4, h: 0.7,
    fontSize: 12, fontFace: 'Microsoft YaHei',
    color: theme.bg
  });

  // Page number
  slide.addText('06', {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: 'Arial',
    color: theme.secondary, align: 'right'
  });
}

module.exports = { createSlide };

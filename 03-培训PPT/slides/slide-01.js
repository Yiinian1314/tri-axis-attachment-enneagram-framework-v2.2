// Slide 1: Cover Page
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left vertical accent block
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.35, h: 5.625,
    fill: { color: theme.accent },
    line: { type: 'none' }
  });

  // Top decorative dot
  slide.addShape(pres.shapes.OVAL, {
    x: 0.9, y: 0.8, w: 0.18, h: 0.18,
    fill: { color: theme.accent },
    line: { type: 'none' }
  });

  // Small subtitle
  slide.addText('Emotion Consultation Training', {
    x: 1.2, y: 0.75, w: 7, h: 0.3,
    fontSize: 12, fontFace: 'Arial',
    color: theme.secondary, charSpacing: 4
  });

  // Main title - Chinese
  slide.addText('依恋 x 九型 x 客体关系', {
    x: 0.6, y: 1.3, w: 9.0, h: 1.2,
    fontSize: 54, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.primary
  });

  // Subtitle line
  slide.addText('从双轴升级到三轴 · 情感咨询的整合理论架构与实操', {
    x: 0.6, y: 2.5, w: 9.0, h: 0.6,
    fontSize: 22, fontFace: 'Microsoft YaHei',
    color: theme.secondary
  });

  // Description
  slide.addText('从看到"怎么反应"到看穿"为什么这样反应"', {
    x: 0.9, y: 3.25, w: 8.5, h: 0.4,
    fontSize: 16, fontFace: 'Microsoft YaHei',
    color: theme.secondary, italic: true
  });

  // Bottom info bar
  slide.addShape(pres.shapes.LINE, {
    x: 0.9, y: 4.5, w: 4, h: 0,
    line: { color: theme.accent, width: 2 }
  });

  slide.addText('情感咨询师 · 伴侣治疗师 · 成长陪伴者', {
    x: 0.9, y: 4.65, w: 6, h: 0.3,
    fontSize: 13, fontFace: 'Microsoft YaHei',
    color: theme.primary
  });

  slide.addText('v2.2 · 2026', {
    x: 0.9, y: 5.0, w: 4, h: 0.3,
    fontSize: 11, fontFace: 'Arial',
    color: theme.secondary
  });
}

module.exports = { createSlide };

// Slide 12: Section Divider 3 - Mapping
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  slide.addText('03', {
    x: 0.6, y: 0.8, w: 3, h: 2.5,
    fontSize: 180, fontFace: 'Arial', bold: true,
    color: theme.accent
  });

  slide.addText('三轴融合框架', {
    x: 4, y: 1.8, w: 5.5, h: 0.8,
    fontSize: 40, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.bg
  });

  slide.addText('The Tri-Axis Framework', {
    x: 4, y: 2.65, w: 5.5, h: 0.4,
    fontSize: 16, fontFace: 'Arial', italic: true,
    color: theme.light
  });

  slide.addText('依恋 × 九型 × 客体关系 = 来访者的"内在世界"', {
    x: 4, y: 3.3, w: 5.5, h: 0.4,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: theme.light
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4, y: 3.85, w: 1.2, h: 0.04,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  slide.addText('12', {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: 'Arial',
    color: theme.light, align: 'right'
  });
}

module.exports = { createSlide };

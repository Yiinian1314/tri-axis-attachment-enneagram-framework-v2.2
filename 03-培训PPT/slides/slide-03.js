// Slide 3: Section Divider 1 - Attachment
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // Large section number
  slide.addText('01', {
    x: 0.6, y: 0.8, w: 3, h: 2.5,
    fontSize: 180, fontFace: 'Arial', bold: true,
    color: theme.accent
  });

  // Section title
  slide.addText('依恋理论核心', {
    x: 4, y: 1.8, w: 5.5, h: 0.8,
    fontSize: 40, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.bg
  });

  // Subtitle EN
  slide.addText('Attachment Theory', {
    x: 4, y: 2.65, w: 5.5, h: 0.4,
    fontSize: 16, fontFace: 'Arial', italic: true,
    color: theme.light
  });

  // Description
  slide.addText('从"安全 vs 焦虑 vs 回避"看关系中的情绪调节策略', {
    x: 4, y: 3.3, w: 5.5, h: 0.4,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: theme.light
  });

  // Accent line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4, y: 3.85, w: 1.2, h: 0.04,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // Page number
  slide.addText('03', {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: 'Arial',
    color: theme.light, align: 'right'
  });
}

module.exports = { createSlide };

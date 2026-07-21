// Slide 8: Section Divider 2 - Enneagram
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  slide.addText('02', {
    x: 0.6, y: 0.8, w: 3, h: 2.5,
    fontSize: 180, fontFace: 'Arial', bold: true,
    color: theme.accent
  });

  slide.addText('九型人格核心', {
    x: 4, y: 1.8, w: 5.5, h: 0.8,
    fontSize: 40, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.bg
  });

  slide.addText('Enneagram', {
    x: 4, y: 2.65, w: 5.5, h: 0.4,
    fontSize: 16, fontFace: 'Arial', italic: true,
    color: theme.light
  });

  slide.addText('从"核心恐惧/欲望/防御"看人格的内在操作系统', {
    x: 4, y: 3.3, w: 5.5, h: 0.4,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: theme.light
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4, y: 3.85, w: 1.2, h: 0.04,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  slide.addText('08', {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: 'Arial',
    color: theme.light, align: 'right'
  });
}

module.exports = { createSlide };

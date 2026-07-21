// Slide 2: Table of Contents
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText('目录', {
    x: 0.6, y: 0.5, w: 4, h: 0.7,
    fontSize: 36, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.primary
  });

  // Subtitle
  slide.addText('CONTENTS', {
    x: 0.6, y: 1.15, w: 4, h: 0.3,
    fontSize: 12, fontFace: 'Arial',
    color: theme.accent, charSpacing: 6
  });

  // Section 1
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 1.85, w: 0.06, h: 0.55,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText('01', {
    x: 0.85, y: 1.8, w: 0.6, h: 0.4,
    fontSize: 22, fontFace: 'Arial', bold: true,
    color: theme.accent
  });
  slide.addText('依恋理论核心', {
    x: 1.5, y: 1.83, w: 3.5, h: 0.4,
    fontSize: 18, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.primary
  });
  slide.addText('Attachment Theory · 四象限 · 三轴基础', {
    x: 1.5, y: 2.18, w: 4, h: 0.3,
    fontSize: 11, fontFace: 'Microsoft YaHei',
    color: theme.secondary
  });

  // Section 2
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 2.7, w: 0.06, h: 0.55,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText('02', {
    x: 0.85, y: 2.65, w: 0.6, h: 0.4,
    fontSize: 22, fontFace: 'Arial', bold: true,
    color: theme.accent
  });
  slide.addText('九型人格核心', {
    x: 1.5, y: 2.68, w: 3.5, h: 0.4,
    fontSize: 18, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.primary
  });
  slide.addText('Enneagram · 核心恐惧 · 健康层级', {
    x: 1.5, y: 3.03, w: 4, h: 0.3,
    fontSize: 11, fontFace: 'Microsoft YaHei',
    color: theme.secondary
  });

  // Section 3
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 3.55, w: 0.06, h: 0.55,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText('03', {
    x: 0.85, y: 3.5, w: 0.6, h: 0.4,
    fontSize: 22, fontFace: 'Arial', bold: true,
    color: theme.accent
  });
  slide.addText('三轴融合框架', {
    x: 1.5, y: 3.53, w: 3.5, h: 0.4,
    fontSize: 18, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.primary
  });
  slide.addText('依恋×九型×客体关系 · 12构型 · 5技术', {
    x: 1.5, y: 3.88, w: 4.5, h: 0.3,
    fontSize: 11, fontFace: 'Microsoft YaHei',
    color: theme.secondary
  });

  // Section 4
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.4, y: 1.85, w: 0.06, h: 0.55,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText('04', {
    x: 5.65, y: 1.8, w: 0.6, h: 0.4,
    fontSize: 22, fontFace: 'Arial', bold: true,
    color: theme.accent
  });
  slide.addText('咨询实操架构', {
    x: 6.3, y: 1.83, w: 3.5, h: 0.4,
    fontSize: 18, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.primary
  });
  slide.addText('6 阶段流程 · 11 核心技术', {
    x: 6.3, y: 2.18, w: 4, h: 0.3,
    fontSize: 11, fontFace: 'Microsoft YaHei',
    color: theme.secondary
  });

  // Section 5
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.4, y: 2.7, w: 0.06, h: 0.55,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText('05', {
    x: 5.65, y: 2.65, w: 0.6, h: 0.4,
    fontSize: 22, fontFace: 'Arial', bold: true,
    color: theme.accent
  });
  slide.addText('典型构型案例', {
    x: 6.3, y: 2.68, w: 3.5, h: 0.4,
    fontSize: 18, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.primary
  });
  slide.addText('12构型展开 · 干预脚本', {
    x: 6.3, y: 3.03, w: 4, h: 0.3,
    fontSize: 11, fontFace: 'Microsoft YaHei',
    color: theme.secondary
  });

  // Section 6
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.4, y: 3.55, w: 0.06, h: 0.55,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText('06', {
    x: 5.65, y: 3.5, w: 0.6, h: 0.4,
    fontSize: 22, fontFace: 'Arial', bold: true,
    color: theme.accent
  });
  slide.addText('咨询师自我校准', {
    x: 6.3, y: 3.53, w: 3.5, h: 0.4,
    fontSize: 18, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.primary
  });
  slide.addText('Supervision · 反移情 · 三轴自校准', {
    x: 6.3, y: 3.88, w: 4, h: 0.3,
    fontSize: 11, fontFace: 'Microsoft YaHei',
    color: theme.secondary
  });

  // Bottom note
  slide.addText('本培训约需 2.5 小时，建议分两个半场进行', {
    x: 0.6, y: 4.7, w: 9, h: 0.3,
    fontSize: 11, fontFace: 'Microsoft YaHei', italic: true,
    color: theme.secondary
  });

  // Page number
  slide.addText('02', {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: 'Arial',
    color: theme.secondary, align: 'right'
  });
}

module.exports = { createSlide };

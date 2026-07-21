// Slide 17: Five-Stage Process
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText('五阶段咨询流程', {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 30, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.primary
  });
  slide.addText('Five-Stage Consultation Process', {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 12, fontFace: 'Arial', italic: true,
    color: theme.accent, charSpacing: 3
  });

  // 5-stage timeline
  const stages = [
    { n: '01', title: '建立关系与评估', sub: '1-3 次', desc: '收集双轴信息, 建立安全基地, 协商咨询目标' },
    { n: '02', title: '看见模式与触发', sub: '4-8 次', desc: '命名激活模式, 建立预警信号, 触碰早期剧本' },
    { n: '03', title: '哀悼与重建', sub: '9-15 次', desc: '哀悼理想化依恋对象, 看见核心恐惧根源' },
    { n: '04', title: '新经验与整合', sub: '16-25 次', desc: '矫正性情感经验, 整合依恋修复与九型成长' },
    { n: '05', title: '维护与成长', sub: '长期', desc: '巩固整合, 处理成长痛, 转向自我主导' }
  ];

  stages.forEach((s, i) => {
    const x = 0.5 + i * 1.85;
    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.7, w: 1.75, h: 3.0,
      fill: { color: 'FFFFFF' }, line: { color: theme.light, width: 1 }
    });
    // Top accent
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.7, w: 1.75, h: 0.4,
      fill: { color: theme.primary }, line: { type: 'none' }
    });
    slide.addText(s.n, {
      x: x, y: 1.75, w: 1.75, h: 0.3,
      fontSize: 14, fontFace: 'Arial', bold: true,
      color: theme.accent, align: 'center'
    });
    // Title
    slide.addText(s.title, {
      x: x + 0.1, y: 2.2, w: 1.55, h: 0.7,
      fontSize: 12, fontFace: 'Microsoft YaHei', bold: true,
      color: theme.primary, lineSpacingMultiple: 1.2
    });
    // Sub
    slide.addText(s.sub, {
      x: x + 0.1, y: 2.95, w: 1.55, h: 0.3,
      fontSize: 10, fontFace: 'Microsoft YaHei',
      color: theme.accent
    });
    // Desc
    slide.addText(s.desc, {
      x: x + 0.1, y: 3.3, w: 1.55, h: 1.3,
      fontSize: 9, fontFace: 'Microsoft YaHei',
      color: theme.secondary, lineSpacingMultiple: 1.3
    });

    // Arrow between
    if (i < stages.length - 1) {
      slide.addShape(pres.shapes.RIGHT_TRIANGLE, {
        x: x + 1.78, y: 3.05, w: 0.1, h: 0.2,
        fill: { color: theme.accent }, line: { type: 'none' },
        rotate: 90
      });
    }
  });

  // Bottom note
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.85, w: 9, h: 0.3,
    fill: { color: theme.bg }, line: { type: 'none' }
  });
  slide.addText('原则: 触碰核心恐惧前,先确保安全基地够稳——顺序颠倒会复制早年创伤而非修复', {
    x: 0.7, y: 4.85, w: 8.6, h: 0.3,
    fontSize: 11, fontFace: 'Microsoft YaHei', italic: true,
    color: theme.secondary
  });

  slide.addText('17', {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: 'Arial',
    color: theme.secondary, align: 'right'
  });
}

module.exports = { createSlide };

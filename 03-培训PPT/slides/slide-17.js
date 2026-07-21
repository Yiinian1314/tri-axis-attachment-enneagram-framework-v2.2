// Slide 17: Six-Stage Tri-Axis Process
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText('6 阶段三轴递进路径', {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 30, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.primary
  });
  slide.addText('Six-Stage Tri-Axis Progressive Path', {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 12, fontFace: 'Arial', italic: true,
    color: theme.accent, charSpacing: 3
  });

  // 6-stage timeline (从依恋到三轴并用)
  const stages = [
    { n: '01', title: '建立关系', sub: '1-3 次', axis: '依恋为主', desc: '建立安全基地, 让来访者开始"重复"给你看' },
    { n: '02', title: '看见模式', sub: '4-8 次', axis: '依恋+九型', desc: '识别激活模式 + 防御位' },
    { n: '03', title: '看见动力', sub: '9-15 次', axis: '九型+客体', desc: '核心恐惧暴露 + 反移情浮现' },
    { n: '04', title: '修补结构', sub: '16-25 次', axis: '客体为主', desc: '破裂-修复循环, 修补内在图' },
    { n: '05', title: '巩固整合', sub: '26-40 次', axis: '三轴同步', desc: '三轴并用检验, 处理增长痛' },
    { n: '06', title: '维护结案', sub: '长期', axis: '三轴并用', desc: '渐退频率, 内化咨询师' }
  ];

  stages.forEach((s, i) => {
    const x = 0.4 + i * 1.55;
    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.7, w: 1.45, h: 3.2,
      fill: { color: 'FFFFFF' }, line: { color: theme.light, width: 1 }
    });
    // Top accent
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.7, w: 1.45, h: 0.4,
      fill: { color: theme.primary }, line: { type: 'none' }
    });
    slide.addText(s.n, {
      x: x, y: 1.75, w: 1.45, h: 0.3,
      fontSize: 14, fontFace: 'Arial', bold: true,
      color: theme.accent, align: 'center'
    });
    // Title
    slide.addText(s.title, {
      x: x + 0.05, y: 2.18, w: 1.35, h: 0.45,
      fontSize: 12, fontFace: 'Microsoft YaHei', bold: true,
      color: theme.primary, lineSpacingMultiple: 1.1
    });
    // Sub (次数)
    slide.addText(s.sub, {
      x: x + 0.05, y: 2.65, w: 1.35, h: 0.25,
      fontSize: 9, fontFace: 'Microsoft YaHei',
      color: theme.accent
    });
    // Axis (主轴)
    slide.addText(s.axis, {
      x: x + 0.05, y: 2.92, w: 1.35, h: 0.3,
      fontSize: 10, fontFace: 'Microsoft YaHei', bold: true,
      color: theme.primary
    });
    // Desc
    slide.addText(s.desc, {
      x: x + 0.05, y: 3.25, w: 1.35, h: 1.5,
      fontSize: 8, fontFace: 'Microsoft YaHei',
      color: theme.secondary, lineSpacingMultiple: 1.2
    });
  });

  // Bottom note
  slide.addText('三轴递进路径(身体层→动力层→结构层), 主轴从依恋逐级到三轴并用, 缺一不可', {
    x: 0.4, y: 5.1, w: 9.2, h: 0.4,
    fontSize: 11, fontFace: 'Microsoft YaHei', italic: true,
    color: theme.primary, align: 'center'
  });

  // Brand watermark
  slide.addText('一念三轴 · Yiinian Triaxis (v2.2)', {
    x: 6.5, y: 5.35, w: 3.0, h: 0.25,
    fontSize: 9, fontFace: 'Microsoft YaHei',
    color: theme.accent, align: 'right'
  });

}

module.exports = { createSlide };
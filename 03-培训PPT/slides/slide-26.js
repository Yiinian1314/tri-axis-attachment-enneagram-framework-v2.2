// Slide 26: Thank You / Resources
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // Center title
  slide.addText('Thank You', {
    x: 0.5, y: 1.0, w: 9, h: 1.2,
    fontSize: 80, fontFace: 'Arial', bold: true,
    color: theme.bg, align: 'center'
  });

  slide.addText('感谢你走到最后', {
    x: 0.5, y: 2.3, w: 9, h: 0.5,
    fontSize: 24, fontFace: 'Microsoft YaHei',
    color: theme.accent, align: 'center'
  });

  // Accent line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.4, y: 3.0, w: 1.2, h: 0.04,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // Resources list
  slide.addText('配套资源 / Companion Resources', {
    x: 0.5, y: 3.4, w: 9, h: 0.4,
    fontSize: 14, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.light, align: 'center'
  });

  const resources = [
    '理论架构与咨询指南 (v2.2 三轴)  -  主文档',
    '咨询师速查工具卡  -  现场查阅',
    '12 构型深度展开 (含 1.5/4.5/5.4 客体关系子节)  -  构型查询',
    '6 个咨询录音脚本  -  培训示范',
    '客体关系专题包 (5 个文件 + 12 构型图谱)  -  v2.2 新增',
    '咨询师自我校准 / 督导专题包 / 督导使用指南  -  7+8 模块',
    '6 个完整案例 + 教学要点  -  案例库',
    '来访者自助手册  -  PDF 版'
  ];
  resources.forEach((r, i) => {
    slide.addText(r, {
      x: 0.8, y: 3.85 + i * 0.2, w: 8.4, h: 0.2,
      fontSize: 10, fontFace: 'Microsoft YaHei',
      color: theme.bg, align: 'center'
    });
  });

  // Page number
  slide.addText('26', {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: 'Arial',
    color: theme.light, align: 'right'
  });
}

module.exports = { createSlide };

// Slide 11: Health Levels and Stress Direction
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText('健康层级与压力方向', {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 30, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.primary
  });
  slide.addText('Levels of Development and Stress Direction', {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 12, fontFace: 'Arial', italic: true,
    color: theme.accent, charSpacing: 3
  });

  // Three-tier health bar
  const tiers = [
    {
      label: '健康层',
      sub: '1-3 层',
      desc: '任何类型都接近安全型依恋, 灵活, 自我接纳',
      color: theme.accent
    },
    {
      label: '平均层',
      sub: '4-6 层',
      desc: '类型特征凸显, 依恋象限稳定显现, 自动导航启动',
      color: '888888'
    },
    {
      label: '不健康层',
      sub: '7-9 层',
      desc: '类型与依恋互相放大, 出现病理化反应, 防御崩溃',
      color: theme.primary
    }
  ];

  tiers.forEach((t, i) => {
    const y = 1.6 + i * 0.85;
    // Color bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 0.5, h: 0.7,
      fill: { color: t.color }, line: { type: 'none' }
    });
    // Label
    slide.addText(t.label, {
      x: 1.2, y: y, w: 2, h: 0.4,
      fontSize: 18, fontFace: 'Microsoft YaHei', bold: true,
      color: theme.primary
    });
    slide.addText(t.sub, {
      x: 1.2, y: y + 0.4, w: 2, h: 0.3,
      fontSize: 11, fontFace: 'Arial',
      color: theme.accent
    });
    // Description
    slide.addText(t.desc, {
      x: 3.5, y: y + 0.15, w: 6, h: 0.5,
      fontSize: 12, fontFace: 'Microsoft YaHei',
      color: theme.secondary
    });
  });

  // Right side: stress direction
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.3, w: 9, h: 0.7,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText('临床关键: 评估来访者"当下处于哪个层级",比"他是什么类型"更重要', {
    x: 0.7, y: 4.4, w: 8.6, h: 0.3,
    fontSize: 13, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.bg
  });
  slide.addText('不健康的2号 vs 健康2号, 依恋表现可能完全相反; 不健康的5号 vs 健康5号, 也是', {
    x: 0.7, y: 4.7, w: 8.6, h: 0.3,
    fontSize: 11, fontFace: 'Microsoft YaHei',
    color: theme.light
  });

  slide.addText('11', {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: 'Arial',
    color: theme.secondary, align: 'right'
  });
}

module.exports = { createSlide };

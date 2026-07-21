// Slide 25: Key Takeaways
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText('三个核心要点, 带走能用', {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 30, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.primary
  });
  slide.addText('Three Takeaways to Take With You', {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 12, fontFace: 'Arial', italic: true,
    color: theme.accent, charSpacing: 3
  });

  // 3 large takeaways
  const takeaways = [
    {
      num: '01',
      title: '三轴融合 (v2.2)',
      sub: 'How × Why × Structure',
      desc: '依恋告诉"怎么反应", 九型告诉"为什么", 客体关系告诉"内在世界长什么样"——三轴不衡, 行为+动力+结构 缺一不可'
    },
    {
      num: '02',
      title: '顺序, 顺序, 顺序',
      sub: 'Sequence Matters',
      desc: '依恋(安全)→ 九型(动力)→ 客体关系(结构), 顺序颠倒会复制早年创伤而非修复——v2.2 三轴层级铁律'
    },
    {
      num: '03',
      title: '咨询师自己也是工具',
      sub: 'You Are the Tool',
      desc: '你能陪来访者去多远, 取决于你曾独自走过多远——督导 + 个人咨询 + 5技术自评卡 不是选项'
    }
  ];

  takeaways.forEach((t, i) => {
    const x = 0.5 + i * 3.1;
    // Big card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.6, w: 2.9, h: 3.0,
      fill: { color: 'FFFFFF' }, line: { color: theme.light, width: 1 }
    });
    // Big number
    slide.addText(t.num, {
      x: x + 0.2, y: 1.75, w: 2.5, h: 1.2,
      fontSize: 72, fontFace: 'Arial', bold: true,
      color: theme.accent
    });
    // Title
    slide.addText(t.title, {
      x: x + 0.2, y: 2.95, w: 2.5, h: 0.4,
      fontSize: 18, fontFace: 'Microsoft YaHei', bold: true,
      color: theme.primary
    });
    // Sub
    slide.addText(t.sub, {
      x: x + 0.2, y: 3.35, w: 2.5, h: 0.3,
      fontSize: 11, fontFace: 'Arial', italic: true,
      color: theme.accent
    });
    // Desc
    slide.addText(t.desc, {
      x: x + 0.2, y: 3.7, w: 2.5, h: 0.85,
      fontSize: 10, fontFace: 'Microsoft YaHei',
      color: theme.secondary, lineSpacingMultiple: 1.3
    });
  });

  // Bottom signature
  slide.addShape(pres.shapes.LINE, {
    x: 0.5, y: 4.85, w: 1.5, h: 0,
    line: { color: theme.accent, width: 2 }
  });
  slide.addText('愿这份指南成为你工作中的"地图", 而非枷锁', {
    x: 0.5, y: 4.9, w: 9, h: 0.3,
    fontSize: 12, fontFace: 'Microsoft YaHei', italic: true,
    color: theme.secondary
  });

  slide.addText('25', {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: 'Arial',
    color: theme.secondary, align: 'right'
  });
}

module.exports = { createSlide };

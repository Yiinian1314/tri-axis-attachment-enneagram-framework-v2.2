// Slide 9: Enneagram Three Core Elements
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText('九型的三要素结构', {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 30, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.primary
  });
  slide.addText('Three Core Elements of the Enneagram', {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 12, fontFace: 'Arial', italic: true,
    color: theme.accent, charSpacing: 3
  });

  // 3 big elements
  const elements = [
    {
      num: '01',
      title: '核心恐惧',
      en: 'Core Fear',
      desc: '"如果我不__, 我就会__"',
      detail: '这是驱动整个类型的发动机, 决定注意力的方向, 决定一切行为的优先级',
      color: theme.accent
    },
    {
      num: '02',
      title: '核心欲望',
      en: 'Core Desire',
      desc: '"我必须__才能感到完整"',
      detail: '这是核心恐惧的反面, 是个体拼命追求的"填补"——但它常常是个错觉',
      color: theme.primary
    },
    {
      num: '03',
      title: '防御机制',
      en: 'Defense Mechanism',
      desc: '自动化的应对策略',
      detail: '在压力下自动启动, 是认知层/行为层的"第一道防线"——保护自我免于触碰核心恐惧',
      color: theme.secondary
    }
  ];

  elements.forEach((e, i) => {
    const x = 0.5 + i * 3.1;
    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.6, w: 2.9, h: 3.3,
      fill: { color: 'FFFFFF' }, line: { color: theme.light, width: 1 }
    });
    // Number badge
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.2, y: 1.8, w: 0.7, h: 0.7,
      fill: { color: e.color }, line: { type: 'none' }
    });
    slide.addText(e.num, {
      x: x + 0.2, y: 1.85, w: 0.7, h: 0.6,
      fontSize: 18, fontFace: 'Arial', bold: true,
      color: theme.bg, align: 'center'
    });

    // Title
    slide.addText(e.title, {
      x: x + 1.0, y: 1.85, w: 1.8, h: 0.4,
      fontSize: 20, fontFace: 'Microsoft YaHei', bold: true,
      color: theme.primary
    });
    slide.addText(e.en, {
      x: x + 1.0, y: 2.2, w: 1.8, h: 0.25,
      fontSize: 9, fontFace: 'Arial', italic: true,
      color: theme.secondary, charSpacing: 2
    });

    // Quote
    slide.addText(e.desc, {
      x: x + 0.2, y: 2.75, w: 2.5, h: 0.5,
      fontSize: 12, fontFace: 'Microsoft YaHei', italic: true,
      color: e.color
    });

    // Detail
    slide.addText(e.detail, {
      x: x + 0.2, y: 3.4, w: 2.5, h: 1.4,
      fontSize: 11, fontFace: 'Microsoft YaHei',
      color: theme.secondary, lineSpacingMultiple: 1.4
    });
  });

  // Bottom note
  slide.addText('例: 2号 助人型 = 核心恐惧"不被需要" + 核心欲望"被爱" + 防御"压抑自我需要, 投射他人需要"', {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
    fontSize: 11, fontFace: 'Microsoft YaHei', italic: true,
    color: theme.secondary
  });

  // Page number
  slide.addText('09', {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: 'Arial',
    color: theme.secondary, align: 'right'
  });
}

module.exports = { createSlide };

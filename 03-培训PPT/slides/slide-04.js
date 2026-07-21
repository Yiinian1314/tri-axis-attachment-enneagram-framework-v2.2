// Slide 4: Attachment Origin
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText('依恋的起源与核心命题', {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 30, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.primary
  });
  slide.addText('The Origin of Attachment Theory', {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 12, fontFace: 'Arial', italic: true,
    color: theme.accent, charSpacing: 3
  });

  // Three milestone cards
  const cards = [
    {
      year: '1969',
      name: 'Bowlby',
      desc: '提出依恋的进化生物学基础: 婴儿对照顾者的依恋是生存本能, 形成了"内在工作模型"'
    },
    {
      year: '1978',
      name: 'Ainsworth',
      desc: '"陌生情境实验" 实证了安全型 / 焦虑-矛盾型 / 回避型 三种依恋模式'
    },
    {
      year: '1987',
      name: 'Hazan & Shaver',
      desc: '将依恋延伸至成人浪漫关系, 提出依恋风格影响伴侣选择与互动'
    }
  ];

  cards.forEach((c, i) => {
    const x = 0.5 + i * 3.1;
    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.7, w: 2.9, h: 2.6,
      fill: { color: 'FFFFFF' }, line: { color: theme.light, width: 1 }
    });
    // Top accent
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.7, w: 2.9, h: 0.1,
      fill: { color: theme.accent }, line: { type: 'none' }
    });
    // Year
    slide.addText(c.year, {
      x: x + 0.2, y: 1.95, w: 2.5, h: 0.5,
      fontSize: 28, fontFace: 'Arial', bold: true,
      color: theme.accent
    });
    // Name
    slide.addText(c.name, {
      x: x + 0.2, y: 2.5, w: 2.5, h: 0.4,
      fontSize: 16, fontFace: 'Arial', bold: true,
      color: theme.primary
    });
    // Description
    slide.addText(c.desc, {
      x: x + 0.2, y: 2.95, w: 2.5, h: 1.3,
      fontSize: 11, fontFace: 'Microsoft YaHei',
      color: theme.secondary, lineSpacingMultiple: 1.3
    });
  });

  // Bottom callout
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.5, w: 9, h: 0.5,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText('核心命题: 早年与照顾者的互动, 塑造了一个人"我是否值得被爱 / 别人是否可靠"的基本信念', {
    x: 0.7, y: 4.55, w: 8.6, h: 0.4,
    fontSize: 13, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.bg
  });

  // Page number
  slide.addText('04', {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: 'Arial',
    color: theme.secondary, align: 'right'
  });
}

module.exports = { createSlide };

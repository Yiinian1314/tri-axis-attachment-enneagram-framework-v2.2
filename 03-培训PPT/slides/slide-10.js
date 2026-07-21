// Slide 10: Enneagram Nine Types Overview
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText('九型的九种主型速览', {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 30, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.primary
  });
  slide.addText('The Nine Types at a Glance', {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 12, fontFace: 'Arial', italic: true,
    color: theme.accent, charSpacing: 3
  });

  // 3x3 grid
  const types = [
    { n: '1', name: '完美型', fear: '不完美 / 错误' },
    { n: '2', name: '助人型', fear: '不被需要' },
    { n: '3', name: '成就型', fear: '无价值' },
    { n: '4', name: '浪漫型', fear: '平凡 / 无独特性' },
    { n: '5', name: '观察型', fear: '无能 / 被侵占' },
    { n: '6', name: '疑惑型', fear: '无支持 / 被背叛' },
    { n: '7', name: '享乐型', fear: '痛苦 / 被限制' },
    { n: '8', name: '挑战型', fear: '被控制 / 被伤害' },
    { n: '9', name: '和平型', fear: '冲突 / 分离' }
  ];

  types.forEach((t, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 0.5 + col * 3.1;
    const y = 1.5 + row * 1.15;
    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.9, h: 1.0,
      fill: { color: 'FFFFFF' }, line: { color: theme.light, width: 1 }
    });
    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.15, y: y + 0.2, w: 0.6, h: 0.6,
      fill: { color: theme.primary }, line: { type: 'none' }
    });
    slide.addText(t.n, {
      x: x + 0.15, y: y + 0.23, w: 0.6, h: 0.55,
      fontSize: 22, fontFace: 'Arial', bold: true,
      color: theme.accent, align: 'center'
    });
    // Name
    slide.addText(t.name, {
      x: x + 0.9, y: y + 0.15, w: 1.9, h: 0.35,
      fontSize: 16, fontFace: 'Microsoft YaHei', bold: true,
      color: theme.primary
    });
    // Fear
    slide.addText('核心恐惧: ' + t.fear, {
      x: x + 0.9, y: y + 0.5, w: 1.9, h: 0.3,
      fontSize: 10, fontFace: 'Microsoft YaHei',
      color: theme.secondary
    });
  });

  // Bottom note
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.0, w: 9, h: 0.35,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText('记忆口诀: 1要正确 2要被爱 3要成就 4要独特 5要空间 6要安全 7要自由 8要掌控 9要平和', {
    x: 0.7, y: 5.05, w: 8.6, h: 0.3,
    fontSize: 11, fontFace: 'Microsoft YaHei',
    color: theme.bg
  });

  slide.addText('10', {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: 'Arial',
    color: theme.bg, align: 'right'
  });
}

module.exports = { createSlide };

// Slide 15: Relationship Pairings
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText('关系中的"双人舞": 典型配对', {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.primary
  });
  slide.addText('The Relationship Duet: Common Pairings', {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 12, fontFace: 'Arial', italic: true,
    color: theme.accent, charSpacing: 3
  });

  // Table
  const headerStyle = {
    bold: true, fontSize: 12, fontFace: 'Microsoft YaHei',
    color: 'FFFFFF', fill: { color: theme.primary }, align: 'center', valign: 'middle'
  };
  const cellStyle = {
    fontSize: 11, fontFace: 'Microsoft YaHei',
    color: theme.primary, fill: { color: 'FFFFFF' }, valign: 'middle'
  };

  const rows = [
    [
      { text: '配对', options: headerStyle },
      { text: '互动动态', options: headerStyle },
      { text: '核心冲突', options: headerStyle },
      { text: '干预方向', options: headerStyle }
    ],
    [
      { text: '焦虑2号\nx 回避5号', options: { ...cellStyle, bold: true, color: theme.accent, align: 'center' } },
      { text: '追 - 躲循环', options: cellStyle },
      { text: '"我要靠近" vs "我需要空间"', options: cellStyle },
      { text: '翻译: 追 = 爱, 躲 ≠ 拒绝', options: cellStyle }
    ],
    [
      { text: '焦虑6号\nx 回避8号', options: { ...cellStyle, bold: true, color: theme.accent, align: 'center' } },
      { text: '测试 - 反测试', options: cellStyle },
      { text: '"你真的不会离开吗" vs "我不接受被质疑"', options: cellStyle },
      { text: '命名触发器, 建立预警信号', options: cellStyle }
    ],
    [
      { text: '混乱4号\nx 安全9号', options: { ...cellStyle, bold: true, color: theme.accent, align: 'center' } },
      { text: '戏剧 - 稳定', options: cellStyle },
      { text: '"你不理解我" vs "我都接受"', options: cellStyle },
      { text: '9号要长出边界, 4号要落地', options: cellStyle }
    ],
    [
      { text: '回避3号\nx 焦虑4号', options: { ...cellStyle, bold: true, color: theme.accent, align: 'center' } },
      { text: '形象 - 灵魂', options: cellStyle },
      { text: '"看我多优秀" vs "看我的深渊"', options: cellStyle },
      { text: '揭穿"完美"幻象, 共情"痛苦"', options: cellStyle }
    ]
  ];

  slide.addTable(rows, {
    x: 0.5, y: 1.5, w: 9.0,
    colW: [1.8, 1.7, 3.0, 2.5],
    rowH: 0.55,
    border: { type: 'solid', color: theme.light, pt: 1 }
  });

  // Bottom insight
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.65, w: 9, h: 0.4,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText('配对不是"坏的",而是双方无意识在重演早年剧本——改变任何一方的反应模式,系统就被迫重组', {
    x: 0.7, y: 4.7, w: 8.6, h: 0.3,
    fontSize: 11, fontFace: 'Microsoft YaHei',
    color: theme.bg
  });

  slide.addText('15', {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: 'Arial',
    color: theme.secondary, align: 'right'
  });

  // Brand watermark
  slide.addText('一念三轴 · Yiinian Triaxis (v2.2)', {
    x: 6.5, y: 5.35, w: 3.0, h: 0.25,
    fontSize: 9, fontFace: 'Microsoft YaHei',
    color: theme.accent, align: 'right'
  });

}

module.exports = { createSlide };
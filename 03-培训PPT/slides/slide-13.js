// Slide 13: Mapping Matrix Table (Tri-Axis v2.2)
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText('依恋 × 九型 × 客体关系 三轴映射表', {
    x: 0.4, y: 0.4, w: 9.2, h: 0.6,
    fontSize: 26, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.primary
  });
  slide.addText('Tri-Axis: Attachment × Enneagram × Object Relations', {
    x: 0.4, y: 1.0, w: 9.2, h: 0.3,
    fontSize: 12, fontFace: 'Arial', italic: true,
    color: theme.accent, charSpacing: 3
  });

  // Table
  const headerStyle = {
    bold: true, fontSize: 11, fontFace: 'Microsoft YaHei',
    color: 'FFFFFF', fill: { color: theme.primary }, align: 'center',
    valign: 'middle'
  };
  const cellStyle = {
    fontSize: 10, fontFace: 'Microsoft YaHei',
    color: theme.primary, fill: { color: 'FFFFFF' },
    valign: 'middle'
  };
  const cellStyle2 = {
    fontSize: 10, fontFace: 'Microsoft YaHei',
    color: theme.secondary, fill: { color: 'FFFFFF' },
    valign: 'middle'
  };

  const rows = [
    [
      { text: '依恋', options: headerStyle },
      { text: '九型(高度亲和)', options: headerStyle },
      { text: '九型(中度)', options: headerStyle },
      { text: '客体关系维度(v2.2 新增)', options: headerStyle },
      { text: '内在逻辑', options: headerStyle }
    ],
    [
      { text: '焦虑型', options: { ...cellStyle, bold: true, color: theme.accent, align: 'center' } },
      { text: '2号 助人型\n6号 疑惑型', options: cellStyle },
      { text: '4号 浪漫型', options: cellStyle2 },
      { text: '内在图: "他人都不可信 / 不爱我"\n投射性认同: 投射"不信任"', options: cellStyle2 },
      { text: '注意力朝向他人的爱 / 威胁, 需要持续确认', options: cellStyle2 }
    ],
    [
      { text: '回避型', options: { ...cellStyle, bold: true, color: theme.accent, align: 'center' } },
      { text: '5号 观察型\n8号 挑战型', options: cellStyle },
      { text: '3号 成就型', options: cellStyle2 },
      { text: '内在图: "他人会入侵 / 利用我"\n投射性认同: 投射"入侵"', options: cellStyle2 },
      { text: '注意力朝向自己 / 控制, 亲密等同"被入侵"', options: cellStyle2 }
    ],
    [
      { text: '混乱型', options: { ...cellStyle, bold: true, color: theme.accent, align: 'center' } },
      { text: '4号 浪漫型', options: cellStyle },
      { text: '1号 / 9号 失健康', options: cellStyle2 },
      { text: '内在图: "我不值得,但渴望被拯救"\n投射性认同: 投射"被拯救"', options: cellStyle2 },
      { text: '注意力矛盾: 既渴望又恐惧, 自我内部冲突', options: cellStyle2 }
    ],
    [
      { text: '安全型', options: { ...cellStyle, bold: true, color: theme.accent, align: 'center' } },
      { text: '7号 健康\n9号 健康', options: cellStyle },
      { text: '1号 / 3号 健康', options: cellStyle2 },
      { text: '内在图: "我值得, 他人基本可靠"\n投射性认同: 极少', options: cellStyle2 },
      { text: '注意力灵活, 可在亲近与独立间切换', options: cellStyle2 }
    ]
  ];

  slide.addTable(rows, {
    x: 0.4, y: 1.5, w: 9.2,
    colW: [0.9, 1.7, 1.3, 2.5, 2.8],
    rowH: [0.45, 0.65, 0.65, 0.65, 0.65],
    border: { type: 'solid', color: theme.light, pt: 1 }
  });

  // Bottom warning
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 4.55, w: 9.2, h: 0.55,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText('v2.2 升级:从双轴 → 三轴。 客体关系维度(内在图 / 投射性认同)是修补结构的关键,比动力/行为更长效', {
    x: 0.5, y: 4.6, w: 9.0, h: 0.45,
    fontSize: 11, fontFace: 'Microsoft YaHei', bold: true,
    color: 'FFFFFF'
  });

  slide.addText('13', {
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
// Slide 27: 3 Defense Positions × 12 Configurations
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText('3 防御位 × 12 构型', {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 30, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.primary
  });
  slide.addText('3 Defense Positions × 4 Attachment = 12 Configurations (v2.2 新增)', {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 12, fontFace: 'Arial', italic: true,
    color: theme.accent, charSpacing: 3
  });

  // 3 防御位介绍
  slide.addText('3 个防御位 (从 9 个九型简化)', {
    x: 0.5, y: 1.6, w: 4.5, h: 0.35,
    fontSize: 14, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.accent
  });

  const positions = [
    { name: '对抗位 (Confront)', sub: '1·3·8 号', desc: '面对压力: 冲/控制/取得' },
    { name: '退行位 (Retreat)', sub: '4·5·9 号', desc: '面对压力: 退/隔离/溶解' },
    { name: '警觉位 (Regulate)', sub: '2·6·7 号', desc: '面对压力: 调节他人/备份/分散' }
  ];

  positions.forEach((p, i) => {
    const y = 2.05 + i * 0.75;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 4.5, h: 0.65,
      fill: { color: 'FFFFFF' }, line: { color: theme.light, width: 1 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 0.15, h: 0.65,
      fill: { color: theme.accent }, line: { type: 'none' }
    });
    slide.addText(p.name, {
      x: 0.75, y: y + 0.05, w: 2.4, h: 0.25,
      fontSize: 11, fontFace: 'Microsoft YaHei', bold: true,
      color: theme.primary
    });
    slide.addText(p.sub, {
      x: 0.75, y: y + 0.32, w: 2.4, h: 0.25,
      fontSize: 9, fontFace: 'Microsoft YaHei',
      color: theme.accent, italic: true
    });
    slide.addText(p.desc, {
      x: 3.2, y: y + 0.1, w: 1.7, h: 0.45,
      fontSize: 9, fontFace: 'Microsoft YaHei',
      color: theme.secondary, lineSpacingMultiple: 1.2
    });
  });

  // 12 构型矩阵 (右侧)
  slide.addText('12 构型 (4 依恋 × 3 防御位)', {
    x: 5.3, y: 1.6, w: 4.5, h: 0.35,
    fontSize: 14, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.accent
  });

  const matrix = [
    { row: '焦虑', cells: ['× 2 号', '× 6 号', '× 4 号'] },
    { row: '回避', cells: ['× 5 号', '× 8 号', '× 3 号'] },
    { row: '混乱', cells: ['× 4 号', '× 1 号', '× 9 号'] },
    { row: '安全', cells: ['× 7 号', '× 9 号', '× 3 号'] }
  ];

  // 表格
  const tableX = 5.3, tableY = 2.05, colW = 1.5, rowH = 0.5;
  // 表头
  const headers = ['焦虑', '回避', '混乱', '安全'];
  headers.forEach((h, i) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: tableX, y: tableY, w: colW, h: 0.3,
      fill: { color: theme.primary }, line: { type: 'none' }
    });
    slide.addText(h, {
      x: tableX + i * colW, y: tableY + 0.02, w: colW, h: 0.26,
      fontSize: 11, fontFace: 'Microsoft YaHei', bold: true,
      color: 'FFFFFF', align: 'center'
    });
  });

  // 3 防御位列
  const posHeaders = ['警觉', '对抗', '退行'];
  matrix.forEach((row, ri) => {
    const y = tableY + 0.3 + ri * rowH;
    // 防御位列
    slide.addShape(pres.shapes.RECTANGLE, {
      x: tableX, y: y, w: 0.9, h: rowH,
      fill: { color: theme.light }, line: { type: 'none' }
    });
    slide.addText(posHeaders[ri], {
      x: tableX, y: y + 0.1, w: 0.9, h: 0.3,
      fontSize: 10, fontFace: 'Microsoft YaHei', bold: true,
      color: theme.primary, align: 'center'
    });
    // 4 象限 cells
    row.cells.forEach((c, ci) => {
      slide.addShape(pres.shapes.RECTANGLE, {
        x: tableX + 0.9 + ci * (colW - 0.225), y: y, w: colW - 0.225, h: rowH,
        fill: { color: 'FFFFFF' }, line: { color: theme.light, width: 0.5 }
      });
      slide.addText(c, {
        x: tableX + 0.9 + ci * (colW - 0.225), y: y + 0.13, w: colW - 0.225, h: 0.25,
        fontSize: 9, fontFace: 'Microsoft YaHei',
        color: theme.secondary, align: 'center'
      });
    });
  });

  // Bottom note
  slide.addText('12 构型是本套件"主菜单" — 把 9 型 × 4 依恋 = 36 场景简化为 12, 临床定位更快', {
    x: 0.5, y: 5.0, w: 9.0, h: 0.4,
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

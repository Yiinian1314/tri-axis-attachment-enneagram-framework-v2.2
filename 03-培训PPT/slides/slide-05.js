// Slide 5: Four Attachment Styles
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText('四种成人依恋风格', {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 30, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.primary
  });
  slide.addText('Four Adult Attachment Styles', {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 12, fontFace: 'Arial', italic: true,
    color: theme.accent, charSpacing: 3
  });

  // 2x2 grid
  const styles = [
    {
      name: '安全型 Secure',
      anx: '低', avd: '低',
      core: '"我值得被爱, 他人基本可靠"',
      strat: '灵活: 能靠近也能独立',
      x: 0.5, y: 1.5
    },
    {
      name: '焦虑型 Preoccupied',
      anx: '高', avd: '低',
      core: '"我不够好, 需要不断确认爱"',
      strat: '黏附 / 追 / 情感激活',
      x: 5.1, y: 1.5
    },
    {
      name: '回避型 Dismissive',
      anx: '低', avd: '高',
      core: '"我不需要, 他人不可靠"',
      strat: '退缩 / 去激活 / 自我依赖',
      x: 0.5, y: 3.4
    },
    {
      name: '混乱型 Fearful',
      anx: '高', avd: '高',
      core: '"我想要但我怕靠近会受伤"',
      strat: '推拉 / 解离 / 创伤重演',
      x: 5.1, y: 3.4
    }
  ];

  styles.forEach(s => {
    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: s.x, y: s.y, w: 4.4, h: 1.75,
      fill: { color: 'FFFFFF' }, line: { color: theme.light, width: 1 }
    });
    // Left color bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: s.x, y: s.y, w: 0.08, h: 1.75,
      fill: { color: theme.accent }, line: { type: 'none' }
    });
    // Name
    slide.addText(s.name, {
      x: s.x + 0.25, y: s.y + 0.1, w: 4, h: 0.4,
      fontSize: 17, fontFace: 'Microsoft YaHei', bold: true,
      color: theme.primary
    });
    // Anx / Avd tags
    slide.addText('焦虑 ' + s.anx, {
      x: s.x + 0.25, y: s.y + 0.5, w: 1, h: 0.25,
      fontSize: 10, fontFace: 'Microsoft YaHei',
      color: theme.accent, bold: true
    });
    slide.addText('回避 ' + s.avd, {
      x: s.x + 1.3, y: s.y + 0.5, w: 1, h: 0.25,
      fontSize: 10, fontFace: 'Microsoft YaHei',
      color: theme.secondary, bold: true
    });
    // Core
    slide.addText(s.core, {
      x: s.x + 0.25, y: s.y + 0.85, w: 4, h: 0.35,
      fontSize: 12, fontFace: 'Microsoft YaHei', italic: true,
      color: theme.primary
    });
    // Strategy
    slide.addText('策略: ' + s.strat, {
      x: s.x + 0.25, y: s.y + 1.25, w: 4, h: 0.4,
      fontSize: 11, fontFace: 'Microsoft YaHei',
      color: theme.secondary
    });
  });

  // Page number
  slide.addText('05', {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: 'Arial',
    color: theme.secondary, align: 'right'
  });
}

module.exports = { createSlide };

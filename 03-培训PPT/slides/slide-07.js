// Slide 7: Attachment in Consultation Room
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText('依恋在咨询室里的样子', {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 30, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.primary
  });
  slide.addText('How Attachment Shows Up in the Therapy Room', {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 12, fontFace: 'Arial', italic: true,
    color: theme.accent, charSpacing: 3
  });

  // 4 columns showing each style in room
  const styles = [
    {
      label: '安全型',
      en: 'SECURE',
      signal: '按时来, 能自我反思, 主动讲出感受',
      body: '身体放松, 眼神自然, 不太需要"被救"',
      tip: '咨询师: 容易觉得"他没问题, 为什么来"——其实是带着"工作关系"来'
    },
    {
      label: '焦虑型',
      en: 'ANXIOUS',
      signal: '"你下周还在吗" / 反复确认咨询师在',
      body: '心跳快, 喉咙紧, 手心出汗, 频繁求证',
      tip: '咨询师: 想安抚——但节制安抚, 否则复制早年"被情绪拖着走"的父母'
    },
    {
      label: '回避型',
      en: 'AVOIDANT',
      signal: '准时但不深入, 情感话题切换为理性分析',
      body: '肩膀紧, 呼吸浅, 目光回避',
      tip: '咨询师: 感到被推开, 自己也想撤——这是反移情, 不是来访者不需要'
    },
    {
      label: '混乱型',
      en: 'FEARFUL',
      signal: '一次咨询里多次"翻脸", 解离迹象',
      body: '状态不稳, 情绪戏剧化波动',
      tip: '咨询师: 跟着情绪走, 自己也混乱——必须先稳定自己, 才能稳定来访者'
    }
  ];

  styles.forEach((s, i) => {
    const x = 0.4 + i * 2.35;
    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.6, w: 2.2, h: 3.5,
      fill: { color: 'FFFFFF' }, line: { color: theme.light, width: 1 }
    });
    // Header
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.6, w: 2.2, h: 0.55,
      fill: { color: theme.primary }, line: { type: 'none' }
    });
    slide.addText(s.label, {
      x: x + 0.1, y: 1.65, w: 2, h: 0.3,
      fontSize: 14, fontFace: 'Microsoft YaHei', bold: true,
      color: theme.bg
    });
    slide.addText(s.en, {
      x: x + 0.1, y: 1.95, w: 2, h: 0.2,
      fontSize: 8, fontFace: 'Arial',
      color: theme.accent, charSpacing: 3
    });

    // Signal
    slide.addText('信号', {
      x: x + 0.15, y: 2.3, w: 1.9, h: 0.2,
      fontSize: 9, fontFace: 'Microsoft YaHei', bold: true,
      color: theme.accent
    });
    slide.addText(s.signal, {
      x: x + 0.15, y: 2.5, w: 1.9, h: 0.7,
      fontSize: 10, fontFace: 'Microsoft YaHei',
      color: theme.primary, lineSpacingMultiple: 1.2
    });

    // Body
    slide.addText('身体', {
      x: x + 0.15, y: 3.25, w: 1.9, h: 0.2,
      fontSize: 9, fontFace: 'Microsoft YaHei', bold: true,
      color: theme.accent
    });
    slide.addText(s.body, {
      x: x + 0.15, y: 3.45, w: 1.9, h: 0.5,
      fontSize: 10, fontFace: 'Microsoft YaHei',
      color: theme.primary, lineSpacingMultiple: 1.2
    });

    // Tip
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 4.05, w: 2.2, h: 1.05,
      fill: { color: theme.bg }, line: { type: 'none' }
    });
    slide.addText('咨询师注意', {
      x: x + 0.15, y: 4.1, w: 1.9, h: 0.2,
      fontSize: 9, fontFace: 'Microsoft YaHei', bold: true,
      color: theme.accent
    });
    slide.addText(s.tip, {
      x: x + 0.15, y: 4.3, w: 1.9, h: 0.7,
      fontSize: 9, fontFace: 'Microsoft YaHei',
      color: theme.secondary, lineSpacingMultiple: 1.2
    });
  });

  // Page number
  slide.addText('07', {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: 'Arial',
    color: theme.secondary, align: 'right'
  });
}

module.exports = { createSlide };

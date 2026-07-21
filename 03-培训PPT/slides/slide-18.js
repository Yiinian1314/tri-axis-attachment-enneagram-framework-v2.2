// Slide 18: Core Intervention Techniques
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText('核心咨询技术', {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 30, fontFace: 'Microsoft YaHei', bold: true,
    color: theme.primary
  });
  slide.addText('Core Intervention Techniques', {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 12, fontFace: 'Arial', italic: true,
    color: theme.accent, charSpacing: 3
  });

  // 4 techniques in 2x2 grid
  const techs = [
    {
      title: '依恋激活调节',
      target: '焦虑 / 混乱型',
      steps: '命名 -> 归位 -> 身体 -> 资源 -> 再选择',
      principle: '激活态下前额叶关闭,先调节身体,再处理意义'
    },
    {
      title: '去激活反向工作',
      target: '回避型',
      steps: '不催促 -> 命名"不去感受" -> 小剂量身体 -> 肯定"敢感受"',
      principle: '回避型不是"没感受",是"关闭感受"——让它觉得感受是安全的'
    },
    {
      title: '九型核心恐惧暴露',
      target: '所有类型',
      steps: '命名 -> 邀请进入 -> 不立即安抚 -> 身体陪伴 -> 重建',
      principle: '核心恐惧一旦被完整经历而非回避,影响力就开始减弱'
    },
    {
      title: '三轴叙事整合 (v2.2 新增)',
      target: '中后期 · 修补内在图',
      steps: 'T1投射性识别 → T2温尼科特时刻 → T3破裂-修复 → T4命名分裂 → T5内在图改写',
      principle: '行为/动力只能"安抚",结构修补才"长效"——5 个客体关系技术是 v2.2 的核心新增'
    }
  ];

  techs.forEach((t, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.6;
    const y = 1.5 + row * 1.7;
    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 4.4, h: 1.55,
      fill: { color: 'FFFFFF' }, line: { color: theme.light, width: 1 }
    });
    // Left bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 0.1, h: 1.55,
      fill: { color: theme.accent }, line: { type: 'none' }
    });
    // Title
    slide.addText(t.title, {
      x: x + 0.25, y: y + 0.1, w: 4, h: 0.35,
      fontSize: 15, fontFace: 'Microsoft YaHei', bold: true,
      color: theme.primary
    });
    // Target
    slide.addText('适用: ' + t.target, {
      x: x + 0.25, y: y + 0.42, w: 4, h: 0.25,
      fontSize: 9, fontFace: 'Microsoft YaHei',
      color: theme.accent
    });
    // Steps
    slide.addText('步骤: ' + t.steps, {
      x: x + 0.25, y: y + 0.7, w: 4, h: 0.4,
      fontSize: 10, fontFace: 'Microsoft YaHei',
      color: theme.primary
    });
    // Principle
    slide.addText('原理: ' + t.principle, {
      x: x + 0.25, y: y + 1.12, w: 4, h: 0.4,
      fontSize: 9, fontFace: 'Microsoft YaHei', italic: true,
      color: theme.secondary, lineSpacingMultiple: 1.2
    });
  });

  slide.addText('18', {
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
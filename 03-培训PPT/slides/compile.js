// Compile all slides into one deck
const pptxgen = require('pptxgenjs');
const pres = new pptxgen();

pres.layout = 'LAYOUT_16x9';
pres.title = '依恋 x 九型 - 情感咨询融合理论培训';
pres.author = 'Mavis';

// Professional psychological counseling palette
// Deep navy + warm terracotta + cream
const theme = {
  primary: '1a2238',    // deep navy - body, primary text
  secondary: '4a5568',  // gray-blue - secondary text
  accent: 'e2725b',     // warm terracotta - accent
  light: 'd4c5b9',      // muted tan
  bg: 'faf6f1'          // warm cream
};

for (let i = 1; i <= 27; i++) {
  const num = i.toString().padStart(2, '0');
  const mod = require('./slide-' + num + '.js');
  mod.createSlide(pres, theme);
}

pres.writeFile({ fileName: '/workspace/attachment-enneagram-consultation/03-培训PPT/attachment-enneagram-consultation-training.pptx' })
  .then(name => console.log('Written: ' + name));

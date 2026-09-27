/* Crow artwork used across the site. Hand-built low-poly geometry, so the same bird can be
   drawn solid (the logo) or as a wireframe (the hero drawing). Each function returns an SVG string;
   render it with the <Art> component at the bottom of this file. */
import React from "react";

// Perched crow, facing left. viewBox 0 0 400 300
const P = {
  beak: [28, 104], beakTop: [72, 84], brow: [96, 66], crown: [124, 56], nape: [152, 62],
  back1: [196, 80], back2: [248, 104], rump: [292, 132], tail1: [382, 172], tailTip: [392, 190],
  tail2: [352, 194], vent: [284, 180], belly2: [236, 196], belly1: [184, 198], chest: [134, 176],
  throat: [104, 140], jaw: [78, 112],
  // inner points (wing + face) for the wireframe
  eye: [112, 82], cheek: [118, 110], shoulder: [168, 104], wingMid: [228, 128],
  wingTip: [330, 176], wingLow: [252, 172], flank: [196, 160]
};
const OUTLINE = ['beak', 'beakTop', 'brow', 'crown', 'nape', 'back1', 'back2', 'rump', 'tail1', 'tailTip',
  'tail2', 'vent', 'belly2', 'belly1', 'chest', 'throat', 'jaw'];
const TRIS = [
  ['beak', 'beakTop', 'jaw'], ['beakTop', 'brow', 'eye'], ['beakTop', 'eye', 'jaw'], ['brow', 'crown', 'eye'],
  ['crown', 'nape', 'eye'], ['eye', 'nape', 'cheek'], ['eye', 'cheek', 'jaw'], ['jaw', 'cheek', 'throat'],
  ['nape', 'back1', 'shoulder'], ['nape', 'shoulder', 'cheek'], ['cheek', 'shoulder', 'throat'],
  ['throat', 'shoulder', 'chest'], ['shoulder', 'flank', 'chest'], ['chest', 'flank', 'belly1'],
  ['back1', 'back2', 'wingMid'], ['back1', 'wingMid', 'shoulder'], ['shoulder', 'wingMid', 'flank'],
  ['back2', 'rump', 'wingMid'], ['rump', 'wingTip', 'wingMid'], ['wingMid', 'wingTip', 'wingLow'],
  ['wingMid', 'wingLow', 'flank'], ['flank', 'wingLow', 'belly2'], ['flank', 'belly2', 'belly1'],
  ['wingLow', 'vent', 'belly2'], ['wingLow', 'wingTip', 'vent'], ['rump', 'tail1', 'wingTip'],
  ['wingTip', 'tail1', 'tailTip'], ['wingTip', 'tailTip', 'tail2'], ['wingTip', 'tail2', 'vent']
];
const pt = (k) => P[k].join(',');
const OUTLINE_PTS = OUTLINE.map(pt).join(' ');
const LEGS = '<path d="M196 196 L190 246 M190 246 l-16 8 M190 246 l6 10 M190 246 l-4 12 M228 194 L230 244 M230 244 l-14 10 M230 244 l10 9 M230 244 l0 13" fill="none" stroke-linecap="round"/>';
// these facets get a lighter grey so the solid bird has a subtle low-poly sheen
const SHADE = { 'wingMid,wingTip,wingLow': 1, 'rump,wingTip,wingMid': 1, 'back2,rump,wingMid': 1,
  'crown,nape,eye': 1, 'shoulder,wingMid,flank': 1, 'wingTip,tailTip,tail2': 1 };

// The crow logo. For a light crow on a dark background pass fill, sheen and a dark eye.
export function crowLogo(opts = {}) {
  const fill = opts.fill || '#0b0b0b', sheen = opts.sheen || '#2a2a2a';
  const facets = TRIS.map((t) => {
    const c = SHADE[t.join(',')] ? sheen : fill;
    return '<polygon points="' + t.map(pt).join(' ') + '" fill="' + c + '" stroke="' + c + '" stroke-width="1"/>';
  }).join('');
  return '<svg viewBox="0 0 400 300" aria-hidden="true">' +
    '<g stroke="' + fill + '" stroke-width="5">' + LEGS + '</g>' + facets +
    '<circle cx="112" cy="82" r="4.5" fill="' + (opts.eye || '#fff') + '"/><circle cx="111" cy="81" r="1.6" fill="' + fill + '"/></svg>';
}

// The wireframe crow. CSS animates .wire-edges / .wire-outline / .wire-legs / .wire-nodes.
export function crowWire(stroke = '#111') {
  const edges = TRIS.map((t) => '<polygon points="' + t.map(pt).join(' ') + '"/>').join('');
  const nodes = Object.keys(P).map((k) => '<circle cx="' + P[k][0] + '" cy="' + P[k][1] + '" r="2.6"/>').join('');
  return '<svg viewBox="0 0 400 300" aria-hidden="true">' +
    '<g fill="none" stroke="' + stroke + '" stroke-width="1" stroke-linejoin="round" class="wire-edges">' + edges + '</g>' +
    '<polygon class="wire-outline" points="' + OUTLINE_PTS + '" fill="none" stroke="' + stroke + '" stroke-width="2.2" stroke-linejoin="round"/>' +
    '<g stroke="' + stroke + '" stroke-width="2.2" class="wire-legs">' + LEGS + '</g>' +
    '<g fill="#fff" stroke="' + stroke + '" stroke-width="1.2" class="wire-nodes">' + nodes + '</g></svg>';
}

// Gliding crow seen from below: fingered wing tips and a fanned tail. viewBox 0 0 300 150
export function crowFlying(fill = '#151515') {
  const half = [[150, 20], [144, 23], [141, 32], [141, 46], [128, 50], [96, 44], [62, 42], [30, 50], [8, 58], [26, 62],
    [6, 70], [28, 72], [12, 82], [34, 82], [24, 92], [48, 88], [70, 82], [100, 80], [128, 82], [138, 88],
    [140, 104], [128, 132], [140, 128], [150, 136]];
  const right = half.slice(0, -1).reverse().map((p) => [300 - p[0], p[1]]);
  const pts = half.concat(right).map((p) => p.join(',')).join(' ');
  return '<svg viewBox="0 0 300 150" aria-hidden="true"><polygon points="' + pts + '" fill="' + fill + '" stroke="' + fill + '" stroke-width="2" stroke-linejoin="round"/></svg>';
}

export function feather(fill = '#111') {
  return '<svg viewBox="0 0 60 200" aria-hidden="true">' +
    '<path d="M30 6 C48 34 54 78 48 120 L44 116 L46 134 C42 150 36 164 31 172 L29 172 C22 158 16 142 13 124 L17 128 L12 110 C8 74 14 34 30 6Z" fill="' + fill + '"/>' +
    '<path d="M30 14 L30 196" stroke="' + fill + '" stroke-width="2.2" stroke-linecap="round"/>' +
    '<path d="M30 60 L42 48 M30 84 L46 72 M30 70 L18 58 M30 100 L14 88" stroke="#fff" stroke-width="1.4" opacity=".55"/></svg>';
}

// Brush-stroke circle (ensō). stroke-dashoffset animation in CSS paints it on.
export function enso(width = 9) {
  return '<svg viewBox="0 0 200 200" class="ink" aria-hidden="true"><circle cx="100" cy="100" r="88" fill="none" stroke="#151515" stroke-width="' + width + '" stroke-linecap="round" pathLength="1000" transform="rotate(-70 100 100)"/></svg>';
}

// Ink dot used for the revision markers
export function inkDot() {
  return '<svg viewBox="0 0 20 20" class="ink" aria-hidden="true"><circle cx="10" cy="10" r="8.5" fill="#151515"/></svg>';
}

/* Renders one of the SVG strings above. The markup is our own static artwork (no user input),
   so injecting it as HTML is safe and keeps the geometry in one place. */
export class Art extends React.Component {
  shouldComponentUpdate(next) {
    return next.svg !== this.props.svg || next.className !== this.props.className;
  }
  render() {
    const Tag = this.props.as || 'span';
    return <Tag className={this.props.className} style={this.props.style} aria-hidden="true" dangerouslySetInnerHTML={{ __html: this.props.svg }} />;
  }
}

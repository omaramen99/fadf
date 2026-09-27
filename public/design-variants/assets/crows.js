/* Crow artwork shared by all variants. Hand-built low-poly geometry so the same
   bird can be drawn solid (Corvus), inked (Ink & Feather) or as a wireframe (Blueprint). */
(function () {
  // Perched crow, facing left. viewBox 0 0 400 300
  var P = {
    beak: [28, 104], beakTop: [72, 84], brow: [96, 66], crown: [124, 56], nape: [152, 62],
    back1: [196, 80], back2: [248, 104], rump: [292, 132], tail1: [382, 172], tailTip: [392, 190],
    tail2: [352, 194], vent: [284, 180], belly2: [236, 196], belly1: [184, 198], chest: [134, 176],
    throat: [104, 140], jaw: [78, 112],
    // inner points (wing + face) for the wireframe
    eye: [112, 82], cheek: [118, 110], shoulder: [168, 104], wingMid: [228, 128],
    wingTip: [330, 176], wingLow: [252, 172], flank: [196, 160]
  };
  var outline = ['beak', 'beakTop', 'brow', 'crown', 'nape', 'back1', 'back2', 'rump', 'tail1', 'tailTip',
    'tail2', 'vent', 'belly2', 'belly1', 'chest', 'throat', 'jaw'];
  var tris = [
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
  function pt(k) { return P[k].join(','); }
  var outlinePts = outline.map(pt).join(' ');
  var legs = '<path d="M196 196 L190 246 M190 246 l-16 8 M190 246 l6 10 M190 246 l-4 12 M228 194 L230 244 M230 244 l-14 10 M230 244 l10 9 M230 244 l0 13" fill="none" stroke-linecap="round"/>';

  // shading: darker facets get a lighter grey so the solid bird has a subtle low-poly sheen
  var shade = { 'wingMid,wingTip,wingLow': 1, 'rump,wingTip,wingMid': 1, 'back2,rump,wingMid': 1,
    'crown,nape,eye': 1, 'shoulder,wingMid,flank': 1, 'wingTip,tailTip,tail2': 1 };

  window.CROW = {
    perchedSolid: function (opts) {
      opts = opts || {};
      var fill = opts.fill || '#0b0b0b', sheen = opts.sheen || '#2a2a2a';
      // flat: one outline shape, no facet seams (used under the ink filter)
      var facets = opts.flat ? '<polygon points="' + outlinePts + '" fill="' + fill + '" stroke="' + fill + '" stroke-width="2" stroke-linejoin="round"/>' : tris.map(function (t) {
        return '<polygon points="' + t.map(pt).join(' ') + '" fill="' + (shade[t.join(',')] ? sheen : fill) + '" stroke="' + (shade[t.join(',')] ? sheen : fill) + '" stroke-width="1"/>';
      }).join('');
      return '<svg viewBox="0 0 400 300" class="' + (opts.cls || '') + '" aria-hidden="true">' +
        '<g stroke="' + fill + '" stroke-width="5">' + legs + '</g>' + facets +
        // eye: white by default; pass opts.eye for a light-coloured crow on a dark background
        '<circle cx="112" cy="82" r="4.5" fill="' + (opts.eye || '#fff') + '"/><circle cx="111" cy="81" r="1.6" fill="' + fill + '"/></svg>';
    },
    perchedWire: function (opts) {
      opts = opts || {};
      var c = opts.stroke || '#111';
      var edges = tris.map(function (t) { return '<polygon points="' + t.map(pt).join(' ') + '"/>'; }).join('');
      var nodes = Object.keys(P).map(function (k) { return '<circle cx="' + P[k][0] + '" cy="' + P[k][1] + '" r="2.6"/>'; }).join('');
      return '<svg viewBox="0 0 400 300" class="' + (opts.cls || '') + '" aria-hidden="true">' +
        '<g fill="none" stroke="' + c + '" stroke-width="1" stroke-linejoin="round" class="wire-edges">' + edges + '</g>' +
        '<polygon class="wire-outline" points="' + outlinePts + '" fill="none" stroke="' + c + '" stroke-width="2.2" stroke-linejoin="round"/>' +
        '<g stroke="' + c + '" stroke-width="2.2" class="wire-legs">' + legs + '</g>' +
        '<g fill="#fff" stroke="' + c + '" stroke-width="1.2" class="wire-nodes">' + nodes + '</g></svg>';
    },
    // Gliding crow seen from below: fingered wing tips and a fanned tail. viewBox 0 0 300 150
    flying: function (opts) {
      opts = opts || {};
      var f = opts.fill || '#111';
      var half = [[150, 20], [144, 23], [141, 32], [141, 46], [128, 50], [96, 44], [62, 42], [30, 50], [8, 58], [26, 62],
        [6, 70], [28, 72], [12, 82], [34, 82], [24, 92], [48, 88], [70, 82], [100, 80], [128, 82], [138, 88],
        [140, 104], [128, 132], [140, 128], [150, 136]];
      var right = half.slice(0, -1).reverse().map(function (p) { return [300 - p[0], p[1]]; });
      var pts = half.concat(right).map(function (p) { return p.join(','); }).join(' ');
      return '<svg viewBox="0 0 300 150" class="' + (opts.cls || '') + '" aria-hidden="true">' +
        '<polygon points="' + pts + '" fill="' + f + '" stroke="' + f + '" stroke-width="2" stroke-linejoin="round"/></svg>';
    },
    feather: function (opts) {
      opts = opts || {};
      var f = opts.fill || '#111';
      return '<svg viewBox="0 0 60 200" class="' + (opts.cls || '') + '" aria-hidden="true">' +
        '<path d="M30 6 C48 34 54 78 48 120 L44 116 L46 134 C42 150 36 164 31 172 L29 172 C22 158 16 142 13 124 L17 128 L12 110 C8 74 14 34 30 6Z" fill="' + f + '"/>' +
        '<path d="M30 14 L30 196" stroke="' + f + '" stroke-width="2.2" stroke-linecap="round"/>' +
        '<path d="M30 60 L42 48 M30 84 L46 72 M30 70 L18 58 M30 100 L14 88" stroke="#fff" stroke-width="1.4" opacity=".55"/></svg>';
    }
  };
})();

importScripts('https://teachwiki.github.io/AutoDraw/scripts/jsqrcode/grid.js',
    'https://teachwiki.github.io/AutoDraw/scripts/jsqrcode/version.js',
    'https://teachwiki.github.io/AutoDraw/scripts/jsqrcode/detector.js',
    'https://teachwiki.github.io/AutoDraw/scripts/jsqrcode/formatinf.js',
    'https://teachwiki.github.io/AutoDraw/scripts/jsqrcode/errorlevel.js',
    'https://teachwiki.github.io/AutoDraw/scripts/jsqrcode/bitmat.js',
    'https://teachwiki.github.io/AutoDraw/scripts/jsqrcode/datablock.js',
    'https://teachwiki.github.io/AutoDraw/scripts/jsqrcode/bmparser.js',
    'https://teachwiki.github.io/AutoDraw/scripts/jsqrcode/datamask.js',
    'https://teachwiki.github.io/AutoDraw/scripts/jsqrcode/rsdecoder.js',
    'https://teachwiki.github.io/AutoDraw/scripts/jsqrcode/gf256poly.js',
    'https://teachwiki.github.io/AutoDraw/scripts/jsqrcode/gf256.js',
    'https://teachwiki.github.io/AutoDraw/scripts/jsqrcode/decoder.js',
    'https://teachwiki.github.io/AutoDraw/scripts/jsqrcode/qrcode.js',
    'https://teachwiki.github.io/AutoDraw/scripts/jsqrcode/findpat.js',
    'https://teachwiki.github.io/AutoDraw/scripts/jsqrcode/alignpat.js',
    'https://teachwiki.github.io/AutoDraw/scripts/jsqrcode/databr.js');


self.onmessage = function(e) {
  var data = e.data;

  try {
    var width = data.width;
    var height = data.height;
    var result = qrcode.decode(width, height, data);
    postMessage(result);
  } 
  catch(e) {
    postMessage(undefined);
  }

};

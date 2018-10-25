const { createDiamond } = require('./src/patternLib.js');

const main = function() {
  let type = process.argv[2];
  let height = +process.argv[3];
  if(height%2 == 0) {
    height--;
  }
  let pattern = createDiamond(type,height);
  console.log(pattern);
}
main();

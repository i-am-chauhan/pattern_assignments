const { createTriangle } = require('./src/patternLib.js');

const main = function() {
  let type = process.argv[2];
  let height = +process.argv[3];
  let pattern = createTriangle(type,height);
  console.log(pattern);
}
main();

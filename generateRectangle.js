const { createRectangle } = require('./src/patternLib.js');

const main = function() {
  let type = process.argv[2];
  let columns = +process.argv[3];
  let rows = +process.argv[4];
  let pattern = createRectangle(type, columns, rows);
  console.log(pattern);
}
main();

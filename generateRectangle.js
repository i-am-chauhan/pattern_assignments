const { createRectangle, extractUserArgs } = require('./src/patternLib.js');

const main = function() {
  let args = extractUserArgs(process.argv);
  let type = args.type;
  let columns = args.columns;
  let rows = args.rows;
  let pattern = createRectangle(type, columns, rows);
  console.log(pattern);
}
main();

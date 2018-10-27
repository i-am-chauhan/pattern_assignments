const { createRectangle, extractUserArgs } = require('./src/patternLib.js');

const main = function() {
  let args = extractUserArgs(process.argv);
  let pattern = createRectangle(args.type, args.columns, args.rows);
  console.log(pattern);
}
main();

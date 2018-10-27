const { createTriangle, extractUserArgs } = require('./src/patternLib.js');

const main = function() {
  let args = extractUserArgs(process.argv);
  let height = args.columns;
  let pattern = createTriangle(args.type,height);
  console.log(pattern);
}
main();

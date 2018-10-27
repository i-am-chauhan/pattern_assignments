const { createDiamond, extractUserArgs } = require('./src/patternLib.js');

const main = function() {
  let args = extractUserArgs(process.argv);
  let height = args.columns;
  if(height%2 == 0) {
    height--;
  }
  let pattern = createDiamond(args.type,height);
  console.log(pattern);
}
main();

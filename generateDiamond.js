const { createDiamond, extractUserArgs } = require('./src/patternLib.js');

const main = function() {
  let userArgs = extractUserArgs(process.argv);
  let pattern = createDiamond(userArgs);
  console.log(pattern);
}
main();

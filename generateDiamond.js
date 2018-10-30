const { organizeDiamond, extractUserArgs } = require('./src/patternLib.js');

const main = function() {
  let userArgs = extractUserArgs(process.argv);
  let pattern = organizeDiamond(userArgs);
  console.log(pattern);
}
main();

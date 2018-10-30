const { organizePattern } = require('./src/patternLib.js');
const { extractMultiUsrArgs } = require('./src/patternLib.js');

const main = function() {
  let userArgs = extractMultiUsrArgs(process.argv);
  let pattern = organizePattern(userArgs);
  console.log(pattern);
}
main();

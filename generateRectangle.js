const { organizeRectangle } = require('./src/patternLib.js');
const { extractUserArgs } = require('./src/patternLib.js');

const main = function() {
  let userArgs = extractUserArgs(process.argv);
  let pattern = organizeRectangle(userArgs);
  console.log(pattern);
}
main();

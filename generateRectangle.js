const { createRectangle, extractUserArgs } = require('./src/patternLib.js');

const main = function() {
  let userArgs = extractUserArgs(process.argv);
  let pattern = createRectangle(userArgs);
  console.log(pattern);
}
main();

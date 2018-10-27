const { createTriangle, extractUserArgs } = require('./src/patternLib.js');

const main = function() {
  let userargs = extractUserArgs(process.argv);
  let pattern = createTriangle(userargs);
  console.log(pattern);
}
main();

const assert = require('assert');
const { createDiamond } = require('../src/pattern_library.js');

// this is test for filled diamond
assert.deepEqual(createDiamond("filled",5),["  *"," ***","*****"," ***","  *"]);
console.log('1st test passed');
assert.deepEqual(createDiamond("filled",5),["   *","  ***"," *****","*******"," *****","  ***","   *"]);
console.log('2nd test passed');

// this is test for hollow diamond
assert.deepEqual(createDiamond("hollow",5),["  *"," * *","*   *"," * *","  *"]);
console.log('1st test passed');
assert.deepEqual(createDiamond("hollow",7),["   *","  * *"," *   *","*     *"," *   *","  * *","   *"]);
console.log('2nd test passed');

// this is test for angled diamond
assert.deepEqual(createDiamond("angled",5),["  *"," / \\","*   *"," \\ /","  *"]);
console.log('1st test passed');
assert.deepEqual(createDiamond("angled",7),["   *","  / \\"," /   \\","*     *"," \\   /","  \\ /","   *"]);
console.log('2nd test passed');

const assert = require('assert');
const { createTriangle } = require('../src/pattern_libray.js');

//this is test left align triangles
assert.deepEqual(createTriangle("left",5),["*","**","***","****","*****"]);
console.log('1st test passed');
assert.deepEqual(createTriangle("left",6),["*","**","***","****","*****","******"]);
console.log('2nd test passed');
assert.deepEqual(createTriangle("left",7),["*","**","***","****","*****","******","*******"]);
console.log('3rd test passed');

//this is test right align triangles
assert.deepEqual(createTriangle("right",5),["    *","   **","  ***"," ****","*****"]);
console.log('1st test passed');
assert.deepEqual(createTriangle("right",6),["     *","    **","   ***","  ****"," *****","******"]);
console.log('2nd test passed');
assert.deepEqual(createTriangle("right",7),["      *","     **","    ***","   ****","  *****"," ******","*******"]);
console.log('3rd test passed');

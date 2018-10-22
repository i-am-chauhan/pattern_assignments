const assert=require('assert');
const { createRectangle } = require('../src/pattern_library.js');

//this is test for filled rectangle
assert.deepEqual(createRectangle("filled",5,5),["*****","*****","*****","*****","*****"]);
console.log('1st test passed');
assert.deepEqual(createRectangle("filled",6,6),["******","******","******","******","******","******"]);
console.log('2nd test passed');
assert.deepEqual(createRectangle("filled",7,7),["*******","*******","*******","*******","*******","*******","*******"]);
console.log('3rd test passed');

//this is test for hollow rectangle
assert.deepEqual(createRectangle("hollow",5,5),["*****","*   *","*   *","*   *","*****"]);
console.log('1st test passed');
assert.deepEqual(createRectangle("hollow",6,6),["******","*    *","*    *","*    *","*    *","******"]);
console.log('2nd test passed');
assert.deepEqual(createRectangle("hollow",7,7),["*******","*     *","*     *","*     *","*     *","*     *","*******"]);
console.log('3rd test passed');

//this is test for alternating rectangle
assert.deepEqual(createRectangle("alternating",5,5),["*****","-----","*****","-----","*****"]);
console.log('1st test passed');
assert.deepEqual(createRectangle("alternating",6,6),["******","------","******","------","******","------"]);
console.log('2nd test passed');
assert.deepEqual(createRectangle("alternating",7,7),["*******","-------","*******","-------","*******","-------","*******"]);
console.log('3rd test passed');

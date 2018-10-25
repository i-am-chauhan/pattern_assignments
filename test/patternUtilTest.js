const assert = require('assert');
const { generateLine, createRow } = require('../src/patternUtil.js');
const { leftBorderWidth, rightBorderWidth } = require('../src/patternUtil.js');

//=============(test for generateLine)==============\\

assert.deepEqual(generateLine(0,"*"),"");
assert.deepEqual(generateLine(5,"*"),"*****");
assert.deepEqual(generateLine(3,"-"),"---");
assert.deepEqual(generateLine(4,"$"),"$$$$");
console.log('all generateLine function test passed');
//=============(test for createRow)=================\\

assert.deepEqual(createRow(3,"*",0),"***");
assert.deepEqual(createRow(3,"&",2),"  &&&");
assert.deepEqual(createRow(3,"$",1)," $$$");
console.log('all createRow function test passed');
//=============(test for leftBorderWidth)============\\

assert.deepEqual(leftBorderWidth(0),0);
assert.deepEqual(leftBorderWidth(1),1);
assert.deepEqual(leftBorderWidth(2),1);
assert.deepEqual(leftBorderWidth(4),1);
console.log('all leftBorderWidth function test passed');
//=============(test for rightBorderWidth)============\\

assert.deepEqual(rightBorderWidth(1),0);
assert.deepEqual(rightBorderWidth(2),1);
assert.deepEqual(rightBorderWidth(3),1);
console.log('all rightBorderWidth function test passed');

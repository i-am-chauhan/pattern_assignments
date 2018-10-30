const assert = require('assert');
const lib = require('../src/patternUtil.js');
const { repeatCharacter, createRow } = lib;
const { leftBorderWidth, rightBorderWidth } = lib;
const { extractMultiUsrArgs } = lib;

//=============(test for repeatCharacter)==============\\

assert.deepEqual(repeatCharacter(0,"*"),"");
assert.deepEqual(repeatCharacter(5,"*"),"*****");
assert.deepEqual(repeatCharacter(3,"-"),"---");
assert.deepEqual(repeatCharacter(4,"$"),"$$$$");
console.log('all repeatCharacter function test passed');
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

//=================================(extract multi user Args test)=========================\\

let inputFor_filp = [,,"flip","filled_rectangle",5,5,"left_triangle",5];
let type1 = [ createRectangle, "filled",5,5 ];
let type2 = [ createTriangle, "left", 5 ];
let outputFor_flip = { action:"flip", type1: type1, type2: type2 };

assert.deepEqual(extractMultiUsrArgs(inputFor_filp),outputFor_flip);
console.log("input for flip filled_rectangle 5 5 and left_triangle 5 passed");

let inputFor_mirror = [ ,,"mirror","left_triangle",5,"left_triangle",5 ];
let type3 = [ createTriangle, "left", 5 ];
let type4 = [ createTriangle, "left", 5 ];
let outputFor_mirror = { action:"mirror", type1: type3, type2: type4 };

assert.deepEqual(extractMultiUsrArgs(inputFor_mirror),outputFor_mirror);
console.log("input for mirror 2 left Triangle for width 5 passed");

let inputFor_merge = [,,"filled_rectangle",5,5,"left_triangle",5];
let outputFor_merge = { action:"", type1: type1, type2: type2 };

assert.deepEqual(extractMultiUsrArgs(inputFor_merge),outputFor_merge);
console.log("input for merge filled_rectangle 5 5 and left_triangle 5 passed")


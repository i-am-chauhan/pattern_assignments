const assert=require('assert');
const lib = require('../src/patternLib.js');
const { createRectangle, createTriangle, createDiamond } = lib;
const { extractUserArgs } = lib;
const { generatePattern } = lib;

const repeat=function(symbol,times){
  return new Array(times).fill(symbol).join("");
}

//=================================(rectangle test)=============================================\\
let _5_5star = new Array(5).fill(repeat("*",5));
let _6_6star = new Array(6).fill(repeat("*",6));
let _7_7star = new Array(7).fill(repeat("*",7));

//this is test for filled rectangle

assert.deepEqual(createRectangle({ type:"filled", columns:5, rows:5}),_5_5star);
console.log('1st test passed');

assert.deepEqual(createRectangle({ type:"filled", columns:6, rows:6}),_6_6star);
console.log('2nd test passed');

assert.deepEqual(createRectangle({ type:"filled", columns:7, rows:7}),_7_7star);
console.log('3rd test passed');
console.log("all filled rectangle test passed");

//this is test for hollow rectangle

let _5_3_HollowRectangle = ["*****","*   *","*****"];
assert.deepEqual(createRectangle({ type:"hollow", columns:5, rows:3}),_5_3_HollowRectangle);
console.log('1st test passed');

let _4_3_HollowRectangle = ["****","*  *","****"];
assert.deepEqual(createRectangle({ type:"hollow", columns:4, rows:3}),_4_3_HollowRectangle);
console.log('2nd test passed');

let _7_4_HollowRectangle = ["*******","*     *","*     *","*******"];
assert.deepEqual(createRectangle({ type:"hollow", columns:7, rows:4}),_7_4_HollowRectangle);
console.log('3rd test passed');
console.log("all hollow rectangle test passed");

//this is test for alternating rectangle

let _5star = repeat("*",5);
let _5hyphen = repeat("-",5);
let output1 = [ _5star,_5hyphen,_5star,_5hyphen,_5star];

let _6star = repeat("*",6);
let _6hyphen = repeat("-",6);
let output2 = [ _6star,_6hyphen,_6star,_6hyphen,_6star,_6hyphen];

let _7star = repeat("*",7);
let _7hyphen = repeat("-",7);
let output3 = [_7star,_7hyphen,_7star,_7hyphen,_7star,_7hyphen,_7star];

assert.deepEqual(createRectangle({ type:"alternating", 
                                 columns:5,
                                 rows:5 } ),
                                 output1);

console.log('1st test passed');

assert.deepEqual(createRectangle({ type:"alternating",
                                  columns:6, 
                                  rows:6} ),
                                  output2);

console.log('2nd test passed');

assert.deepEqual(createRectangle({ type:"alternating", 
                                  columns:7, 
                                  rows:7 } ),
                                  output3);

console.log('3rd test passed');
console.log("all alternating rectangle test passed");

console.log("**************(Hurraaaaah! all rectangle test passed)****************")
//=================================(triangle test)=============================================\\

//this is test left align triangles
let leftTriangle_5=["*    "];
leftTriangle_5[1] = "**   ";
leftTriangle_5[2] = "***  ";
leftTriangle_5[3] = "**** ";
leftTriangle_5[4] = "*****";

assert.deepEqual(createTriangle({ type:"left", columns:5}),leftTriangle_5);
console.log('1st test passed');

let leftTriangle_6=["*     "];
leftTriangle_6[1] = "**    ";
leftTriangle_6[2] = "***   ";
leftTriangle_6[3] = "****  ";
leftTriangle_6[4] = "***** ";
leftTriangle_6[5] = "******";

assert.deepEqual(createTriangle({ type:"left", columns:6}),leftTriangle_6);
console.log('2nd test passed');

let leftTriangle_7=["*      "];
leftTriangle_7[1] = "**     ";
leftTriangle_7[2] = "***    ";
leftTriangle_7[3] = "****   ";
leftTriangle_7[4] = "*****  ";
leftTriangle_7[5] = "****** ";
leftTriangle_7[6] = "*******";

assert.deepEqual(createTriangle({ type:"left", columns:7}),leftTriangle_7);
console.log('3rd test passed');
console.log('all left triangle test passed');

//this is test right align triangles
let rightTriangle_5=["    *"];
rightTriangle_5[1] = "   **";
rightTriangle_5[2] = "  ***";
rightTriangle_5[3] = " ****";
rightTriangle_5[4] = "*****";

assert.deepEqual(createTriangle({ type:"right", columns:5}),rightTriangle_5);
console.log('1st test passed');

let rightTriangle_6=["     *"];
rightTriangle_6[1] = "    **";
rightTriangle_6[2] = "   ***";
rightTriangle_6[3] = "  ****";
rightTriangle_6[4] = " *****";
rightTriangle_6[5] = "******";

assert.deepEqual(createTriangle({ type:"right", columns:6}),rightTriangle_6);
console.log('2nd test passed');

let rightTriangle_7=["      *"];
rightTriangle_7[1] = "     **";
rightTriangle_7[2] = "    ***";
rightTriangle_7[3] = "   ****";
rightTriangle_7[4] = "  *****";
rightTriangle_7[5] = " ******";
rightTriangle_7[6] = "*******";

assert.deepEqual(createTriangle({ type:"right", columns:7}),rightTriangle_7);
console.log('3rd test passed');
console.log('all right triangle test passed');
console.log("**************(Hurraaaaah! all triangle test passed)****************")

//=================================(diamond test)=============================================\\

// this is test for filled diamond

let filled_diamond_5=["  *  "];
filled_diamond_5[1] = " *** ";
filled_diamond_5[2] = "*****";
filled_diamond_5[3] = " *** ";
filled_diamond_5[4] = "  *  ";

assert.deepEqual(createDiamond({ type:"filled", columns:5}),filled_diamond_5);

console.log('1st test passed');

let filled_diamond_7=["   *   "];
filled_diamond_7[1] = "  ***  ";
filled_diamond_7[2] = " ***** ";
filled_diamond_7[3] = "*******";
filled_diamond_7[4] = " ***** ";
filled_diamond_7[5] = "  ***  ";
filled_diamond_7[6] = "   *   ";

assert.deepEqual(createDiamond({ type:"filled", columns:7}),filled_diamond_7);

console.log('2nd test passed');
console.log('all filled diamond test passed');

// this is test for hollow diamond
let hollow_diamond_5=["  *  "];
hollow_diamond_5[1] = " * * ";
hollow_diamond_5[2] = "*   *";
hollow_diamond_5[3] = " * * ";
hollow_diamond_5[4] = "  *  ";

assert.deepEqual(createDiamond({ type:"hollow", columns:5}),hollow_diamond_5);

console.log('1st test passed');

let hollow_diamond_7=["   *   "];
hollow_diamond_7[1] = "  * *  ";
hollow_diamond_7[2] = " *   * ";
hollow_diamond_7[3] = "*     *";
hollow_diamond_7[4] = " *   * ";
hollow_diamond_7[5] = "  * *  ";
hollow_diamond_7[6] = "   *   ";

assert.deepEqual(createDiamond({ type:"hollow", columns:7}),hollow_diamond_7);

console.log('2nd test passed');
console.log('all hollow diamond test passed');

// this is test for angled diamond

let angled_diamond_5=["  *  "];
angled_diamond_5[1] = " / \\ ";
angled_diamond_5[2] = "*   *";
angled_diamond_5[3] = " \\ / ";
angled_diamond_5[4] = "  *  ";

assert.deepEqual(createDiamond({ type:"angled", columns:5}),angled_diamond_5);
console.log('1st test passed');

let angled_diamond_7=["   *   "];
angled_diamond_7[1] = "  / \\  ";
angled_diamond_7[2] = " /   \\ ";
angled_diamond_7[3] = "*     *" ;
angled_diamond_7[4] = " \\   / ";
angled_diamond_7[5] = "  \\ /  ";
angled_diamond_7[6] = "   *   " ;

assert.deepEqual(createDiamond({ type:"angled", columns:7}),angled_diamond_7);

console.log('2nd test passed');
console.log('all angled diamond test passed');
console.log("**************(Hurraaaaah! all diamond test passed)****************")

//=================================(extractUserArgs test)=============================================\\

assert.deepEqual(extractUserArgs([0,,"filled",3,4]),
                { type:"filled", columns:3, rows:4});

assert.deepEqual(extractUserArgs([0,,"left",5]),
                { type:"left", columns:5, rows:5});

assert.deepEqual(extractUserArgs([0,,"hollow",7]),
                { type:"hollow", columns:7, rows:7});

console.log("**************(Hurraaaaah! all extractUserArgs test passed)****************")

//=========================(multiPattern test)==========================\\

let shape1 =[createRectangle,"filled", 5,5];
let shape2 =[createTriangle, "left", 5];
let first_input = { action:"", type1:shape1, type2: shape2 }
let _5_rect_triangle = [];
_5_rect_triangle[0] ="***** *    ";
_5_rect_triangle[1] ="***** **   ";
_5_rect_triangle[2] ="***** ***  ";
_5_rect_triangle[3] ="***** **** ";
_5_rect_triangle[4] ="***** *****";

assert.deepEqual(generatePattern(first_input), _5_rect_triangle);
console.log("1st generatePattern test passed");


let shape3 =[createTriangle,"left", 5];
let shape4 =[createTriangle, "left", 5];
let second_input = { action:"", type1:shape3, type2: shape4 }
let _flip_5_left_triangle = [];
_flip_5_left_triangle[0] = "    *     *";
_flip_5_left_triangle[1] = "   **    **";
_flip_5_left_triangle[2] = "  ***   ***";
_flip_5_left_triangle[3] = " ****  ****";
_flip_5_left_triangle[4] = "***** *****";

assert.deepEqual(generatePattern(second_input), _flip_5_left_triangle);
console.log("2nd generatePattern test passed");

let shape5 =[createTriangle,"right", 5];
let shape6 =[createTriangle, "left", 5];
let third_input = { action:"", type1:shape5, type2: shape6 }
let _mirror_5_left_right = [];
_mirror_5_left_right[0] = "***** *****";
_mirror_5_left_right[1] = " ****  ****";
_mirror_5_left_right[2] = "  ***   ***";
_mirror_5_left_right[3] = "   **    **";
_mirror_5_left_right[4] = "    *     *";

assert.deepEqual(generatePattern(third_input), _mirror_5_left_right);
console.log("3rd generatePattern test passed");
console.log("all generatePattern test passed");

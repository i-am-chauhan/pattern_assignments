const assert=require('assert');
const { createRectangle, createTriangle, createDiamond } = require('../src/patternLib.js');
const { extractUserArgs } = require('../src/patternLib.js');

const repeat=function(symbol,times){
  return new Array(times).fill(symbol).join("");
}

//=================================(rectangle test)=============================================\\
let _5_5star= new Array(5).fill(repeat("*",5)).join("\n");
let _6_6star= new Array(6).fill(repeat("*",6)).join("\n");
let _7_7star= new Array(7).fill(repeat("*",7)).join("\n");

//this is test for filled rectangle

assert.deepEqual(createRectangle({ type:"filled", columns:5, rows:5}),_5_5star);
console.log('1st test passed');

assert.deepEqual(createRectangle({ type:"filled", columns:6, rows:6}),_6_6star);
console.log('2nd test passed');

assert.deepEqual(createRectangle({ type:"filled", columns:7, rows:7}),_7_7star);
console.log('3rd test passed');
console.log("all filled rectangle test passed");

//this is test for hollow rectangle

assert.deepEqual(createRectangle({ type:"hollow", columns:5, rows:3}),"*****\n*   *\n*****");
console.log('1st test passed');

assert.deepEqual(createRectangle({ type:"hollow", columns:4, rows:3}),"****\n*  *\n****");
console.log('2nd test passed');

assert.deepEqual(createRectangle({ type:"hollow", columns:7, rows:4}),"*******\n*     *\n*     *\n*******");
console.log('3rd test passed');
console.log("all hollow rectangle test passed");

//this is test for alternating rectangle
let _5star = repeat("*",5);
let _5hyphen = repeat("-",5);
let output1 = _5star+"\n"+_5hyphen+"\n"+_5star+"\n"+_5hyphen+"\n"+_5star
let _6star = repeat("*",6);
let _6hyphen = repeat("-",6);
let output2 = _6star+"\n"+_6hyphen+"\n"+_6star+"\n"+_6hyphen+"\n"+_6star
output2 += "\n"+_6hyphen
let _7star = repeat("*",7);
let _7hyphen = repeat("-",7);
let output3 = _7star+"\n"+_7hyphen+"\n"+_7star+"\n"+_7hyphen+"\n"+_7star;
output3 += "\n"+_7hyphen+"\n"+_7star;

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
let leftTriangle_5 = "*    " +"\n";
   leftTriangle_5 += "**   " +"\n";
   leftTriangle_5 += "***  " +"\n";
   leftTriangle_5 += "**** " +"\n";
   leftTriangle_5 += "*****";

assert.deepEqual(createTriangle({ type:"left", columns:5}),leftTriangle_5);
console.log('1st test passed');

let leftTriangle_6 = "*     " +"\n";
   leftTriangle_6 += "**    " +"\n";
   leftTriangle_6 += "***   " +"\n";
   leftTriangle_6 += "****  " +"\n";
   leftTriangle_6 += "***** " +"\n";
   leftTriangle_6 += "******";

assert.deepEqual(createTriangle({ type:"left", columns:6}),leftTriangle_6);
console.log('2nd test passed');

let leftTriangle_7 = "*      " +"\n";
   leftTriangle_7 += "**     " +"\n";
   leftTriangle_7 += "***    " +"\n";
   leftTriangle_7 += "****   " +"\n";
   leftTriangle_7 += "*****  " +"\n";
   leftTriangle_7 += "****** " +"\n";
   leftTriangle_7 += "*******"

assert.deepEqual(createTriangle({ type:"left", columns:7}),leftTriangle_7);

console.log('3rd test passed');
console.log('all left triangle test passed');

//this is test right align triangles
let rightTriangle_5="    *"+"\n";
 rightTriangle_5 += "   **"+"\n";
 rightTriangle_5 += "  ***"+"\n";
 rightTriangle_5 += " ****"+"\n";
 rightTriangle_5 += "*****";

assert.deepEqual(createTriangle({ type:"right", columns:5}),rightTriangle_5);
console.log('1st test passed');

let rightTriangle_6="     *"+"\n";
 rightTriangle_6 += "    **"+"\n";
 rightTriangle_6 += "   ***"+"\n";
 rightTriangle_6 += "  ****"+"\n";
 rightTriangle_6 += " *****"+"\n";
 rightTriangle_6 += "******";

assert.deepEqual(createTriangle({ type:"right", columns:6}),rightTriangle_6);
console.log('2nd test passed');

let rightTriangle_7="      *"+"\n";
 rightTriangle_7 += "     **"+"\n";
 rightTriangle_7 += "    ***"+"\n";
 rightTriangle_7 += "   ****"+"\n";
 rightTriangle_7 += "  *****"+"\n";
 rightTriangle_7 += " ******"+"\n";
 rightTriangle_7 += "*******";

assert.deepEqual(createTriangle({ type:"right", columns:7}),rightTriangle_7);
console.log('3rd test passed');
console.log('all right triangle test passed');
console.log("**************(Hurraaaaah! all triangle test passed)****************")

//=================================(diamond test)=============================================\\

// this is test for filled diamond
let filled_diamond_5="  *"+"\n";
 filled_diamond_5 += " ***"+"\n";
 filled_diamond_5 += "*****"+"\n";
 filled_diamond_5 += " ***"+"\n";
 filled_diamond_5 += "  *";

assert.deepEqual(createDiamond({ type:"filled", columns:5}),filled_diamond_5);

console.log('1st test passed');

let filled_diamond_7="   *"+"\n";
 filled_diamond_7 += "  ***"+"\n";
 filled_diamond_7 += " *****"+"\n";
 filled_diamond_7 += "*******"+"\n";
 filled_diamond_7 += " *****"+"\n";
 filled_diamond_7 += "  ***"+"\n";
 filled_diamond_7 += "   *";

assert.deepEqual(createDiamond({ type:"filled", columns:7}),filled_diamond_7);

console.log('2nd test passed');
console.log('all filled diamond test passed');

// this is test for hollow diamond
let hollow_diamond_5="  *"+"\n";
 hollow_diamond_5 += " * *"+"\n";
 hollow_diamond_5 += "*   *"+"\n";
 hollow_diamond_5 += " * *"+"\n";
 hollow_diamond_5 += "  *";

assert.deepEqual(createDiamond({ type:"hollow", columns:5}),hollow_diamond_5);

console.log('1st test passed');

let hollow_diamond_7="   *"+"\n";
 hollow_diamond_7 += "  * *"+"\n";
 hollow_diamond_7 += " *   *"+"\n";
 hollow_diamond_7 += "*     *"+"\n";
 hollow_diamond_7 += " *   *"+"\n";
 hollow_diamond_7 += "  * *"+"\n";
 hollow_diamond_7 += "   *";

assert.deepEqual(createDiamond({ type:"hollow", columns:7}),hollow_diamond_7);

console.log('2nd test passed');
console.log('all hollow diamond test passed');

// this is test for angled diamond
let angled_diamond_5="  *"+"\n";
 angled_diamond_5 += " / \\"+"\n";
 angled_diamond_5 += "*   *"+"\n";
 angled_diamond_5 += " \\ /"+"\n";
 angled_diamond_5 += "  *";

assert.deepEqual(createDiamond({ type:"angled", columns:5}),angled_diamond_5);
console.log('1st test passed');

let angled_diamond_7="   *"+"\n";
 angled_diamond_7 += "  / \\"+"\n";
 angled_diamond_7 += " /   \\"+"\n";
 angled_diamond_7 += "*     *"+"\n";
 angled_diamond_7 += " \\   /"+"\n";
 angled_diamond_7 += "  \\ /"+"\n";
 angled_diamond_7 += "   *";

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

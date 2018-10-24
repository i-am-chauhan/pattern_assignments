const { createRectangle } = require('./src/pattern_lib.js');

const main=function(){
  let pattern={};
  let type=process.argv[2];
  let columns=+process.argv[3];
  let rows=+process.argv[4];
  pattern["filled"]=createRectangle("filled",columns,rows);
  pattern["hollow"]=createRectangle("hollow",columns,rows);
  pattern["alternating"]=createRectangle("alternating",columns,rows);
  console.log(pattern[type]);
}
main();

const { createTriangle } = require('./src/pattern_lib.js');

const main=function(){
  let pattern={};
  let type=process.argv[2];
  let height=+process.argv[3];
  pattern["left"]=createTriangle("left",height);
  pattern["right"]=createTriangle("right",height);
  console.log(pattern[type]);
}
main();

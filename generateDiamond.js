const { createDiamond }=require('./src/pattern_lib.js');

const main=function(){
  let pattern={};
  let type=process.argv[2];
  let height=+process.argv[3];
  if(height%2==0){
    height=height-1;
  }
  pattern["filled"]=createDiamond("filled",height);
  pattern["hollow"]=createDiamond("hollow",height);
  pattern["angled"]=createDiamond("angled",height);
  console.log(pattern[type]);
}
main();

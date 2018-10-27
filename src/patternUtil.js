const repeatCharacter=function(length,symbol){
  let line="";
  for(let index=0; index<length; index++){
    line+=symbol;
  }
  return line;
}

const createRow=function(length,symbol,frontSpaces){
  return repeatCharacter(frontSpaces," ")+repeatCharacter(length,symbol)
}

const leftBorderWidth=function(arg){
  return 1%(arg+1);
}

const rightBorderWidth=function(arg){
  return 1%arg;
}
exports.repeatCharacter=repeatCharacter;
exports.createRow=createRow;
exports.leftBorderWidth=leftBorderWidth;
exports.rightBorderWidth=rightBorderWidth;

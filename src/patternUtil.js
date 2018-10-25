const generateLine=function(length,symbol){
  let line="";
  for(let index=0; index<length; index++){
    line+=symbol;
  }
  return line;
}

const createRow=function(length,symbol,frontSpaces){
  return generateLine(frontSpaces," ")+generateLine(length,symbol)
}

const leftBorderWidth=function(arg){
  return 1%(arg+1);
}

const rightBorderWidth=function(arg){
  return 1%arg;
}
exports.generateLine=generateLine;
exports.createRow=createRow;
exports.leftBorderWidth=leftBorderWidth;
exports.rightBorderWidth=rightBorderWidth;

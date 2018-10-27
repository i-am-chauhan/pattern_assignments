const repeatCharacter=function(times, symbol){
  return new Array(times).fill(symbol).join('');
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

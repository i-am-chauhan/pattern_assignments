const repeatCharacter=function(times, symbol){
  let line = "";
  for(let index=0; index<times; index++){
    line += symbol;
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
  return 1%arg || 0;
}

const increment = function(initializer,value) {
  let increaseBy = initializer[initializer.length -1]+value;
  initializer.push(increaseBy);
  return initializer;
}

const createIncNumSeries = function(numberOfTerms) {
  let result =  new Array(numberOfTerms).fill(1).reduce(increment,[0]);
  return result.slice(1,);
}

const createFilledLine = function(width, symbol) {
  return repeatCharacter(width, symbol);
}

const justifyLine = function(height) {
  return function(line) {
    return repeatCharacter(height-line.length," ")+line;
  }
}

const revString = function(string) {
  let result = string.split('').reverse();
  return result.join('').toString();
}

exports.repeatCharacter = repeatCharacter;
exports.createRow = createRow;
exports.leftBorderWidth = leftBorderWidth;
exports.rightBorderWidth = rightBorderWidth;
exports.createIncNumSeries = createIncNumSeries;
exports.createFilledLine = createFilledLine;
exports.justifyLine = justifyLine;
exports.revString = revString;

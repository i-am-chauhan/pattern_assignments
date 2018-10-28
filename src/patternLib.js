const {
  repeatCharacter,
  createRow,
  leftBorderWidth,
  rightBorderWidth}=require('./patternUtil.js');

const createFilledLine = function(width, symbol) {
  return repeatCharacter(width, symbol);
}

const createHollowLine = function(width, symbol) {
  let line = repeatCharacter(leftBorderWidth(width), symbol);
  line += repeatCharacter(width -2, " ");
  return line + repeatCharacter(rightBorderWidth(width), symbol);
}

const filledRectangle=function(column, row, symbol) {
  let line = createFilledLine(column, symbol);
  return new Array(row).fill(line);
}

const hollowRectangle=function(column, row, symbol) {
  let edgeLine = createFilledLine(column, symbol);
  let middleLine = createHollowLine(column, symbol);
  let rectangle = new Array(row).fill(middleLine);
  rectangle[0] = edgeLine;
  rectangle[ row -1 ] = edgeLine;
  return rectangle;
}

const alternatingRectangle=function(column,row,symbol1,symbol2) {
  let line = [ createFilledLine(column, symbol1) ];
  line[1] = [createFilledLine(column, symbol2) ];
  let rectangle = [];
  for(let index=0; index<row; index++) {
    rectangle.push(line[ index%2 ]);
  }
  return rectangle;
}

const createRectangle=function(userArgs){
  let type = userArgs.type;
  let column = userArgs.columns;
  let row = userArgs.rows;
  let pattern = {};
  pattern["filled"] = filledRectangle;
  pattern["hollow"] = hollowRectangle;
  pattern["alternating"] = alternatingRectangle;
  return pattern[type](column, row,"*","-").join("\n");
}

const leftAlignTriangle=function(maxColumns){
  let line="";
  let element="";
  let delimiter="";
  for(let index=1; index<=maxColumns; index++){
    element=repeatCharacter(index,"*");
    line=line+delimiter+element;
    delimiter="\n";
  }
  return line;
}

const rightAlignTriangle=function(maxColumns){
  let line="";
  let element="";
  let delimiter="";
  let numOfspaces=0;
  for(let index=1; index<=maxColumns; index++){
    numOfspaces=maxColumns-index;
    element=repeatCharacter(numOfspaces," ")+repeatCharacter(index,"*");
    line=line+delimiter+element;
    delimiter="\n";
  }
  return line;
}

const createTriangle=function(userArgs) {
  let type = userArgs.type;
  let height = userArgs.columns;
  let pattern = {};
  pattern["left"] = leftAlignTriangle;
  pattern["right"] = rightAlignTriangle;
  return pattern[type](height);
}

const diamondRow=function(length,column,symbol1,symbol2,symbol3){
  let line=repeatCharacter(Math.floor(length/2)-Math.floor(column/2)," ");
  line+=symbol1+repeatCharacter(column-2,symbol2)+symbol3;
  return line;
}

const generateDiamond=function(length,symbol1,symbol2,symbol3){
  let line=createRow(leftBorderWidth(length),"*",Math.floor(length/2));
  let delimeter="\n";
  let botDiamond=createRow(rightBorderWidth(length),"*",Math.floor(length/2));
  for(let leftBorderWidth=3; leftBorderWidth<=length-2; leftBorderWidth+=2){
    line+=delimeter+diamondRow(length,leftBorderWidth,symbol1,symbol2,symbol3);
    botDiamond=diamondRow(length,leftBorderWidth,symbol3,symbol2,symbol1)+delimeter+botDiamond;
  }
  line+=delimeter+repeatCharacter(rightBorderWidth(length),"*");
  line+=repeatCharacter(length-2,symbol2)+repeatCharacter(rightBorderWidth(length),"*");
  line+=delimeter+botDiamond;
  return line;
}

const createDiamond=function(userArgs) {
  let type = userArgs.type;
  let height = userArgs.columns;
  if(height%2 == 0) {
    height--;
  }
  if(type == "filled"){
    return generateDiamond(height,"*","*","*");
  }
  if(type == "hollow"){
    return generateDiamond(height,"*"," ","*");
  }
  return generateDiamond(height,"/"," ","\\");
}

const extractUserArgs = function(args) {
  let value = args[2];
  let columns = +args[3];
  let rows = +args[args.length-1];
  return { type : value, columns : columns, rows : rows };
}

exports.createDiamond = createDiamond;
exports.createRectangle = createRectangle;
exports.createTriangle = createTriangle;
exports.extractUserArgs = extractUserArgs;

const {
  generateLine,
  createRow,
  leftBorderWidth,
  rightBorderWidth}=require('./patternUtil.js');

const filledRectangle=function(column,row,symbol){
  let line="";
  let delimeter="";
  for(let index=0; index<row; index++){
    line+=delimeter+generateLine(column,symbol);
    delimeter="\n";
  }
  return line;
}

const hollowRectangle=function(column,row,symbol){
  let line=filledRectangle(column,leftBorderWidth(row),symbol);
  let delimeter="\n";
  for(let index=0; index<row-2; index++){
    line+=delimeter+generateLine(leftBorderWidth(column),symbol);
    line+=generateLine(column-2," ")+generateLine(rightBorderWidth(column),symbol);
  }
  return line+delimeter+filledRectangle(column,rightBorderWidth(row),symbol);
}

const alternatingRectangle=function(column,row,symbol1,symbol2){
  let line=filledRectangle(column,leftBorderWidth(row),symbol1);
  let delimeter="\n";
  for(let index=0; index<row-1; index++){
    if(index%2==0){
      line+=delimeter+generateLine(column,symbol2);
    }else{
      line+=delimeter+generateLine(column,symbol1);
    }
  }
  return line;
}

const createRectangle=function(type,column,row){
  let pattern={};
  pattern["filled"]=filledRectangle(column,row,"*");
  pattern["hollow"]=hollowRectangle(column,row,"*");
  pattern["alternating"]=alternatingRectangle(column,row,"*","-");
  return pattern[type];
}

const leftAlignTriangle=function(maxColumns){
  let line="";
  let element="";
  let delimiter="";
  for(let index=1; index<=maxColumns; index++){
    element=generateLine(index,"*");
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
    element=generateLine(numOfspaces," ")+generateLine(index,"*");
    line=line+delimiter+element;
    delimiter="\n";
  }
  return line;
}

const createTriangle=function(type,height) {
  let pattern={};
  pattern["left"]=leftAlignTriangle(height);
  pattern["right"]=rightAlignTriangle(height);
  return pattern[type];
}

const diamondRow=function(length,column,symbol1,symbol2,symbol3){
  let line=generateLine(Math.floor(length/2)-Math.floor(column/2)," ");
  line+=symbol1+generateLine(column-2,symbol2)+symbol3;
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
  line+=delimeter+generateLine(rightBorderWidth(length),"*");
  line+=generateLine(length-2,symbol2)+generateLine(rightBorderWidth(length),"*");
  line+=delimeter+botDiamond;
  return line;
}

const createDiamond=function(type,height) {
  let pattern={};
  pattern["filled"]=generateDiamond(height,"*","*","*");
  pattern["hollow"]=generateDiamond(height,"*"," ","*");
  pattern["angled"]=generateDiamond(height,"/"," ","\\");
  return pattern[type];
}
exports.createDiamond=createDiamond;
exports.createRectangle=createRectangle;
exports.createTriangle=createTriangle;

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

const index=function(arg){
  return 1%(arg+1);
}

const botindex=function(arg){
  return 1%arg;
}

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
  let line=filledRectangle(column,index(row),symbol);
  let delimeter="\n";
  for(let loopIndex=0; loopIndex<row-2; loopIndex++){
    line+=delimeter+generateLine(index(column),symbol);
    line+=generateLine(column-2," ")+generateLine(botindex(column),symbol);
  }
  return line+delimeter+filledRectangle(column,botindex(row),symbol);
}

const alternatingRectangle=function(column,row,symbol1,symbol2){
  let line=filledRectangle(column,index(row),symbol1);
  let delimeter="\n";
  for(let loopIndex=0; loopIndex<row-1; loopIndex++){
    if(loopIndex%2==0){
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
  for(let loopIndex=1; loopIndex<=maxColumns; loopIndex++){
    element=generateLine(loopIndex,"*");
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
  for(let loopIndex=1; loopIndex<=maxColumns; loopIndex++){
    numOfspaces=maxColumns-loopIndex;
    element=generateLine(numOfspaces," ")+generateLine(loopIndex,"*");
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
  let line=createRow(index(length),"*",Math.floor(length/2));
  let delimeter="\n";
  let botDiamond=createRow(botindex(length),"*",Math.floor(length/2));
  for(let index=3; index<=length-2; index+=2){
    line+=delimeter+diamondRow(length,index,symbol1,symbol2,symbol3);
    botDiamond=diamondRow(length,index,symbol3,symbol2,symbol1)+delimeter+botDiamond;
  }
  line+=delimeter+generateLine(botindex(length),"*");
  line+=generateLine(length-2,symbol2)+generateLine(botindex(length),"*");
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

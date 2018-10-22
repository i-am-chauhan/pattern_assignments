const repeatCharacter=function(symbol,times) {
  return new Array(times).fill(symbol).join("");
} 

const generateFilledLine=function(symbol,width) {
  return repeatCharacter(symbol,width);
}

const leftBorderWidth=function(width) {
  return 1%(width+1);
}

const rightBorderWidth=function(width) {
  return 1%width;
}

const generateHollowLine=function(symbol,width) {
  let line=repeatCharacter(symbol,leftBorderWidth(width));
  line+=repeatCharacter(" ",width-2);
  return line+repeatCharacter(symbol,rightBorderWidth(width));
}

const filledRectangle=function(columns,rows) {
  return new Array(rows).fill(generateFilledLine("*",columns));
}

const hollowRectangle=function(columns,rows){
  let result = new Array(rows).fill(generateHollowLine("*",columns));
  result[0]= generateFilledLine("*",columns);
  result[rows-1]=generateFilledLine("*",columns);
  return result
}

const alterRectangle=function(columns,rows){
  let rectangle=[];
  for(let index=0; index<rows; index++){
    if(index%2==0){
      rectangle.push(generateFilledLine("*",columns));
    } else {
      rectangle.push(generateFilledLine("-",columns));
    }
  }
  return rectangle;
}

const createRectangle = function(type,columns,rows) {
  let pattern={};
  pattern["filled"]=filledRectangle(columns,rows);
  pattern["hollow"]=hollowRectangle(columns,rows);
  pattern["alternating"]=alterRectangle(columns,rows);
  return pattern[type];
}

const leftTriangle=function(maxColumns){
  let line="";
  let element="";
  let delimiter="";
  for(let loopIndex=1; loopIndex<=maxColumns; loopIndex++){
    element=generateFilledLine(loopIndex,"*");
    line=line+delimiter+element;
    delimiter="\n";
  }
  return line;
}

const rightTriangle=function(maxColumns){
  let line="";
  let element="";
  let delimiter="";
  let numOfspaces=0;
  for(let loopIndex=1; loopIndex<=maxColumns; loopIndex++){
    numOfspaces=maxColumns-loopIndex;
    element=generateFilledLine(numOfspaces," ")+generateFilledLine(loopIndex,"*");
    line=line+delimiter+element;
    delimiter="\n";
  }
  return line;
}

const createTriangle=function(type,height){
  let pattern={};
  pattern["left"]=leftTriangle(height);
  pattern["right"]=rightTriangle(height);
  return pattern[type];
}

const numOfspaces=function(maxcolumns,numOfcontent){
  let result=(maxcolumns-numOfcontent)/2;
  return result;
}

const solidDiamondCap=function(maxcolumns){
  let line="";
  let stringToAdd="";
  let delimiter="";
  for(let loopIndex=1; loopIndex<=maxcolumns; loopIndex+=2){
    stringToAdd=repeatCharacter(numOfspaces(maxcolumns,loopIndex)," ");
    stringToAdd+=repeatCharacter(loopIndex,"*");
    line=line+delimiter+stringToAdd;
    delimiter="\n";
  }
  return line;
}

const solidDiamondBot=function(maxcolumns){
  let line=""+solidDiamondCap(maxcolumns);
  let stringToAdd="";
  let delimiter="\n";
  for(let loopIndex=maxcolumns-2; loopIndex>=1; loopIndex=loopIndex-2){
    stringToAdd=repeatCharacter(numOfspaces(maxcolumns,loopIndex)," ");
    stringToAdd+=repeatCharacter(loopIndex,"*");
    line=line+delimiter+stringToAdd;
  }
  return line;
}

const hollowDiamondCap=function(maxcolumns,startSymbol,endSymbol){
  let line=repeatCharacter(numOfspaces(maxcolumns,1)," ")+"*";
  let stringToAdd="";
  for(let loopIndex=3; loopIndex<=maxcolumns-2; loopIndex+=2){
    stringToAdd=repeatCharacter(numOfspaces(maxcolumns,loopIndex)," ")+startSymbol;
    stringToAdd+=repeatCharacter(loopIndex-2," ")+endSymbol;
    line=line+"\n"+stringToAdd;
  }
  line+="\n"+"*"+repeatCharacter(maxcolumns-2," ")+"*";
  return line;
}

const hollowDiamondBot=function(maxcolumns,startSymbol,endSymbol){
  let line=""+hollowDiamondCap(maxcolumns,startSymbol,endSymbol);
  let stringToAdd="";
  for(let loopIndex=maxcolumns-2; loopIndex>1; loopIndex=loopIndex-2){
    stringToAdd=repeatCharacter(numOfspaces(maxcolumns,loopIndex)," ")+endSymbol;
    stringToAdd+=repeatCharacter(loopIndex-2," ")+startSymbol;
    line=line+"\n"+stringToAdd;
  }
  line+="\n"+repeatCharacter(numOfspaces(maxcolumns,1)," ")+"*";
  return line;
}

const createDiamond=function(type,height) {
  let pattern={};
  pattern["filled"]=solidDiamondBot(height);
  pattern["hollow"]=hollowDiamondBot(height,"*","*");
  pattern["angled"]=hollowDiamondBot(height,"/","\\");
  return pattern[type];
}

exports.createRectangle=createRectangle;
exports.createTriangle=createTriangle;
exports.createDiamond=createDiamond;

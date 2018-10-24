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

const numOfspaces=function(maxcolumns,numOfcontent){
  let result=(maxcolumns-numOfcontent)/2;
  return result;
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

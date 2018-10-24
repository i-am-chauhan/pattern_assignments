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
exports.createRectangle=createRectangle;

const main=function(){
  let pattern={};
  let type=process.argv[2];
  let columns=+process.argv[3];
  let rows=+process.argv[4];
  pattern["filled"]=createRectangle("filled",columns,rows);
  pattern["hollow"]=createRectangle("hollow",columns,rows);
  pattern["alternating"]=createRectangle("alternating",columns,rows);
  console.log(pattern[type]);
}
main();

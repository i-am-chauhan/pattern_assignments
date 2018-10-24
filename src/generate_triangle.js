const filledLine=function(columns,content){
  let line="";
  for(let loopIndex=1; loopIndex<=columns; loopIndex++){
    line=line+content;
  }
  return line;
}

const leftAlignTriangle=function(maxColumns){
  let line="";
  let element="";
  let delimiter="";
  for(let loopIndex=1; loopIndex<=maxColumns; loopIndex++){
    element=filledLine(loopIndex,"*");
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
    element=filledLine(numOfspaces," ")+filledLine(loopIndex,"*");
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
exports.createTriangle=createTriangle;

const main=function(){
  let pattern={};
  let type=process.argv[2];
  let height=+process.argv[3];
  pattern["left"]=createTriangle("left",height);
  pattern["right"]=createTriangle("right",height);
  console.log(pattern[type]);
}
main();

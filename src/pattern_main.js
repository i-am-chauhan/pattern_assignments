const {createRectangle,createTriangle}=require('./pattern_library.js');
const {createDiamond}=require('./pattern_library.js');

const main = function() {
  let type = ""+process.argv[2];
  let column = +process.argv[3];
  let rows = +process.argv[4];
  let pattern = {};
  pattern["filled_rectangle"] = createRectangle("filled",column,rows);
  pattern["hollow_rectangle"] = createRectangle("hollow",column,rows);
  pattern["altered_rectangle"] = createRectangle("alternating",column,rows);
  pattern["right_triangle"] = createTriangle("right",column);
  pattern["left_triangle"] = createTriangle("left",column);
  pattern["filled_diamond"] = createDiamond("filled",column);
  pattern["hollow_diamond"] = createDiamond("hollow",column);
  pattern["angled_diamond"] = createDiamond("angled",column);
  console.log(pattern[type].join("\n"));
}
main();

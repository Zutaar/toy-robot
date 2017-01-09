function Robot() {

  const directions = ["SOUTH","WEST","NORTH","EAST"];
  var currentDirection = null;
  var pos = {
    x: null;
    y: null;
  }
  var onTable = false;

  return {
    command:function(cmd) {
      switch(cmd) {
        case "PLACE":
          place(cmd.split(" ")[0]);
          break;
        case "MOVE":
          move();
          break;
        case "LEFT":
          left();
          break;
        case "RIGHT":
          right();
          break;
        case "REPORT":
          report();
          break;
      }
    },

    place:function(xyf) {
      let XYF = xyf.split(",");
      pos.x = parseInt(XYF[0]);
      pos.y = parseInt(XYF[1]);
      currentDirection = direction.getIndexOf(XYF[2]);
      onTable = true;
    },

    move:function() {
      if (currentDirection%2===0) {
        pos.y += currentDirection-1;
      } else {
        pos.x += currentDirection-2;
      }
    },

    left:function() {
      currentDirection--;
    },

    right:function() {
      currentDirection++;
    },

    report:function() {
      return "Output: " + [pos.x,pos.y,direction[currentDirection]].join(",")
    }

  }
}

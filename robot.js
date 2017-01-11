function Robot() {

  const directions = ["SOUTH","WEST","NORTH","EAST"];
  var currentDirection = null;
  var pos = {
    x: null,
    y: null
  }
  var onTable = false;

  return {
    process:function(cmds) {
      let CMDS = cmds.split(" ");
      for (var i = 0; i < CMDS.length; ++i) {
        if (CMDS === "PLACE") {
          command(CMDS[i++].concat(" ", CMDS[i]));
        } else {
          command(CMDS[i]);
        }
      }
    },

    command:function(cmd) {
      switch(cmd) {
        case "PLACE":
          place(cmd.split(" ")[1]);
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
      if (onTable) {
        if (currentDirection%2===0 || ( pos.y + currentDirection - 1 >= 0 && pos.y + currentDirection - 1 < 5 ) {
          pos.y += currentDirection-1;
        } else if ( pos.x + currentDirection-2 >= 0 && pos.x + currentDirection-2 >= 0 ) {
          pos.x += currentDirection-2;
        }
      }
    },

    left:function() {
      if (onTable) currentDirection--;
    },

    right:function() {
      if (onTable) currentDirection++;
    },

    report:function() {
      if (onTable) console.log( "Output: " + [pos.x,pos.y,direction[currentDirection]].join(",") );
    }

  }
}

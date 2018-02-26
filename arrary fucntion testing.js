const preimage = {
  name:"PTS",
  a:{x:1,y:4},
  b:{x:0,y:3},
  c:{x:0,y:1},
  d:{x:1,y:0},
  e:{x:2,y:0},
  f:{x:3,y:1},
  g:{x:3,y:3},
  h:{x:2,y:4},
  i:{x:1,y:3},
  j:{x:2,y:3},
  k:{x:2,y:1},
  l:{x:1,y:1}
};

function ReadPoints(PTS) {
  console.log(PTS.name);
  var x;
  var y;
  for (var key in PTS) {
    if (key != "name"){
      for (var koy in PTS[key]) {
        switch (koy) {
          case "x":
            x = PTS[key][koy];
            break;
          case "y":
            y = PTS[key][koy];
            break;
        }

      }
      console.log(x + ',' + y);
    }
  }
}

function ReadNames(PTS) {
  for (var key in PTS) {
    if (key != "name"){

      console.log(key);

    }
  }
}

ReadPoints(preimage);

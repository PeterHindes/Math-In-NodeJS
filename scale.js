//Define your scale factor and point of dilation
const scaleFactor = 3;
const POD = {x:-2,y:-1};

//Define your preimage
const preimage = {
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

//setup other arrays to hold new values
function ObjSetup(array) {
  for (var key in preimage) {
    for (var koy in preimage[key]) {
      array[key] = "lol";
    }
  }
}

//Scaled Array
var PTSA = { name:"PTSA" };

//Distance Array
var PTSD = { name:"PTSD" };

//Scale Distance Array
var PTSAD = { name:"PTSAD" };


//Read any array of depth 2 that is passed
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

/*
function ScalePTStoPTSA() {
  for (var key in PTS) {
    for (var koy in PTS[key]) {
      PTSA[key][koy] = ((PTS[key][koy] - POD[koy]) * scaleFactor) + POD[koy];
    }
  }
}
*/


function DistancePTStoPTSD() {
  t=0;
  for (var key in PTS) {
    for (var koy in PTS[key]) {
      t++;
      switch (t) {
        case 1:
          x = PTS[key][koy] - POD[koy];
          break;
        case 2:
          y = PTS[key][koy] - POD[koy];
          break;
      }

    }
    t=0;
    PTSA[key] = Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
  }
}

//Return distnce from a(rray)1 to Point Of Dilation
function ODistance(a1,print) {
  var a2 = {};
  for (var key in a1) {
    for (var koy in a1[key]) {
      switch (koy) {
        case "x":
          x = a1[key][koy] - POD[koy];
          break;
        case "y":
          y = a1[key][koy] - POD[koy];
          break;
      }

    }
    a2[key] = Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
  }
  if (print == true) {
    ReadPoints(a2);
  }
  return a2
}

PTSD = ODistance(preimage,false);
PTSAD = ODistance(PTSA,false);

console.log(/*\n*/"\n\n");  //  3 New lines

ReadPoints(preimage);

//ScalePTStoPTSA();

console.log(/*\n*/"\n\n");  //  3 New lines

ReadPoints(PTSA);
console.log(/*\n*/"");  //  1 New lines
ReadPoints(PTSAD);

// var Right = (g.at(d.x + 1, d.y) === "color grey");
// var Left = (g.at(d.x - 1, d.y) === "color grey");
// var Up = (g.at(d.x, d.y - 1) === "color grey");
// var Down = (g.at(d.x, d.y + 1) === "color grey");

// var move = 0;

// while ((d.orientation = "right") || (d.orientation = "down") || (d.orientation = "up")) {

//   if ((g.at(d.x + 1, d.y) === 0) && ((d.y === 0) || (d.y !== 19))) {
//     d.orient("right");
//     d.move();
//   } else if ((g.at(d.x + 1, d.y) !== 0) || (d.x !== 19) || (d.y === 0) || (g.at(d.x, d.y + 1) === 0)) {
//     d.orient("down");
//     d.move();
//   }
// }


while ((d.orientation = "right") || (d.orientation = "down") || (d.orientation = "up")) {

  if ((g.at(d.x + 1, d.y) === 0) && ((d.y === 0) || (d.y !== 19)) && (d.x !== 19)) {
    d.orient("right");
    d.move();
  } else if ((g.at(d.x + 1, d.y) !== 0) || (d.x !== 19) || (d.y === 0) || (g.at(d.x, d.y + 1) === 0)) {
    d.orient("down");
    d.move();
  }
}

// while (g.at(d.x, d.y + 1) === 0) {
//   d.orient("down");
//   d.move();
//   move = 2;
// }

// while (g.at(d.x - 1, d.y) === 0) {
//   d.orient("left");
//   d.move();
//   move = 3;
// }

// while (g.at(d.x, d.y - 1) === 0) {
//   d.orient("up");
//   d.move();
//   move = 4;
// }
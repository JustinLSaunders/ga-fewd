while ((d.x >= 0) && (d.x <= 19) && (d.y >= 0) && (d.y <= 19) && ((d.x === 19) || (g.at(d.x +1, d.y) !== "color green")) && ((d.x === 0) || (g.at(d.x - 1, d.y) !== "color green")) && ((d.y === 19) || (g.at(d.x, d.y + 1) !== "color green")) && ((d.y === 0) || (g.at(d.x, d.y - 1) !== "color green"))) {
  if ((d.orientation === "right") && (d.x !== 19) && (g.at(d.x + 1, d.y) === 0)) {
    d.orient("right");
    d.move();
  } else if ((d.orientation === "right") && ((d.y !== 0) && (g.at(d.x, d.y - 1) === 0))) {
    d.orient("up");
    d.move();
  } else if ((d.orientation === "right") && (d.y !== 19) && (g.at(d.x, d.y + 1) === 0)) {
    d.orient("down");
    d.move();
  } else if ((d.orientation === "down") && (d.y !== 19) && (g.at(d.x, d.y + 1) === 0)) {
    d.orient("down");
    d.move();
  }  else if ((d.orientation === "down") && (d.x !== 19) && (g.at(d.x + 1, d.y) === 0)) {
    d.orient("right");
    d.move();
  } else if ((d.orientation === "down") && (d.x !== 0) && (g.at(d.x - 1, d.y) === 0)) {
    d.orient("left");
    d.move();
  } else if ((d.orientation === "left") && (d.x !== 0) && (g.at(d.x - 1, d.y) === 0)) {
    d.orient("left");
    d.move();
  }  else if ((d.orientation === "left") && (d.y !== 0) && (g.at(d.x, d.y - 1) === 0)) {
    d.orient("up");
    d.move();
  } else if ((d.orientation === "left") && (d.y !== 19) && (g.at(d.x, d.y + 1) === 0)) {
    d.orient("down");
    d.move();
  } else if ((d.orientation === "up") && (d.y !== 0) && (g.at(d.x, d.y - 1) === 0)) {
    d.orient("up");
    d.move();
  } else if ((d.orientation === "up") && (d.x !== 19) && (g.at(d.x + 1, d.y) === 0)) {
    d.orient("right");
    d.move();
  } else if ((d.orientation === "up") && (d.x !== 0) && (g.at(d.x - 1, d.y) === 0)) {
    d.orient("left");
    d.move();
  }
}
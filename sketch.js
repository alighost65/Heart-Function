// ref: (P. Kuriscak, pers. comm., Feb. 12, 2006).
// https://mathworld.wolfram.com/HeartCurve.html
let r = 4;
let theta = 0;

function setup() {
  createCanvas(400, 400);
  background(200);
  noFill();
  stroke(0);
  strokeWeight(4);
}

function draw() {
  translate(width / 2, height / 2);
  drawHeart();
}

function drawHeart() {

  if (theta <= TWO_PI) {
    x = -r*(16 * sin(theta)**3);
    y = -r*(13 * cos(theta) - 5*cos(2*theta) - 2*cos(3*theta) - cos(4*theta));
    point(x, y);
    theta += 0.02;
  } else {
    theta = TWO_PI;
  }
}
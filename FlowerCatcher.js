// Flower Catcher
//Assigment 3, Question 4, Emma Stanley
function setup() {
  createCanvas(400, 400);
  // My flowers Highet, Width
  flowerHeight = 50;
  flowerWidth = 50;
  // My flowers X and Y and the size of my flower
  flowerX = 0;
  flowerY = 150;
  sizeFactor = 0.4;
  sunY = random();
  sunX = random(0, 300);
  speed = random(1, 6);
  sunIsFalling = false;
}

function draw() {
  // The background is skyblue with green grass made with a rectangle and a yellow sun made with an ellipse
  background("skyblue");
  fill("green");
  rect(0, 330, 400, 70);
  push();
  fill("white"); //clouds
  noStroke();
  ellipse(10, 30, 100);
  ellipse(80, 20, 150);
  ellipse(160, 15, 130);
  ellipse(300, 20, 140);
  ellipse(380, 40, 150);
  addSun(sunX, sunY, 1);
  addFlower(mouseX, flowerY, sizeFactor);
  pop();

  // My function that I am using mouseX to move it across the screen
  // addFlower(mouseX, flowerY, sizeFactor);
  //addSun(sunX, sunY, 50)
}
// My function that makes up my flower catcher
function addFlower(flowerX, flowerY, sizeFactor) {
  push();
  translate(flowerX, flowerY);
  scale(sizeFactor);
  stroke(5);
  // I'm using mouseIsPressed to change the color of the flowers petals from pink to red when the mouse is pressed down on
  if (mouseIsPressed) {
    fill("red");
  } else {
    fill("pink");
  }
  // ellispe making up the petals on the flower
  ellipse(180, 125, 70);
  ellipse(225, 130, 70);
  ellipse(240, 180, 70);
  ellipse(215, 230, 70);
  ellipse(160, 225, 70);
  ellipse(140, 150, 70);
  // the center of the flower that is made with ellipse and the stem of the flower that is made with a rectangle
  ellipse(135, 180, 70);
  fill("yellow");
  ellipse(190, 180, 70);
  fill("green");
  rect(180, 250, 10, 200);
  pop();
}
//my sun function 
function addSun(x, y, size) {
  noStroke();
  scale(size);
  fill("yellow");
  circle(sunX, sunY, 55);
  if (sunIsFalling) {
    sunY = sunY + speed;
  }
}
// to make the fun fall when mouse is pressed 
function mousePressed(x, y, size) {
  sunIsFalling = true;
}
 

function setup() {
  createCanvas(800, 800);
  
}

function draw() {
  background(50);
  // head 
  noStroke(); 
  fill(67, mouseY, mouseY); 
  ellipse(width / 2, 100, 150, 150);
  //eye
  noStroke();
  fill(0, random(1, 255), 0);
  ellipse(width / 2, 100, 35, 35);
  //body
  fill( mouseX, 3, mouseX);
  rect(width / 2 - 50, 150, 100, 400);
  //arms
  fill(mouseX, 50, mouseY);
  rect(width / 2 - 100, height / 2 - 150, 200, 75);
  fill(random (1, 255), random (1, 255), random(1, 255)); 
  ellipse(mouseX, mouseY, mouseY, mouseX);
  fill(0);
  ellipse(mouseX, mouseY, 50, 50);
}
  
function setup() {
  createCanvas(800, 400);
}

function draw() {
  if (mouseIsPressed){
    fill(0);
  }
  else{
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);

}
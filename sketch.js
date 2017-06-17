var bird;
function setup() {
  createCanvas(480, 640);
  bird = new Bird();
  ground = new Ground();
}

function draw() {
  background(0,0,0);
  bird.Move();
  bird.Render();
  ground.Render();
}


function keyPressed() {
  if(key == ' ') {
    // TODO:
    // WORKING BUT YOU CAN TRY TO IMPLEMENT SMTH BETTER
    bird.Jump();
  }
}

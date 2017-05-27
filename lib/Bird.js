function Bird() {

  // BIRD POSITION
  this.x = width/2;
  this.y = height/2;

  // ENVIRONMENT VARIABLES

  this.velocity = 0.4;
  this.speed = 0;

  this.birdImg = loadImage("http://i.imgur.com/UcuAy0W.png");

  this.Render = function() {
    image(this.birdImg, this.x, this.y);
  }

  this.Move = function() {
    if(this.y > ground.y-this.birdImg.height) {
      this.y = ground.y-this.birdImg.height;
      this.speed = 0;
    }
    else if (this.y < 0) {
      this.y = 0;
      this.speed = 0
    }
     else {
      this.speed += this.velocity;
      this.y += this.speed;
    }

  }
}

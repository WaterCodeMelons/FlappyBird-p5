function Bird() {

  // BIRD IMAGE
  this.birdImg = loadImage("http://i.imgur.com/UcuAy0W.png");

  // BIRD POSITION
  this.x = 40;
  this.y = height/2-this.birdImg.height;

  // ENVIRONMENT VARIABLES
  this.velocity = 0.6;
  this.speed = 0;

  this.Render = function() {
    image(this.birdImg, this.x, this.y);
  }

  this.Jump = function() {
    this.speed = -11;
  }

  this.Move = function() {
    if(this.y > 550-this.birdImg.height) {
      this.y = 550-this.birdImg.height;
      this.speed = 0;
    }
    else if (this.y < 0) {
      this.y = 0;
      this.speed = 0
    }
     else {
      this.speed += this.velocity;
      if(this.speed > 10)
        this.speed = 10;
      this.y += this.speed;
    }

  }
}

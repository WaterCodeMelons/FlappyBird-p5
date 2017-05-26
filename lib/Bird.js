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
    if(this.y > height-this.birdImg.height) {
      this.y = height-this.birdImg.height;
      this.speed = 0;

    // TODO:
    // ELSE IF this.y < 0

    } else {
      this.speed += this.velocity;
      this.y += this.speed;
    }

  }
}

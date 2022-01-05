//cardume de salmão
var x =0.0;
var angle = 0.0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(6);
}

function draw() {

  background(176,224,230);
  translate(0, height/2);
    while(x < width){
      var amplitude = height/4; 
      var y = sin(radians(angle)) * amplitude;
  
      fill(255,228,225);
      //noStroke();
      ellipse(x,y, 10,10);
      x+=10.0;
      angle+=10.0;
    }
  x = x % width;
}
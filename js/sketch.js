let angle = 0;
let colorChange = 0;
let avenir;

function preload() {
  avenir = loadFont('fonts/AvenirNextLTPro-Demi.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textFont(avenir);
  textSize(width/10);
  textAlign(CENTER,CENTER);
  
}

function draw() {
  background(55);

  
  directionalLight(255,255,255,0,0,-1)
  
  

  push();
  rotateX(angle);
  rotateY(angle);
  text(`${month()}-${day()}-${year()}`, 0, 0);
  fill((second()+colorChange)%255,(second()+colorChange/2)%255,second()*4);


  rotateX(-angle);
  rotateY(-angle);

  text(`${hour()%12}-${minute()}-${second()}`, 0,  height/4);
  pop();

  push();
  translate(-width/2, -height/2);
  textSize(16);
  stroke(255);
  text(`By Louis Roman`, width/12, height - height/15);
  pop();

  colorChange += 1;

  angle += 0.015;
}
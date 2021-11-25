let ground;
let lander;
var lander_img;
var bg_img;
var ob_img;
var meteor;


var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg_sur.png");
  ob_img = loadImage("image2.png");
}

function setup() {
  createCanvas(1500,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;

  ground = createSprite(500,300);
  ground.addImage("ground",bg_img);
  ground.velocityX = 3;
  ground.scale = 0.8;



  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  //image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  //fall down
  vy +=g;
  lander.position.y+=vy;

  if(ground.x > 1500){
     ground.x = ground.width/2
  }


  obstacles();
  drawSprites();
}

function obstacles(){
if(frameCount % 150 === 0) {
  meteor = createSprite(1000,Math.round(random(100,600)),50,50);
  meteor.addImage(ob_img);
  meteor.scale = 0.2;
  meteor.velocityX = -2
  meteor.rotationSpeed = 3
}

}




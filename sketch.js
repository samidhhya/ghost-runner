var tower,towerImg;
var climber,climberimg;
var ghost,ghostImg;
    var door,doorImg;
//var gamestate=PLAY;

function preload(){
  ghostImg=loadImage("ghost-standing.png");
  towerImg=loadImage("tower.png");
  doorImg=loadImage("door.png");
  climberImg=loadImage("climber.png");
  //ghostSound=loadSound("spook.wav")
}

function Setup(){
  createCanvas(600,600);
  ghost=createSprite(200,200,10,40);
  ghost.addImage("ghost",ghostImg);
  //ghost.scale=0.4;
  tower=createSprite(200,200,10,40);
  tower.addImage("tower",towerImg);
  
}

function draw(){
  background(0);
  drawSprites();
}
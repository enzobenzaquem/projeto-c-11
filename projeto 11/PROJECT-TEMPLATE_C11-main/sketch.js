var sea, seaImg
var ship, shipImg

function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")

}

function setup(){
  createCanvas(400,400);
  background("blue");

  // movendo o fundo
  sea = createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale = 0.25;


  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale = 0.25;

}

  function draw() {

  background(0);
  sea.velocityX = -3;


  // código para redefinir o fundo
  if(sea.x , 0) {
  sea.velocityX - sea.width/8;
  }

  drawSprites();
  } 
  
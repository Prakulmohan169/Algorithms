var fixedRect,movingRect;
var object1,object2;


function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(200,200,50,50);
  fixedRect.shapeColor="green";
  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="green";
  object1=createSprite(200,500,50,50);
  object1.shapeColor="blue";
  object2=createSprite(600,500,50,50);
  object2.shapeColor="yellow";
  object1.velocityX=+3;
  object2.velocityX=-3;
}

function draw() {
  background(0); 
  console.log(movingRect.x-fixedRect.x);
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
    && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
  }
  else{
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
  }
  if(object1.x-object2.x<object1.width/2+object2.width/2
    && object2.x-object1.x<object1.width/2+object2.width/2){
    object1.velocityX=object1.velocityX*(-1);
    object2.velocityX=object2.velocityX*(-1);
    }
  if(object1.y-object2.y<object1.height/2+object2.height/2
    && object2.y-object1.y<object1.height/2+object2.height/2){
    object1.velocityY=object1.velocityY*(-1);
    object2.velocityY=object2.velocityY*(-1);
    }
  drawSprites();
}
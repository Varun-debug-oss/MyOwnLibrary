var fixedRect, movingRect;
var gameobject1;
function setup() {
  createCanvas(1200,400);
  fixedRect = createSprite(600, 200, 30, 80);
  fixedRect.shapeColor = "Green";
  movingRect = createSprite(300,100,50,30);
  movingRect.shapeColor = "Green";
  gameobject1 = createSprite(200,200,50,50);
}

function draw() {
  background(0);
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  if(isTouching(movingRect, gameobject1)){
    movingRect.shapeColor = "blue";
    gameobject1.shapeColor = "blue";
  }
else{
  movingRect.shapeColor = "green";
  gameobject1.shapeColor = "green";
} 
  drawSprites();
}
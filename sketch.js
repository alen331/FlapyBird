var flapy, flapyImg;
var pipe1I, pipe2I, pipe1, pipe2;
var p1G, p2G;
var backImg, back;
var score = 0;
var PLAY=1;
var END=0;
var gameState = PLAY;
var gameOver, gameOverI;

function preload() {
  flapyImg = loadImage("PngItem_1842460.png");
  backImg = loadImage("save3.png");
  gameOverI = loadImage("game_over_PNG42.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  back = createSprite(width-420, height-350);
  back.addImage(backImg);
  back.scale = 6.5;
   
  flapy = createSprite(width-700, height-350, 20, 20);
  flapy.addImage(flapyImg);
  flapy.scale=0.2;
  
  p1G = new Group();
  p2G = new Group();
}

function draw() {
  background(220);
  
  if(keyDown("space")|| touches.length>0){
  flapy.velocityY = -10;
    touches = [];
  }
  
  flapy.velocityY = flapy.velocityY +0.8;
 
   if(gameState === PLAY){
   pipe();
     
     flapy.visible = true;
}
  
  if(flapy.isTouching(p1G)|| flapy.isTouching(p2G)){
  gameState = END;
  }
  
 else if(gameState === END){
  reset();
        gameOver = createSprite(400, 350, 20, 20);
  gameOver.addImage(gameOverI);
  gameOver.scale = 0.5;
  }
  
  if(gameState === END&& keyDown("space")|| touches.length>0){
  gameState = PLAY;
  } 
  
  drawSprites();
}

function pipe() {
  
  if(frameCount % 120 == 0){
  pipe1 = createSprite(width-2, height-550, 50, 250);
    pipe1.shapeColor = "lightgreen"
    pipe1.velocityX = -5;
    pipe1.y = Math.round(random(height-580, height-680));
    p1G.add(pipe1);
  }
  
  if(frameCount % 75 == 0){
    pipe2 = createSprite(width-2, height-150, 50, 250);
    pipe2.shapeColor = "lightgreen"
    pipe2.velocityX = -5;
    pipe2.y = Math.round(random(height-150, height-200));
    p2G.add(pipe2);
  }
}

function reset(){
flapy.velocityY = 0;
  p1G.destroyEach();
  p2G.destroyEach();
  p1G.setVelocityEach(0);
  p2G.setVelocityEach(0);
  flapy.visible = false;
}

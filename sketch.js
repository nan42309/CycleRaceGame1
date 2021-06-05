var path,mainCyclist;
var pathImg,mainRacerImg1,mainRacerImg2;
var pinkCyclist,pinkCyclistimage,PCgroup;

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;

function preload(){
  pathImg = loadImage("images/Road.png");
  mainRacerImg1 = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  mainRacerImg2= loadImage("images/mainPlayer3.png");
  pinkCyclistimage=loadAnimation("images/opponent1.png","images/opponent2.png");

}

function setup(){
  
createCanvas(500,300);
  
// Moving background
path=createSprite(100,150);
path.addImage(pathImg);
path.velocityX = -5;

//creating boy running
mainCyclist  = createSprite(70,150,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.scale=0.07;


PCgroup=new Group();
  
  
}

function draw() {
  background(0);

  createPink();
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,350,30);
  
  if(gameState===PLAY){
   distance=distance+Math.round(getFrameRate()/60)
   mainCyclist.y = World.mouseY;
  
   edges= createEdgeSprites();
   mainCyclist .collide(edges);
  
  //code to reset the background
  if(path.x < 0 ){
    path.x = width/2;
  }

  if(PCgroup.isTouching(mainCyclist)){
    gameState=END
  }

  else if (gameState===END){
    mainCyclist.addImage(mainRacerImg2);
    path.velocity=0
    if(keyDown("up")){
    reset();
    }
    text("Press up arrow to restart");

  }
    
 }
}

function createPink (){
    if(frameCount%60===0){
      pinkCyclist=createSprite(60,40,20,20);
      pinkCyclist.addAnimation("PinkRunning",pinkCyclistimage);  
      pinkCyclist.scale=0.05;
      pinkCyclist.lifetime=100;
      PCgroup.add(pinkCyclist);
    }
}

function reset(){
  gameState=PLAY
  gameOver.visible=false
  mainCyclist.addAnimation(mainRacerImg3)
  PCgroup.destroyEach();
  PCfall=createSprite(60,40,20,20);
  PCfall.addAnimation
}
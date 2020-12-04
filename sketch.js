const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;

var gameState ="play";
var boy;
function preload(){
  playimage=loadImage("k.jpg");
boyimage=loadImage("stand.png")
boyimage1=loadImage("throw.png");

}
  


function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;


  platform1=new Platform(0,height,width/2,300);
  platform2=new Platform(width,height,width/2,250);

/* backgroundimg=createSprite(width/2,height/2,width,height);
 backgroundimg.shapeColor="yellow"
 
  play=createSprite(width/2,height/2)
  play.addImage("play",playimage);

boy = createSprite(width/2  +600,height/2  +170,);
boy.addImage("boy",boyimage);
boy.addImage("boythrow",boyimage1);
boy.scale=0.4;
boy.visible=false;*/

stone1=new stone(150,height-190);
stone2=new stone(140,height-180);
stone3=new stone(130,height-170);
stone4=new stone(140,height-180);
stone5=new stone(140,height-180);
stone6=new stone(140,height-180);
stone7=new stone(140,height-180);

stone8=new Box(width-200,height-200,40,40)


slingShot=new SlingShot(stone8.body,{x:width-200,y:height-200})

}

function draw() {
  background(255,255,255);  
 
  Engine.update(engine);
 /* if(mousePressedOver(play)){
    play.visible=false;
    backgroundimg.visible=false;
    gameState ="play";
  }*/

if(gameState==="play"){
//boy.visible=true;
platform1.display();
platform2.display();
stone1.display();
stone2.display();
stone3.display();
stone4.display();
stone5.display();
stone6.display();
stone7.display();
stone8.display();
slingShot.display();

}

  drawSprites();
}
/*function keyPressed(){
  if(keyCode===UP_ARROW && gameState==="play"){
    boy.changeImage("boythrow",boyimage1);
  }
}*/

function mouseDragged(){
  Matter.Body.setPosition(stone8.body,{x: mouseX , y: mouseY})
}

function mouseReleased(){
  slingShot.fly();
}


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin,dustbinImage;
var ground;
var ball,ballImage;
function preload()
{
	
}

function setup() {
	createCanvas(800,600);

	engine = Engine.create();
	world = engine.world;
	
	ballImage=loadImage("paper.png");
    dustbinImage=loadImage("dustbingreen.png");

	//Create the Bodies Here.
	dustbin=createSprite(600,455,140,10);
	dustbin.addImage(dustbinImage);
	dustbin.scale=0.3;
	
	ground=createSprite(400,510,800,10);
	ground.shapeColor=color(100,0,100);

ball=createSprite(100,490,10,10);
ball.addImage(ballImage);
ball.scale=0.2;

	Engine.run(engine);
  }
function draw() {
  rectMode(CENTER);
  background(250);
   
  drawSprites();}
 
  function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.bdy.position,{x:85,y:-85});

	 }}
 
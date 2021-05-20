
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;
var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper();
	ground= new Ground();

	dustbin1 = new Dustbin(650,660,150,15);
	dustbin2 = new Dustbin(575,640,15,60);
	dustbin3 = new Dustbin(725,640,15,60);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
	

	dustbin1.display();
	dustbin2.display();
	dustbin3.display();

	ground.display();

  drawSprites();
  
}

function keyPressed(){

if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paper.body,paper.body.position,{x:10,y:-10})

}

}



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObj1,bobObj2,bobObj3,bobObj4,bobObj5
var rope1,rope2,rope3,rope4,rope5
var roof1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof1 = new Roof(400,200,2,20);
    //roof1.shapeColor = "red"


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof1.display();
  
  drawSprites();
 
}




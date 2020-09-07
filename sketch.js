
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
    roof1 = new Roof(450,200,600,20);

    bobObj1 = new Bob(250,350,2);
    bobObj2 = new Bob(350,350,2);
    bobObj3 = new Bob(450,350,2);
    bobObj4 = new Bob(550,350,2);
    bobObj5 = new Bob(650,350,2);

    rope1 = new Rope(bobObj1.body,roof1.body,200,0)   

    //roof1.shapeColor = "red"


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof1.display();

  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();

  roof1.display();

  drawSprites();
 
}




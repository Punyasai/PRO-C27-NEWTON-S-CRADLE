const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var ropeObject1,ropeObject2,ropeObject3,ropeObject4,ropeObject5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	bobDiameter=40;

	




	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject=new Roof(400,220,500,50)

	bobObject1=new Bob(300,450,50);
	bobObject2=new Bob(350,450,50);
	bobObject3=new Bob(400,450,50);
	bobObject4=new Bob(450,450,50);
	bobObject5=new Bob(500,450,50);

	rope1=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0)

	rope2=new Rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0)
	rope3=new Rope(bobObject3.body,roofObject.body,0, 0)
	rope4=new Rope(bobObject4.body,roofObject.body,bobDiameter*1, 0)
	rope5=new Rope(bobObject5.body,roofObject.body,bobDiameter*2, 0)

	


	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  
  
  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  

  drawSprites();
  
  
  


  
 
}

function keyPressed(){

	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:75,y:-75});

	}

}




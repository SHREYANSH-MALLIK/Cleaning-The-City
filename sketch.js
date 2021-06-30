
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);

	paper = new Paper(300,300,30,30)
	ground1 = new Ground(900,-500,1000,20)
	ground2 = new Ground(900,-500,20,120)
	ground3 = new Ground(900,-600,10,100)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  ground1.display();
  ground2.display();
  ground3.display();
  Engine.update(engine);

  drawSprites();
 
}

function keyPressed() {
	if (keyCOde === UP_ARROW) {
		papper.Body.applyForce(body, position, force)
	}
}

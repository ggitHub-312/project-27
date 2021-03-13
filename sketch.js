
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1, bob2, bob3, bob4, bob5;
var ground;
var link1,link2,link3,link4,link5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(200,500,100)
	bob2 = new Bob(295,500,100)
	bob3 = new Bob(390,500,100)
	bob4 = new Bob(485,500,100)
	bob5 = new Bob(580,500,100)

	ground = new Ground(400,200,475,20)

	link1 = new Newclass(bob1.body,ground.body,-200,0)
	link2 = new Newclass(bob2.body,ground.body,-100,0)
	link3 = new Newclass(bob3.body,ground.body,0,0)
	link4 = new Newclass(bob4.body,ground.body,100,0)
	link5 = new Newclass(bob5.body,ground.body,200,0)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");


  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  ground.display()
  
  link1.display()
  link2.display()
  link3.display()
  link4.display()
  link5.display()

  




 
}


function keyPressed (){
if (keyCode===UP_ARROW){
Body.applyForce(bob1.body,bob1.body.position, {x:-150 , y: -150} )

}


if (keyCode ===DOWN_ARROW){
	Body.applyForce(bob5.body,bob5.body.position, {x:150 , y: -150} )
}
}

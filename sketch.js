const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ground = new Ground(60,height,1500,20, "brown");
	bucket1 = new Dustbin(600,height-20,150,20, "white");
	bucket2 = new Dustbin(520,height-60,20,100, "yellow");  
	bucket3 = new Dustbin(670,height-60,20,100, "blue");

//	circle = new circle(670,height-60,20);
	paperObject = new Paper(400,400,20);
	//Matter.Bodies.circle(500,500,20);

}


function draw() {
  rectMode(CENTER);
  background(230);
  drawSprites();
  ground.display();
  bucket1.display();
  bucket2.display();
  bucket3.display();
  paperObject.display();
}

function keyPressed() {
	console.log("HI");
	if (keyCode === 38) {	
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:85,y:-85});
	}
}




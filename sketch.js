var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,bd1,bd2,bd3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	var act ={
	isStatic:true 	
	}
	bd1body=Bodies.rectangle(width/2-100,610,20,100,act);
	bd2body=Bodies.rectangle(width/2+10,650,200,20,act);
	bd3body=Bodies.rectangle(width/2+120,610,20,100,act);
	World.add(world,bd1body);
	World.add(world,bd2body);
	World.add(world,bd3body);
	 bd1=createSprite(bd1body.position.x,bd1body.position.y,20,100);
	 bd2=createSprite(bd2body.position.x,bd2body.position.y,200,20);
	 bd3=createSprite(bd3body.position.x,bd3body.position.y,20,100);
	bd1.shapeColor="red"	
	bd2.shapeColor="red"
	bd3.shapeColor="red"
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic( packageBody, false);
    
  }
}




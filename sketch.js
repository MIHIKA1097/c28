
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy,boyImage;

var ground1,tree1;
var mango1,mango2,mango3;
function preload()
{
	boyImage=loadImage("boy.png")
}

function setup() {
	createCanvas(1200,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
boy=createSprite(1000,450,20,20)
boy.addImage(boyImage)
boy.scale=0.1
	Engine.run(engine);
 ground1= new ground(800,500,2400,20);
 tree1=new tree(200,300,10,20);
  //stone1=new stone(800,500,20,20);
  mango1=new mango(210,250,5)
  mango2=new mango(204,150,5)
  mango3=new mango(100,210,6)
}


function draw() {
  rectMode(CENTER);
  background("white");
 ground1.display();
  tree1.display();
  //stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  stone.fly()
}

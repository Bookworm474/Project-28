
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var tree, stone1, ground, launcher;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new Mango(1000,100,30);
	mango2 = new Mango(900,200,30);
	mango3 = new Mango(1050,150,30);
	mango4 = new Mango(1200,200,30);
	mango5 = new Mango(1100,100,30);
	mango6 = new Mango(975,225,30);
	mango7 = new Mango(1075,225,30);

	tree = new Tree(1050,580);
	ground = new Ground(width/2,600,width,20);
	
	Engine.run(engine);

	stone1 = new Stone(260,500);
	launcher = new Launcher(stone1.body,{x:240, y:420});
}

function draw() {

  background(230);
  Engine.update(engine);

  //Add code for displaying text here!
  image(boy ,200,340,200,300);

  detectCollision(stone1, mango1);
  detectCollision(stone1, mango2);
  detectCollision(stone1, mango3);
  detectCollision(stone1, mango4);
  detectCollision(stone1, mango5);
  detectCollision(stone1, mango6);
  detectCollision(stone1, mango7);

  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  ground.display();
  stone1.display();
  launcher.display();
}

function mouseDragged(){		
	Matter.Body.setPosition(stone1.body,{x:mouseX, y:mouseY});
}
  
function mouseReleased(){
	launcher.fly();
}

function keyPressed(){
	if (keyCode === 32){
		launcher.attach(stone1.body);
	}
}

/*function detectCollision(object1, object2){
	obj1  = object1.body.position;
	obj2 = object2.body.position;
	var distance = dist(obj1.x,obj1.y, obj2.x,obj2.y);
	if (distance <= object1.r+object2.r){
		Matter.Body.setStatic(object2.body, false);
	}
}*/

function detectCollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	//console.log(distance)
   // console.log(lmango.r+lstone.r)
		if(distance<=lmango.r+lstone.r)
	  {
		//console.log(distance);
		  Matter.Body.setStatic(lmango.body,false);
	  }
  
	}
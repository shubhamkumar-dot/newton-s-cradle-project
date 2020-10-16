const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine,world;
var bob;
var roof;
var chain;

function setup() {
	createCanvas(800, 700);

    engine = Engine.create();
    world = engine.world;


    
	bob1 = new Bob(300,400,20);
	bob2 = new Bob(340,400,20);
	bob3 = new Bob(380,400,20);
	bob4 = new Bob(420,400,20);
	bob5 = new Bob(460,400,20);
	
  roof1 = new Roof(380,40,190,30);
  roof2 = new Roof(300,40,190,30);
  roof2.visible = false;
  roof3 = new Roof(420,40,100,30);
  roof3.visible = false;
  roof4 = new Roof(340,40,100,30);
  roof4.visible = false;
  roof5 = new Roof(460,40,100,30);
  roof5.visible = false;


  chain1 = new Chain(bob2.body,roof4.body);

  chain2 = new Chain(bob1.body,roof2.body);
  
  chain3 = new Chain(bob3.body,roof1.body);

  chain4 = new Chain(bob4.body,roof3.body);
  
	chain5 = new Chain(bob5.body,roof5.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof1.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:100});
  }
}




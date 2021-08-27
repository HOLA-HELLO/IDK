
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(400,250,230,20);
	bob1 = new bob(320,575,40);
	bob2 = new bob(360,575,40);
	bob3 = new bob(400,575,40);
	bob4 = new bob(440,575,40);
	bob5 = new bob(480,575,40);
	bob6 = new bob(200,200,40)
	bob11 = new bob(320,575,40);
	bob22 = new bob(360,575,40);
	bob33 = new bob(400,575,40);
	bob44 = new bob(440,575,40);
	bob55 = new bob(480,575,40);
	bob66 = new bob(200,200,40)
	bob111 = new bob(320,575,40);
	bob222 = new bob(360,575,40);
	bob333 = new bob(400,575,40);
	bob444 = new bob(440,575,40);
	bob555 = new bob(480,575,40);
	bob666 = new bob(200,200,40)
	sanfo = new roof(600,599,801,10);
	rope1=new rope(bob1.body,roofObject.body,-80, 0);


	rope5=new rope(bob5.body,roofObject.body,80,0);
	rope6 = new rope(bob6.body,roofObject.body,180,0);
	rope11=new rope(bob11.body,roofObject.body,-80, 0);


	rope55=new rope(bob55.body,roofObject.body,80,0);
	rope66 = new rope(bob66.body,roofObject.body,180,0);
	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  rope1.display();
  rope6.display()


  rope5.display();

  
  rope11.display();
  rope66.display()


  rope55.display();
  sanfo.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  bob11.display();
  bob22.display();
  bob33.display();
  bob44.display();
  bob55.display();
  bob66.display();
  bob111.display();
  bob222.display();
  bob333.display();
  bob444.display();
  bob555.display();
  bob666.display();
  
  
}

function keyPressed(){

	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(bob1.body,bob1.body.position,
			                            {x:-50,y:-45});

	}

}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope;
var rope1,rope2,rope3,rope4,rope5;
function setup() {
createCanvas(800, 400);
engine = Engine.create();
world = engine.world;
roof = new Roof(400,150,200,25);
bob1 = new Bob(320,300,20);
rope1 = new Rope(bob1.body,roof.body,-80,12);
bob2 = new Bob(360,300,20);
rope2 = new Rope(bob2.body,roof.body,-40,12);
bob3 = new Bob(400,300,20);
rope3 = new Rope(bob3.body,roof.body,0,12);
bob4 = new Bob(440,300,20);
rope4 = new Rope(bob4.body,roof.body,40,12);
bob5 = new Bob(480,300,20);
rope5 = new Rope(bob5.body,roof.body,80,12);
roof = new Roof(400,150,200,25);
Engine.run(engine);
}
function draw() {
background(200);
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
roof.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
drawSprites();
}
function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-15,y:-15});
}
}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground;
var stand1, stand2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15,
block16
var ball, polygonImage;
var slingshot;
function preload(){
polygonImage = loadImage("polygon.png");
}

function setup(){
createCanvas(900, 800);
engine = Engine.create();
world = engine.world();
Engine.run(engine);
ground = new ground();
stand1 = new stand(700, 200, 200, 10);
stand2 = new stand(400, 300, 250, 10);
//level one for stand one
block1 = new block(300, 275, 30, 40);
block2 = new block(330, 275, 30, 40);
block3 = new block(360, 275, 30, 40);
block4 = new block(390, 275, 30, 40);
block5 = new block(420, 275, 30, 40);
block6 = new block(450, 275, 30, 40);
block7 = new block(480, 275, 30, 40);
//level two 
block8 = new block(330, 235, 30, 40);
block9 = new block(360, 235, 30, 40);
block10 = new block(390, 235, 30, 40);
block11 = new block(420, 235, 30, 40);
block12 = new block(450, 235, 30, 40);
//level three
block13 = new block(360, 195, 30, 40);
block14 = new block(390, 195, 30, 40);
block15 = new block(420, 195, 30, 40);
//top
block16 = new block(390, 155, 30, 40);
//level one for stand two
block1 = new block(640, 175, 30, 40);
block2 = new block(670, 175, 30, 40);
block3 = new block(700, 175, 30, 40);
block4 = new block(730, 175, 30, 40);
block5 = new block(760, 175, 30, 40);
//level two for stand two
block6 = new block(670, 135, 30, 40);
block7 = new block(700, 135, 30, 40);
block8 = new block(730, 135, 30, 40);
//top
block9 = new block(700, 95, 30, 40);

ball = Bodies.circle(50, 200, 20);
World.add(world, ball);

slingshot = new slingshot(this.ball, {x: 100, y: 200});
}

function draw(){
background("black");
textSize(15);
fill("white")
text("Drag the hexagonal stone and release it, to launch it towards the block", 100, 50);
ground.display();
stand1.display();
stand2.display();
strokeWeight(2);
stroke(15);
fill("sky blue");
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
fill("pink");
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
fill("turquoise");
block13.display();
block14.display();
block15.display();
fill("gray");
block16.display();
fill("sky blue");
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
fill("turquoise");
block6.display();
block7.display();
block8.display();
fill("pink");
block9.display();
imageMode(CENTER);
image(polygonImage, ball.position.x, ball.position.y, 40, 40);
slingshot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x: mouseX, y: mouseY});
}
function mouseReleased(){
    slingshot.fly();
}
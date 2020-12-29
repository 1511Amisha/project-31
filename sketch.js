const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var paricles=[];
var pinkos=[];
var divisions=[];
var divisionHeight=300;
var ground;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  
  engine=Engine.create();
  world = engine.world;

  ground=new Ground(200,200,750,20);

  for(var k=0; k<=width; k=k+80 ){
    divisions.push(newDivisions(k,height-divisionHeight/2,10,divisionHeight));
  }
 
  for(var j=0 ; j<=width; j=j+50){
    pinkos.push(new Pinko(j,75,10));
  }

  for(var j=15 ; j<=width-10; j=j+50){
    pinkos.push(new Pinko(j,175,10));
  }

  for(var j=0 ; j<paricles.length; j++){
    particles[j].display();

  }

  for(var k=0 ; k<divisions.length; k++){
   divisions[k].display();

  }
 




}

function draw() {
  background(255,255,255);  
  drawSprites();
  ground.display();
}
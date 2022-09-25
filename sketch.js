const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world,canvas;
var bgimg;
var bird,touch;
var br,br2;
var test;
var ob;


function preload(){
    bgimg = loadImage("bg.jpg")
    bimg = loadImage("bird.png")
}
function setup(){
canvas =  createCanvas(windowWidth,windowHeight);

engine = Engine.create();
world = engine.world;

bird = new Bird(200,100,200,150);
br = new Barrier(600,500,10000,15)
br2 = new Barrier(600,-290,1000,10)
ob = new Obstacle(800,500,200,500)


}


function draw(){
  background(bgimg);
 
  Engine.update(engine);
 br.display();
  bird.display();
 ob.display();
  
   bird.fly();
   ob.move();
  
 colide()
 collide2()
 

 drawSprites();
}
function colide(){
  if (bird !== undefined && br !== undefined &&  br !== undefined) {
    var collision = Matter.SAT.collides(bird.body, br.body);
    

    if (collision.collided) {
        swal(
          {
            title: `Game Over!!!`,
            text: "Thanks for playing!!",
            imageUrl:
              "https://preview.redd.it/vxgdzt3eecr41.jpg?auto=webp&s=7449dc00d6d0558b3352107b916a66739f53ba72",
            imageSize: "150x150",
            confirmButtonText: "Play Again"
          },
          function(isConfirm) {
            if (isConfirm) {
              location.reload();
            }
          }
        );
      }
      
    
    }
    }
  function collide2(){
    if (bird !== undefined && br2 !== undefined) {
      var collision = Matter.SAT.collides(bird.body, br2.body);
      if (collision.collided) {
        swal(
          {
            title: `Game Over!!!`,
            text: "Thanks for playing!!",
            imageUrl:
              "https://preview.redd.it/vxgdzt3eecr41.jpg?auto=webp&s=7449dc00d6d0558b3352107b916a66739f53ba72",
            imageSize: "150x150",
            confirmButtonText: "try again"
          },
          function(isConfirm) {
            if (isConfirm) {
              location.reload();
            }
          }
        );
      }
  
    
    }
  }
   
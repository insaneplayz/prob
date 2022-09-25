class Obstacle{
    constructor(x,y,w,h){
        var options = {
            isStatic:true,
            
        }
         this.body = Bodies.rectangle(x,y,w,h,options);
        
         this.w=w;
         this.h=h;
         this.image = loadImage("obstacles.png")

  
         World.add(world, this.body)
      }
      
       
      display() {
          var pos = this.body.position;
          var angle = this.body.angle;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.image, 50, 200, this.w, this.h);
          pop();
        }
      move(){
     
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body,{x:-2,y:-0.3})
     }
   
}
 
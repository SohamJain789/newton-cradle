class Rope{
      constructor(bodyA,bodyB,offsetX,offsetY){
      this.offsetX = offsetX;
      this.offsetY = offsetY;
      //specify the 2 bodies which will be constrained in the options 
      var options = {
      bodyA:bodyA,
      bodyB:bodyB,
      //stiffnes is the flexibility with which the bodies can move 
      //give a small value to make them move easily 
      stiffness:0.04,
      length:10,
      pointB:{x:this.offsetX, y:this.offsetY}
      }
      //create constraint with the options and then add it to the world
      this.chain = Constraint.create(options);
      World.add(world,this.rope);

      }
       display(){
      
       var pointA = this.chain.bodyA.position;
       var pointB = this.chain.bodyB.position;
       strokeWeight(4);
       line(pointA.x,pointA.y,pointB.x,pointB.y);


       }

}
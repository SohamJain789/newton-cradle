class Roof {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      rectMode(CENTER);
      translate(pos.x,pos.y);
      fill("red");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };
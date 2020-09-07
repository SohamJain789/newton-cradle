class Bob {
constructor(x,y,radius){
    var options = {
    
    isStatic:true,
    restitution:0.3,
    friction:0.5,
    density:1.2
}
this.x=x;
this.y=y;
this.radius = 5;
this.body = Matter.Bodies.circle(this.x,this.y,this.radius/2,options);


World.add(world,this.body);

}
display(){
var pos =this.body.position;

push();
translate(pos.x,pos.y);

fill("white");
ellipseMode(RADIUS);

ellipse(0,0,this.r,this.r);
pop();
} 
}

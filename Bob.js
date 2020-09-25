class Bob {
constructor(x, y,radius) {
var options = {
isStatic:false,
restitution:0.8,
friction:0.8,
density:1
}
this.radius = radius;
this.x = x;
this.y = y;
this.body = Bodies.circle(this.x, this.y,this.radius/2, options);
World.add(world, this.body);
}
display(){
var pos =this.body.position;
push();
var angle = this.body.angle;
translate(pos.x,pos.y);
ellipseMode(RADIUS);
fill("blue");
strokeWeight(2);
ellipse(0,0, this.radius,this.radius);
pop();
}
};  
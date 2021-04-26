class Ball{
constructor(x,y,radius){
var option={
restitution:0.9,
density:1,
friction:0.01

}
this.body=Matter.Bodies.circle(x,y,radius,option);
this.radius=radius;
Matter.World.add(world,this.body);
}
show(){
push();
translate(this.body.position.x,this.body.position.y)
rotate(this.body)
ellipseMode(RADIUS);
ellipse(0,0,this.radius,this.radius)
pop ();
}


}
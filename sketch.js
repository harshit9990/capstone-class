var engine,world,ground,box,slingshot,ball;



function setup() {
  createCanvas(2600,800);
  engine=Matter.Engine.create()
  world=engine.world;
  ground=new Ground(1300,750,2600,30)
ball=new Ball(500,400,50)
box=new Box(1000,280,70,70)
box2=new Box(1000,280,70,70)
box3=new Box(1000,280,70,70)
box4=new Box(1000,280,70,70)
box5=new Box(1000,280,70,70)
box6=new Box(1070,280,70,70)
box7=new Box(1070,280,70,70)
box8=new Box(1070,280,70,70)
box9=new Box(1070,280,70,70)
box10=new Box(1070,280,70,70)
box11=new Box(1070,280,70,70)
box12=new Box(1000,280,70,70)
box13=new Box(1000,280,70,70)
box14=new Box(1070,280,70,70)
 slingshot=new Slingshot(ball.body,{x:500,y:600})



}


function draw() {
  background(0);  
  Matter.Engine.update(engine)
  ground.show()
  ball.show()
  
box.show()
box2.show()
box3.show()
box4.show()
box5.show()
box6.show()
box7.show()
box8.show()
box9.show()
box10.show()
box11.show()
box12.show()
box13.show()
box14.show()
slingshot.show()

}


function mouseDragged(){
  
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  }

  
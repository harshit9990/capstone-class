class Box{
    constructor(x,y,width,height){
        var option={
        restitution:0.9,
        density:0.04,
        friction:0.01
        
        }
        this.body=Matter.Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;
        Matter.World.add(world,this.body);
        }
        show(){
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        fill ("red")
       rect(0,0,this.width,this.height)
        
        pop ();
        }
        
        
        }   
    


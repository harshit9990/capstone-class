class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Matter.Constraint.create(options);
          Matter.World.add(world, this.sling);
     }
     show(){
        
        
       
            push();
            strokeWeight(5);
            stroke(255);
         fill ("blue");
            pop();
        }
    }
    
    
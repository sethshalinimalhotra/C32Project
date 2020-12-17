class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        this.chain = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.chain);
    }

    display(){
        
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke("purple");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            }
            noStroke();
    }
    
    fly(){
        this.chain.bodyA = null;
        
    }
    attach(body){
        this.chain.bodyA = body;
    }

    
}
  class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.05,
            'friction':1.0,
            'density':0.3
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibilty = 225;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        if(this.body.speed < 5){
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0, 0, this.width, this.height);
          pop();
        }
        else
        {
          World.remove(world,this.body);
          push();
          this.visibilty = this.visibilty-5;
          pop();

        }
        
      }
      score(){
        if(this.visibilty < 0 && this.visibilty> -105){
          score ++;
        }
      }
      
}  ;
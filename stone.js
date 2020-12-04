class stone{
    
    constructor(x,y){

      var  options={
            restitution:0.5,
            friction:1,
            density:0.5
        }

        this.body=Bodies.rectangle(x,y,180,80,options);
        this.width = 180;
        this.height = 80;
        this.image = loadImage("stone.png");
        World.add(world,this.body)
    }
    display(){
        var angle = this.body.angle;
        push();
        if(this.body.speed<5){
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        }
        else{
          World.remove(world,this.body);
        }
        pop();
      }
    
}
class BaseClass{

    constructor(x,y,width,height,angle){
        var options={
            'restitution':0.8,
            
            
        }
         this.body=Bodies.rectangle(x,y,width,height,options);

         this.width=width;
         this.height=height;
        this.image=loadImage('sprites/base.png');
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        angleMode(RADIANS);
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
        pop();
       
    }
};
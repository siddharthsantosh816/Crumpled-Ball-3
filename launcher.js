class Launcher {

constructor(body1,point){
    var options={
        bodyA:body1,
        pointB:point,
        length:30,
        stiffness:0.01,
    }
    
    this.Launcher=Matter.Constraint.create(options);
    World.add(world,this.Launcher);
   // this.bodyA=body1;
   // this.pointB=point;
    //console.log(this.Launcher)
    
}

  fly(){
     this.Launcher.bodyA=null;
  }

display(){

  if (this.Launcher.bodyA){
  var pointA=this.Launcher.bodyA.position;
  var pointB=this.Launcher.pointB;
  strokeWeight(3)
  line(pointA.x,pointA.y,pointB.x, pointB.y);
  }
}

}
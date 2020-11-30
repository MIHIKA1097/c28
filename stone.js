class stone{
    
constructor(x,y,r){
var options={
    isStatic:true,
    restitution:0,
    friction:1,
    density:1.2
}

this.body=Bodies.circle(x,y,r,options)
this.r=r;
this.x=x;
this.y=y;
this.image=loadImage("stone.png")
World.add(world,this.body);
}
display(){
  var pos=this.body.position
imageMode(CENTER) ;
  image(this.image,pos.x,pos.y,this.r)     
}
}
fly(){
  this.stone=null
}
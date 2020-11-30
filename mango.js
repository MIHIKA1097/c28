class mango{
    constructor(x,y,r){
    var options={
        isStatic:true,
        restitution:0,
        friction:1    
    }
    this.image=loadImage("mango.png")
    this.body=Bodies.circle(x,y,r,options)
    this.r=r;
    this.x=x;
    this.y=y;
    World.add(world,this.body);
    }
    display(){
         var pos=this.body.position
         imageMode(CENTER) ;
        image(this.image,pos.x,pos.y,50,50)        
    }
    
    
    
    }
    
class Pinko{
    constructor(x,y,radius){
        var options={
            friction:0.1,
            density:1.0,
            isStatic:true 
             }
             this.body=Bodies.circle(x,y,radius,options);
             this.radius=radius;
             World.add(world,this.body)

    }
    display(){
        var pos= this.body.position;
        ellipseMode(CENTER);
        fill("white")
        ellipse(pos.x,pos.y,this.radius);
    }
}
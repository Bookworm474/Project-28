class Stone{
    constructor(x,y){
        var options = {
            restitution: 0.8,
            density: 1.5,
            friction: 0.4
        }

        this.body = Bodies.circle(x,y,15,options);
        this.radius = 15;

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        //pos.x = mouseX;
        //pos.y = mouseY
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("gray");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}
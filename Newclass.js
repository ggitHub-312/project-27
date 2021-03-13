class Newclass{

    constructor(b1,b2,d1,d2){
        this.dx = d1
        this.dy = d2
             var options ={
            bodyA:b1,
            bodyB:b2,
            pointB : {x:this.dx,y:this.dy}
        }
        
        this.link=Matter.Constraint.create(options)

        World.add(world,this.link)

    }
    display(){


        var p1 = this.link.bodyA.position
        var p2 = this.link.bodyB.position

        push()

        line(p1.x,p1.y,p2.x+this.dx,p2.y + this.dy)
        pop()

       
       
    
}

}

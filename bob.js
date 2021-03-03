class Bob 
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2			
			}
		this.x=x;
		this.y=y;
		this.r=r
        //this.image=loadImage("bob.png")
		this.body=Bodies.circle(this.x, this.y,(this.r-20)/2, options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var bobPos=this.body.position;		

			push()
			translate(bobPos.x, bobPos.y);
			ellipseMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			ellipseMode(CENTER);
			//rect( 0,0,this.r, this.r)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}
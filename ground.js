class ground
{
	constructor()
	{
		var options={
			isStatic:true			
			}
		this.body=Bodies.rectangle(450, 390, 900, 20, options);
 		World.add(world, this.body);

	}
	display()
	{
            noStroke();
			rectMode(CENTER)
			fill(128,128,128)
			rect(this.ground.position.x, this.ground.position.y, 900, 20);			
	}

}
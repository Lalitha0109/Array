class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke=loadImage("sprites/smoke.png");
    this.trajectory=[];
    this.visibility=255;
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    //[[200,50],[210,50],[220,50]]

    super.display();
    if(this.body.position.x>230&&this.body.speed>10){
    this.trajectory.push([this.body.position.x,this.body.position.y]);
    }
    for(var i=0;i<this.trajectory.length;i=i+1){
      push();
      tint(255,this.visibilty);
      image(this.smoke,this.trajectory[i][0],this.trajectory[i][1]);
      pop();

    }
    this.visibilty-=0.5;
  }
}

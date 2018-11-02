function setup() {
  createCanvas(600, 600);
  colorMode(HSB);
  noStroke();
  line1 = new Rect(125, 400, 250, 5, 255, 0, 2, 125, 600);
  line2 = new Rect(350, 210, 200, 200, 0, 2, 0, 600, 210);
  line3 = new Rect(10, 330, 170, 60, 250, 2, 0, 600, 600);
  line4 = new Rect(70, 370, 420, 7, 0, 0, -2, 70, 0);
  line5 = new Rect(250, 270, 6, 200, 0, -2, 0, 600, 600);
  line6 = new Rect(230, 290, 20, 20, 0, 0, 2, 230, 600);
	line7 = new Rect(265, 180, 8, 260, 51, 0, -2, 265, 0);
  line8 = new Rect(40, 510, 520, 50, 250, 2, 0, 600, 510);
  line9 = new Rect(160, 520, 250, 10, 0, 0, -2, 0, 0);
  line1.br = 100
  line1.sat = 0
  line4.br = 100
  line4.sat = 0
  line5.br = 100
  line5.sat = 0
  line6.br = 100
  line6.sat = 0
  line7.br = 100
  line7.sat = 100
  line8.br = 0
  line9.br = 100
  line9.sat = 0
	

  
}

function draw() { 
  background(220, 0, 80);
  line1.display();
  line2.display();
  line3.display();
  line4.display();
  line5.display();
  line6.display();
  line7.display();
  line8.display();
  line9.display();

}

function Rect(x, y, wt, ht, hu,  vx = 0, vy = 0, tx = 0, ty = 0,  chahu = 0, tarhu = 0,  alph = 1.0, life = 100) {
  var PINGPONG = 0
  var RESET = 1
  var NOLOOP = 2
  this.pos = createVector(x, y);
  this.chapos = createVector(vx, vy);
  this.initpos = createVector(x, y);
  this.currpos = this.initpos.copy();
  this.tarpos = createVector(tx, ty);
  this.inittarpos = this.tarpos.copy();
  this.wt = wt 
  this.ht = ht
  this.hu = hu
  this.sat = 80
  this.br = 80
  this.alph = alph
  this.inithu = hu
  this.currhu = hu
  this.chahu = chahu
  this.tarhu = tarhu
  this.life = life
  this.path = [this.tarpos.copy(), this.initpos.copy()]
  this.pathStopCounter = 0;
  this.loopStyle = NOLOOP
  

  this.update = function(){
    
    if(this.currhu < this.tarhu){
      	this.currhu += this.chahu
    		} else {
    		this.currhu = this.inithu
		}
    
    var distance = this.currpos.dist(this.tarpos); 
    
    if(this.loopStyle == PINGPONG) {
    		//print(distance);
    		if(distance > 3){
      		this.currpos.add(this.chapos)
      	//don't update
    		} else {
    		//This is the Reset Loop behavior
  			//this.currpos = this.initpos.copy();
    		//This is the Reverse Loop behavior
    		this.pathStopCounter += 1;
    		this.tarpos = this.path[this.pathStopCounter % 2]
      	this.chapos.mult(-1);
    	}
  }
    
	if(this.loopStyle == RESET){
    if(distance > 3){
    	this.currpos.add(this.chapos)
		}	else {
      this.currpos = this.initpos.copy();
		}	  	
	}
	if(this.loopStyle == NOLOOP){
    if(distance > 3){
      this.currpos.add(this.chapos)
    } else {
      
    }
  }
} 
  
    this.display = function(){
    this.update();
    fill(this.currhu, this.sat, this.br);
   	rect(this.currpos.x, this.currpos.y, this.wt, this.ht);
	}
}
                      
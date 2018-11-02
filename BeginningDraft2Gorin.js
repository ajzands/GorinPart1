var test
function setup() {
  createCanvas(600, 600);
  colorMode(HSB);
  noStroke();
  circle1 = new Ellipse(300, 300, 400, 400, 255, 0, 0);
  line1 = new Rect(125, 400, 250, 5, 255, 0, 255);
  line2 = new Rect(350, 210, 200, 200, 0);
  line3 = new Rect(10, 330, 170, 60, 250);
  line4 = new Rect(70, 370, 420, 7, 0, 0, 255);
  line5 = new Rect(250, 270, 6, 200);
  line6 = new Rect(230, 290, 20, 20);
	line7 = new Rect(265, 180, 8, 260, 51, 100, 100);
  line8 = new Rect(40, 510, 520, 50, 0, 0, 0);
  line9 = new Rect(160, 520, 250, 10, 0, 0, 100);

}

function draw() {
  background(220, 0, 100);
  circle1.display();
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

function Rect(x, y, wt, ht, hu, sat = 80, br = 80, alph = 1.0, life = 100, vx = 0, vy = 0) {
  this.pos = createVector(x, y);
  this.vel = createVector(vx, vy);
  this.wt = wt 
  this.ht = ht
  this.hu = hu
  this.sat = sat
  this.br = br
  this.alph = alph
  this.life = life
  this.display = function(){
    fill(this.hu, this.sat, this.br);
    rect(this.pos.x, this.pos.y, this.wt, this.ht);
	}
}

function Ellipse(x, y, wt, ht, hu, sat = 80, br = 80, alph = 1.0, life = 100, vx = 0, vy = 0) {
  this.pos = createVector(x, y);
  this.vel = createVector(vx, vy);
  this.wt = wt
  this.ht = ht
  this.sat = sat
  this.br = br
  this.alph = alph
  this.life = life
  this.display = function(){
    fill(this.hu, this.sat, this.br);
    ellipse(this.pos.x, this.pos.y, this.wt, this.ht);
  	}
  }

function update(){
  
}

  
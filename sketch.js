sV = 350
cha = 0.5

function setup() {
  createCanvas(600, 600);
}

function draw() {
  update();
  background('white');
  fill('black');
  ellipse(300, 300, sV, sV);
	fill('white');
  rect(125, 400, 250, 5);
  noStroke();
  fill('red');
  rect(sV, 240, 175, 175);
  //rect(375, 240, 175, 175);
  //Blue must be HSB
  fill('hsl(230, 45%, 40%)');
	rect(60, 340, 170, 50);
  //rect(60, 340, 170, 50);
  fill('white');
  rect(115, 370, 375, 7);
  fill('white');
  rect(250, 250, 6, 200);
  fill('white');
  rect(230, 280, 20, 20);
  //Yellow must be RGB
  fill('rgb(252, 252, 50)');
  rect(265, 200, 9, 230);
  fill('black');
  rect(65, 500, 500, 50);
  fill('white');
  rect(185, 510, 250, 10);
  
}

function update() { 
	if(sV > cha){
    (sV -= cha)
    	print(sV);
     

  }
}

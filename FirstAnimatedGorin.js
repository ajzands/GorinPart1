sV = 350
cha = 0.5
vS = 60
up = 500
down = 200
alph = 255
myhue = 230
newhue = 0
myred = 255
mygreen = 255
myblue = 50
newred = 0
newgreen = 0
newblue = 255


function setup() {
  createCanvas(600, 600);
}

function draw() {
  update();
  background('white');
  fill(0, 0 ,0 , alph);
  ellipse(300, 300, sV, sV);
	fill(255, 255 ,255 , alph);
  rect(125, 400, 250, 5);
  noStroke();
  fill(255, 0, 0, alph);
  rect(sV, 240, sV, sV);
  //rect(375, 240, 175, 175);
  //Blue must be HSB
  colorMode(HSB)
  fill(myhue, 65, 60);
	rect(vS, 340, vS, vS);
  //rect(60, 340, 170, 50);
  colorMode(RGB)
  fill(255, 255 ,255 , alph);
  rect(115, 370, 375, 7);
  fill(255, 255 ,255 , alph);
  rect(250, 250, 6, 200);
  fill(255, 255 ,255 , alph);
  rect(230, 280, 20, 20);
  //Yellow must be RGB
  fill(myred, mygreen, myblue);
  rect(265, down, vS, vS);
  fill(0,0 ,0 , alph);
  rect(65, up, sV, sV);
  fill(255, 255 ,255 , alph);
  rect(185, 510, 250, 10);
  
}

function update() { 
	if(sV > cha){
    (sV -= cha)
    
  if(vS < sV){
   (vS += cha)
   
    
  if(up > cha){
  	(up -= cha)
    
  if(down < up){
    (down += cha)
    
  if(alph > cha){
  	(alph -= cha)
    
  if(myhue > newhue){
		(myhue -= 0.75);
    
  if(myred > newred){
    (myred -= 0.75);
  }
    
  if(mygreen > newgreen){
    (mygreen -= 0.75);
  }
    
	if(myblue < newblue){
  	(myblue += 0.75);
  }
  					}	
  				}  
  			}
  		} 
  	}
  }
}

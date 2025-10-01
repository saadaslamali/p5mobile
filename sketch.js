let gifa;

function preload(){
	gifa = loadImage("gifa.gif");
}

function setup() 
{
	createCanvas(windowWidth, windowHeight);
	  gifa.resize(100, 200);

}

function draw()
{
image(gifa,mouseX,mouseY);
  filter(POSTERIZE, 3);

}


function mousePressed() {
  if (isLooping()) {
    noLoop(); // Stop drawing when the mouse is pressed
  } else {
    loop(); // Resume drawing when the mouse is pressed again
  }

}
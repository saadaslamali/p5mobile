
// ==============================================
// BASIC ORIENTATION EXAMPLE
// ==============================================
// This example shows the device orientation
// values for x, y, and z rotation
// 
// CONCEPTS COVERED:
// - Device orientation detection
// - Motion sensor permissions with enableGyroTap
// - rotationX, rotationY, rotationZ values
// - Simple display of sensor data
// - Global variables for sensor values
// ==============================================

// Variables to store orientation data
let orientationX = 0;  // Rotation around X axis (front/back tilt)
let orientationY = 0;  // Rotation around Y axis (left/right tilt)
let orientationZ = 0;  // Rotation around Z axis (device rotation)
let locationX;
let locationY;
let imgGif;
let posX = 0;
let posY = 0;
let velX = 0;
let velY = 0;
let paused = false;
let gifRot = 0; // rotation of the GIF


let blendModesList;

let currentBlendMode;

let selected = false; 


// ==============================================
// SETUP FUNCTION - Runs once when page loads
// ==============================================

function preload(){
       imgGif = loadImage("gifb.gif");

}
function setup() 
{
    // Create a canvas that fills the entire screen
    createCanvas(windowWidth, windowHeight);
  
    // Set to show in Degrees
    angleMode(DEGREES);
    
    // Lock mobile gestures to prevent scrolling, zooming, etc.
    lockGestures();
    
    // Show debug panel to see what's happening
    //showDebug();
    
    // Try button instead of tap (more reliable)
    enableGyroTap('ENABLE MOTION SENSORS', 'Requesting motion sensors...');
    
    // Set text properties
    textAlign(CENTER, CENTER);
    textSize(32);
    posX = width / 2;
    posY = height / 2;
      background(0, 0, 0);
      blendModesList =  [
  BLEND, EXCLUSION, OVERLAY
];
        currentBlendMode = random(blendModesList); // choose initial blend mode



    

}

// ==============================================
// DRAW FUNCTION - Runs continuously
// ==============================================
function draw() 
{
    // Clear the screen
    // background(240, 240, 240);
    
    
    // Check if sensors are working
  if (!window.sensorsEnabled) {
    textAlign(CENTER, CENTER);
    text("Tap to enable motion sensors", width / 2, height / 2);
    return;
  }

   
    if (!paused) {
    // physics
    
          // Light green when sensors active
        
       orientationX = rotationX; // front/back
    orientationY = rotationY; // left/right

    // Convert tilt to acceleration (scaled down)
    let ax = orientationY * 0.01;
    let ay = orientationX * 0.01;

    // Integrate velocity and position
    velX += ax;
    velY += ay;

    // Apply friction to slow down
    velX *= 0.98;
    velY *= 0.98;

    posX += velX;
    posY += velY;

    // Bounce at edges
    if (posX < 0 || posX > width) {
      velX *= -0.8;
      posX = constrain(posX, 0, width);
    }
    if (posY < 0 || posY > height) {
      velY *= -0.8;
      posY = constrain(posY, 0, height);
    }
  }
  else {
        gifRot += 2; // degrees per frame

  }

    

  push();
  translate(posX, posY);
  rotate(gifRot);
  imageMode(CENTER);
  blendMode(BLEND);
  image(imgGif, 0, 0, 70, 70);
  pop();
    

}

// ==============================================
// TOUCH EVENT FUNCTIONS
// ==============================================
// Note: Touch events are handled by enableGyroTap for permissions

function touchStarted() 
{
  paused = true;
  return false; 


}


function touchEnded() {
  paused = false;
  return false; 
}
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
let posX;
let posY;
let velX;
let velY;

let imgGif;
// ==============================================
// SETUP FUNCTION - Runs once when page loads
// ==============================================

function preload(){
       imgGif = loadImage("gifa.gif");

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

    posX = width/2;
    posY = height/2;
    

}

// ==============================================
// DRAW FUNCTION - Runs continuously
// ==============================================
function draw() 
{
    // Clear the screen
    // background(240, 240, 240);
    

    
    // Check if sensors are working
    if (window.sensorsEnabled) 
    {
        background(200, 255, 200);  // Light green when sensors active
        
        // Update orientation values from device sensors ONLY when enabled
        orientationX = rotationX;
        orientationY = rotationY;
        // orientationZ = rotationZ;
    // Convert tilt to acceleration (scaled down)
    let ax = orientationY * 0.05;
    let ay = orientationX * 0.05;

    // Integrate velocity and position
    velX += ax;
    velY += ay;

    // Apply friction to slow down
    velX *= 0.98;
    velY *= 0.98;

    posX += velX;
    posY += velY;
        
        // NOTE: You can use constrain() to keep values within a specific range
        // Example: orientationX = constrain(rotationX, -90, 90);
        // This would limit the X rotation to between -90 and 90 degrees
        // Useful for mapping sensor values to specific ranges for animations or controls
        // Learn more: https://p5js.org/reference/p5/constrain/

            if (posX < 0 || posX > width) {
                velX *= -0.8;
                posX = constrain(posX, 0, width);
                }
                if (posY < 0 || posY > height) {
                velY *= -0.8;
                posY = constrain(posY, 0, height);
                }

        image(imgGif, orientationX, orientationY);
        imgGif.resize(30, 80)
    } 
    else 
    {
           background(255, 200, 200);
    textAlign(CENTER, CENTER);
    text("Tap to enable motion sensors", width / 2, height / 2);
        // Instructions to enable sensors

    }
}

// ==============================================
// TOUCH EVENT FUNCTIONS
// ==============================================
// Note: Touch events are handled by enableGyroTap for permissions

function touchStarted() 
{
    // Permission handling is done by enableGyroTap
    return false;
}

function touchEnded() 
{
    return false;
}


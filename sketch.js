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
    background(240, 240, 240);
    

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


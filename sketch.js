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
    

}

// ==============================================
// DRAW FUNCTION - Runs continuously
// ==============================================
function draw() 
{
    // Clear the screen
    background(240, 240, 240);
    

    
    // Check if sensors are working
    if (window.sensorsEnabled) 
    {
        background(200, 255, 200);  // Light green when sensors active
        
        // Update orientation values from device sensors ONLY when enabled
        orientationX = rotationX;
        orientationY = rotationY;
        // orientationZ = rotationZ;

        locationX += orientationX;
        locationY += orientationY;
        
        // NOTE: You can use constrain() to keep values within a specific range
        // Example: orientationX = constrain(rotationX, -90, 90);
        // This would limit the X rotation to between -90 and 90 degrees
        // Useful for mapping sensor values to specific ranges for animations or controls
        // Learn more: https://p5js.org/reference/p5/constrain/

        image(imgGif, orientationX, orientationY);
        imgGif.resize(30, 80)
    } 
    else l
    {
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


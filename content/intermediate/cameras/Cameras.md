---
ID_PAGE: 922061
PG_TITLE: Additional Cameras
---
# Additional Cameras #

These include the legacy cameras, the Follow Camera and Anaglyph Cameras.

##Legacy Cameras##

Three individual cameras, the Free Camera, the Touch Camera and the Gamepad Camera have now been combined into the single Universal Camera. They are however still available 
as separate cameras and behind the 'scenes' are used in building the Universal Camera. 


##FollowCamera##

The Follow Camera does what it says on the tin. Give it a mesh as a target and from whatever position it is currently at it will move to a goal position from which to view 
the target. When the target moves so will the Follow Camera.

The initial position of the Follow Camera is set when it is created then the goal position is set with three parameters:

1. the distance from the target - camera.radius;

2. the height above the target - camera.heightOffset;

3. the angle in degrees around the target in the x y plane.

The speed with which the camera moves to a goal position is set through its acceleration (camera.cameraAcceleration) up to a maximum speed (camera.maxCameraSpeed).

###Constructing a Follow Camera###

```javascript

// Parameters: name, position, scene	
var camera = new BABYLON.FollowCamera("FollowCam", new BABYLON.Vector3(0, 10, -10), scene);
	
//The goal distance of camera from target
camera.radius = 30;
	
// The goal height of camera above local origin (centre) of target
camera.heightOffset = 10;
	
// The goal rotation of camera around local origin (centre) of target in x y plane
camera.rotationOffset = 0;
	
//Acceleration of camera in moving from current to goal position
camera.cameraAcceleration = 0.005
	
//The speed at which acceleration is halted 
camera.maxCameraSpeed = 10
    
// This attaches the camera to the canvas
   camera.attachControl(canvas, true);

// NOTE:: SET CAMERA TARGET AFTER THE TARGET'S CREATION
//targetMesh created here
camera.target = targetMesh;   

```
[A Playground Example of a Follow Camera following a moving target](http://www.babylonjs-playground.com/#12WBC#78)


##AnaglyphCameras##

These extend the ue of the Universal and Arc Rotate Cameras for use with red and cyan 3D glasses. They use post-processing filtering techniques. 

###Constructing Anaglyph Universal Camera###.

```javascript

// Parameters : name, position, eyeSpace, scene
var camera = new BABYLON.AnaglyphUniversalCamera("af_cam", new BABYLON.Vector3(0, 1, -15), 0.033, scene);
```


###Constructing Anaglyph ArcRotateCamera###. 

```javascript

// Parameters : name, alpha, beta, radius, target, eyeSpace, scene
var camera = new BABYLON.AnaglyphArcRotateCamera("aar_cam", -Math.PI/2, Math.PI/4, 20, new BABYLON.Vector3.Zero(), 0.033, scene);
```

The _eyeSpace_ parameter sets the amount of shift between the left eye view and the right eye view. Once you are wearing your 3D glasses, you might want to experiment with this float value.

You can learn all about anaglyphs by visiting a [Wikipedia page that explains it thoroughly](http://en.wikipedia.org/wiki/Anaglyph_3D). 


---
ID_PAGE: 22061
PG_TITLE: Standard Cameras
---
# Babylon.js Standard Cameras #

The two standard cameras are - the Universal Camera used for First Person Movement and the Arc Rotate Camera which is an orbital camera.
Please note that these cameras require the third-party file [hand.js](http://handjs.codeplex.com/releases/view/119684).

##Universal Camera##

This was introduced with version 2.3 of Babylon.js and is controlled by the keyboard, mouse, touch or gamepad depending on the input device used, 
with no need for the contoller to be specified.

The Universal Camera is now the default camera used by Babylon.js if nothing is specified, and it’s your best choice if you’d like to have a FPS-like control in your scene.  
All demos on babylonjs.com are based upon that feature. Plug a Xbox controller into your PC and using it you’ll still be able to navigate most of our demos.

The default actions are 

1. keyboard - left and right arrows move the camera left and right, up and down arrows move it forwards and backwards;

2. mouse - rotates the camera about the axes with the camera as origin;

3. touch - swipe left and right to move camera left and right, swipe up and down to move it forward and backwards;

4. gamepad - corresponds to device.

###Constructing a Universal Camera### 

```javascript

// Parameters : name, position, scene
    var camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(0, 0, -10), scene);

// Targets the camera to a particular position. In this case the scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

// Attach the camera to the canvas
    camera.attachControl(canvas, true);
```
[A Playground Example of a Universal Camera](http://www.babylonjs-playground.com/#12WBC#68)


##Arc Rotate Camera##

 This camera always points towards a given target position and can be rotated around that target with the target as the centre of rotation. 
 It can be controlled with cursors and mouse, or with touch events. 
 
 Think of this camera as one orbiting its target position, or more imaginatively as a spy satellite orbiting the earth. Its position relative to the target (earth) can be set by three parameters, 
  _alpha_ (radians) the longitudinal rotation, _beta_ (radians) the latitudinal rotation and  _radius_ the distance from the target position. Here is an illustration:
![](http://urbanproductions.com/wingy/babylon/misc/arc01.jpg)

_alpha_ = 0 and _beta_ = 0 should give a position directly over the 'north' pole (0, _radius_, 0) however for technical reasons this is not possible and 
in this situation _beta_ is offset by 0.1 radians (about 0.6 degrees).

Both _alpha_ and _beta_ increase in a clockwise direction. 

The position of the camera can be set from a vector which will overide any current value for _alpha_, _beta_ and _radius_. 
This can be much easier than calculating the required angles.

Whether using the keyboard, mouse or touch swipes left right directions change _alpha_ and up down directions change _beta_.

Panning with an ArcRotateCamera is also possible by using CTRL at the same time as the input methods above. 

###Constructing an Arc Rotate Camera### 

```javascript

// Parameters : name, position, scene
    var camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(0, 0, -10), scene);

// Targets the camera to a particular position. In this case the scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

// Attach the camera to the canvas
    camera.attachControl(canvas, true);

// Parameters: alpha, beta, radius, target position, scene
	var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);

// Positions the camera overwriting alpha, beta, radius
    camera.setPosition(new BABYLON.Vector3(0, 0, 10));

// This attaches the camera to the canvas
    camera.attachControl(canvas, true);    
```
[A Playground Example of an Arc Rotate Camera](http://www.babylonjs-playground.com/#12WBC#69)

##Comparisons between Cameras##

In both the above playgrounds the starting positions and targets have been set to be the same and the different way they handle controls can be seen.

##Further Reading##

###Intermediate###
[Additional Cameras](/intermediate/cameras/Cameras.html)
[Customizing Camera Inputs](/intermediate/cameras/Customizing_Inputs.html)
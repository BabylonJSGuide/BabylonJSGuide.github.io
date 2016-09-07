---
ID_PAGE: 922061
PG_TITLE: Advanced Cameras
---
# Advanced Cameras

These include the Device Orientation Camera, the Virtual Joysticks Camera and the Web VR Camera.

## Device Orientation Camera

This is a camera specifically designed to react to device orientation events such as a modern mobile device being tilted forward or back and left or right. 

### Constructing a Device Orientation Camera

```javascript

// Parameters : name, position, scene	
   var camera = new BABYLON.DeviceOrientationCamera("DevOr_camera", new BABYLON.Vector3(0, 0, 0), scene);

    // Targets the camera to a particular positiion
    camera.setTarget(new BABYLON.Vector3(0, 0, -10));
	
	// Sets the sensitivity of the camera to movement and rotation
	camera.angularSensibility = 10;
	camera.moveSensibility = 10;

    // Attach the camera to the canvas
    camera.attachControl(canvas, true);

```
[A Playground Example of a Device Orientation Camera](http://www.babylonjs-playground.com/#12WBC#81) for those with a correct device.


## Virtual Joysticks Camera

This is specifically designed to react to Virtual Joystick events. 
Virtual Joysticks are on-screen 2D graphics that are used to control the camera or other scene items. 
 
## Requires

The third-party file [hand.js](http://handjs.codeplex.com/releases/view/119684).

## Read

[Virtual Joysticks David Rousset Blog](http://blogs.msdn.com/b/davrous/archive/2013/02/22/creating-an-universal-virtual-touch-joystick-working-for-all-touch-models-thanks-to-hand-js.aspx) on David's blog.
 
### Video

[Virtual Joysticks Camera demo in video](https://www.youtube.com/watch?v=53Piiy71lB0)

![Screenshot of the Virtual Joysticks Camera in action on Espilit](http://david.blob.core.windows.net/babylonjs/VJCBabylon.jpg)
 
### Complete sample

Here is a complete sample that loads the Espilit demo and switches the default camera to a virtual joysticks camera:

```javascript
document.addEventListener("DOMContentLoaded", startGame, false);
function startGame() {
  if (BABYLON.Engine.isSupported()) {
    var canvas = document.getElementById("renderCanvas");
    var engine = new BABYLON.Engine(canvas, true);

    BABYLON.SceneLoader.Load("Espilit/", "Espilit.babylon", engine, function (newScene) {

      var VJC = new BABYLON.VirtualJoysticksCamera("VJC", newScene.activeCamera.position, newScene);
      VJC.rotation = newScene.activeCamera.rotation;
      VJC.checkCollisions = newScene.activeCamera.checkCollisions;
      VJC.applyGravity = newScene.activeCamera.applyGravity;

      // Wait for textures and shaders to be ready
      newScene.executeWhenReady(function () {
        newScene.activeCamera = VJC;
        // Attach camera to canvas inputs
        newScene.activeCamera.attachControl(canvas);
        // Once the scene is loaded, just register a render loop to render it
        engine.runRenderLoop(function () {
          newScene.render();
        }),
      }),
    }, function (progress) {
    // To do: give progress feedback to user
    }),
  }
}
```

If you switch back to another camera, don’t forget to call the dispose() function first. Indeed, the VirtualJoysticks are creating a 2D canvas on top of the 3D WebGL canvas to draw the joysticks with cyan and yellow circles. If you forget to call the dispose() function, the 2D canvas will remain, and will continue to use touch events input.


## VR Device Orientation Free Camera

A new camera.

### Constructing the VR Device Orientation Free Camera

```javascript
//Parameters: name, position, scene,  compensate for distortion
var camera = new BABYLON.VRDeviceOrientationFreeCamera ("Camera", new BABYLON.Vector3 (-6.7, 1.2, -1.3), scene, 0);
```

## Web VR Free Camera

The new virtual reality camera

```javascript

// Parameters : name, position, scene
    var camera = new BABYLON.WebVRFreeCamera("WVR", new BABYLON.Vector3(0, 1, -15), scene);
```
The Web VR Free Camera uses FreeCamera as its basis, so all of the properties and methods of FreeCamera... are also found on our Web VR Free Camera.

[A Playground Example of a VR Device Orientation Camera](http://www.babylonjs-playground.com/#12WBC#80) for those with a correct device.









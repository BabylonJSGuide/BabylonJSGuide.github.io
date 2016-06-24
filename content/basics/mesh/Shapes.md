---
PG_TITLE: Standard Shapes
---

##Standard Shapes##

[A Playground Example of the Standard Shapes](http://www.babylonjs-playground.com/#165IV6#1)

From BJS 2.3 onwards a mesh is created using MeshBuilder. Shapes are created using the using the following format

```javascript
var mesh = BABYLON.MeshBuilder.CreateMesh(name, {param1 : val1, param2: val2}, scene);
```

This method has the advantages of making some (or all) the parameters optional depending on the mesh and provides more features to the created mesh over the legacy method.

The legacy method which has the form 

```javascript
var mesh = BABYLON.Mesh.CreateMesh(name, param1, param2, ..., scene);
```
is still available and will often be seen in Playground examples.

### Box
Example :
```javascript
var box = BABYLON.MeshBuilder.CreateBox("box", {height: 5}, scene);
```
Properties, all optional :

property|value|default value
--------|-----|------------
size|_(number)_ size of each box side|1
height|_(number)_ height size, overwrites _size_ property|size
width|_(number)_ width size, overwrites _size_ property|size
depth|_(number)_ depth size,  overwrites _size_ property|size
faceColors|_(Color4[])_ array of 6 _Color4_, one per box face|Color4(1, 1, 1, 1) for each side
faceUV|_(Vector4[])_ array of 6 _Vector4_, one per box face| UVs(0, 0, 1, 1) for each side
updatable|_(boolean)_ true if the mesh is updatable|false
sideOrientation|_(number)_ side orientation|DEFAULTSIDE

### Sphere
Example :
```javascript
var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 2, diameterX: 3}, scene);
```
Properties, all optional :

property|value|default value
--------|-----|-------------
segments|_(number)_ number of horizontal segments|32
diameter|_(number)_ diameter of the sphere|1
diameterX|_(number)_ diameter on X axis, overwrites _diameter_ property|diameter
diameterY|_(number)_ diameter on Y axis, overwrites _diameter_ property|diameter
diameterZ|_(number)_ diameter on Z axis, overwrites _diameter_ property|diameter
arc|_(number)_ ratio of the circumference (latitude) between 0 and 1|1
slice|_(number)_ ratio of the height (longitude) between 0 and 1|1
updatable|_(boolean)_ true if the mesh is updatable|false
sideOrientation|_(number)_ side orientation|DEFAULTSIDE

### Cylinder or Cone
If you set _diameterTop_ to zero, you get a cone instead of a cylinder.
Example :
```javascript
var cone = BABYLON.MeshBuilder.CreateCylinder("cone", {diameterTop: 0, tessellation: 4}, scene);
```
Properties, all optional :

property|value|default value
--------|-----|-------------
height|_(number)_ height of the cylinder|2
diameterTop|_(number)_ diameter of the top cap, can be zero to create a cone, overwrites the _diameter_ property|1
diameterBottom|_(number)_ diameter of the bottom cap, can't be zero, overwrites the _diameter_ property|1
diameter|_(number)_ diameter of both caps|1
tessellation|_(number)_ number of radial sides|24
subdivisions|_(number)_ number of rings|1
faceColors|_(Color4[])_ array of 3 _Color4_, 0 : bottom cap, 1 : cylinder tube, 2 : top cap|Color4(1, 1, 1, 1) for each face
faceUV|_(Vector4[])_ array of 3 _Vector4_, 0 : bottom cap, 1 : cylinder tube, 2 : top cap| UVs(0, 0, 1, 1) for each face
arc|_(number)_ ratio of the circumference between 0 and 1|1
updatable|_(boolean)_ true if the mesh is updatable|false
sideOrientation|_(number)_ side orientation|DEFAULTSIDE

### Plane
Example :
```javascript
var plane = BABYLON.MeshBuilder.CreatePlane("plane", {width: 5}, scene);
```
Properties, all optional :

property|value|default value
--------|-----|-------------
size|_(number)_ side size of the plane|1
width|_(number)_ size of the width|size
height|_(number)_ size of the height|size
updatable|_(boolean)_ true if the mesh is updatable|false
sideOrientation|_(number)_ side orientation|DEFAULTSIDE
sourcePlane|_(Plane)_ source plane (math) the mesh will be transformed to|null

### Ground
Example :
```javascript
var ground = BABYLON.MeshBuilder.CreateGround("gd", {width: 6, subdivsions: 4}, scene);
```
Properties, all optional :

property|value|default value
--------|-----|-------------
width|_(number)_ size of the width|1
height|_(number)_ size of the height|1
updatable|_(boolean)_ true if the mesh is updatable|false
subdivisions|_(number)_ number of square subdivisions|1


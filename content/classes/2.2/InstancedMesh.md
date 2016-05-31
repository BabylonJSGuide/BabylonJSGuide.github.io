---
ID_PAGE: 25146
PG_TITLE: InstancedMesh
PG_VERSION: 2.1
TAGS:
    - Node
    - Mesh
---
##Description

class [InstancedMesh](/classes/2.2/InstancedMesh) extends [AbstractMesh](/classes/2.2/AbstractMesh)

Creates an instance based on a source mesh.

##Constructor

##new [InstancedMesh](/classes/2.2/InstancedMesh)(name, source)

The [InstancedMesh](/classes/2.2/InstancedMesh) constructor

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |  The given name
 | source | [Mesh](/classes/2.2/Mesh) |  @param source
##Members

###receiveShadows : boolean

True if the Instanced [Mesh](/classes/2.2/Mesh) got shadows, false if is not

###material : [Material](/classes/2.2/Material)

The material

###visibility : number

The visibility of the Instanced [Mesh](/classes/2.2/Mesh)

###skeleton : [Skeleton](/classes/2.2/Skeleton)

The skeleton

###sourceMesh : [Mesh](/classes/2.2/Mesh)

The sourceMesh

##Methods

###getTotalVertices() &rarr; number

Get the total vertices of the Instanced [Mesh](/classes/2.2/Mesh)
###getVerticesData(kind) &rarr; number[]

Get the vertices data

####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string |  @param kind

###isVerticesDataPresent(kind) &rarr; boolean

Is Vertices data present

####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string |  @param kind

###getIndices() &rarr; number[]

Get Indices
###refreshBoundingInfo() &rarr; void

Refresh Bounding Info of the Instanced [Mesh](/classes/2.2/Mesh)
###getLOD(camera) &rarr; [AbstractMesh](/classes/2.2/AbstractMesh)



####Parameters
 | Name | Type | Description
---|---|---|---
 | camera | [Camera](/classes/2.2/Camera) |  

###clone(name, newParent, doNotCloneChildren) &rarr; [InstancedMesh](/classes/2.2/InstancedMesh)

Clone this instanced [Mesh](/classes/2.2/Mesh)

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |  The given name
 | newParent | [Node](/classes/2.2/Node) |  The parent
optional | doNotCloneChildren | boolean |  True if you want to clone children, false if you don't want to.
###dispose(doNotRecurse) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
optional | doNotRecurse | boolean |  @param doNotRecurse


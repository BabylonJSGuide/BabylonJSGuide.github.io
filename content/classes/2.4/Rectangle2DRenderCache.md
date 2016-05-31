---
TAGS:
---
## Description

class [Rectangle2DRenderCache](/classes/2.4/Rectangle2DRenderCache) extends [ModelRenderCache](/classes/2.4/ModelRenderCache)



## Constructor

## new [Rectangle2DRenderCache](/classes/2.4/Rectangle2DRenderCache)(engine, modelKey, isTransparent)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | engine | [Engine](/classes/2.4/Engine) | 
 | modelKey | string | 
 | isTransparent | boolean | 
## Members

### fillVB : WebGLBuffer



### fillIB : WebGLBuffer



### fillIndicesCount : number



### instancingFillAttributes : [InstancingAttributeInfo](/classes/2.4/InstancingAttributeInfo)[]



### effectFill : [Effect](/classes/2.4/Effect)



### borderVB : WebGLBuffer



### borderIB : WebGLBuffer



### borderIndicesCount : number



### instancingBorderAttributes : [InstancingAttributeInfo](/classes/2.4/InstancingAttributeInfo)[]



### effectBorder : [Effect](/classes/2.4/Effect)



## Methods

### render(instanceInfo, context) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | instanceInfo | [GroupInstanceInfo](/classes/2.4/GroupInstanceInfo) | 
 | context | [Render2DContext](/classes/2.4/Render2DContext) | 
### dispose() &rarr; boolean



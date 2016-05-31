---
TAGS:
---
## Description

class [LockableBase](/classes/2.4/LockableBase)

Base class implementing the ILocable interface.

The particularity of this class is to call the protected onLock() method when the instance is about to be locked for good.

## Methods

### isLocked() &rarr; boolean


### lock() &rarr; boolean


### onLock() &rarr; void

Protected handler that will be called when the instance is about to be locked.

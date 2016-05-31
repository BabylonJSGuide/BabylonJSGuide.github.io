# Sprite2D Primitive overview

Sprite2D is a primitive to display a bitmap content of a Texture.

## Features

 - Supports Masking through alpha discard.
 - Basic support of Frame selection (have to be on a single row right now) for animation.
 - InvertY on texture as an option.

## Properties

 - `texture`: the texture that contain the Sprite to display
 - `spriteSize`: a `Size` optional property that defines the size of the sprite in pixels. If null then the size of the texture is used. Default is null.
 - `spriteLocation`: a `Vector2` defining the top/left corner of the Sprite in the texture. Default will be `(0,0)`.
 - `spriteFrame`: a number defining the frame to display. Right now the frame is compute as an offset to apply on the U texture coordinate, based on the Width of the Sprite in the texture.
 - invertY: a `boolean` which will invert the Y coordinates (well, should be V) of the texture.

## Remarks

Right now this primitive is really simple, but it will evolve in futures releases.

## Example

[Animated Sprite2D](http://babylonjs-playground.com/#20MSFF#1)



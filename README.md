# react-img-gallery

React component for building image galleries


## Table of Contents

* [Installation](#installation)
* [Features](#features)
* [Example](#example)
* [Demo](#demo)
* [Upcoming Features](#upcoming-Features)



## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):


    $ npm install react-img-gallery
    $ yarn add react-img-gallery


## Features

* Thumbnail Navigation
* Mobile Swipe Gestures
* Support Modal View and Modal Component
* Mobile Responsive Design

## Example

Here is a simple example of `Gallery` Component being used in an app:

```jsx
import { Gallery } from 'react-img-gallery';

<Gallery>
    <img alt="image-title" src="/imgOne.jpg" />
    <img alt="image-title" src="/imgTwo.jpg" />
    <img alt="image-title" src="/imgThree.jpg" />
</Gallery>


// modal view for main image is disabled by defaul, you can enable it by setting modalIsEnabled value to true
// you can render custom image as main image by passing mainImg value, default main image is the first image
// you can override thumbnail arrows images by passing arrows image soruce for thumbnailRightArrow and thumbnailLeftArrow
// you can set custom width for gallery area by passing width as props

<Gallery modalIsEnabled={true} mainImg={4} width={'650px'}>
    {gallery.map((imgSrc) => (<img alt="" key={imgSrc} src={imgSrc} />) )}
</Gallery>

// you can use modal component separately
// you can set custom width, height and enable/disable fullscreen icon.

import { Modal } from 'react-img-gallery';

<Modal imgAlt={"image-title"} imgSrc={imageSource} width={'400px'} height={'200px'} fullScreenIconEnabled={true} /> 
```

## Demo

[Live Demo](https://react-img-gallery-k.herokuapp.com)


## Upcoming Features

* Update main area as slider to navigate between images.
* Resizing thumbnail images.
* Add zoom functionality.
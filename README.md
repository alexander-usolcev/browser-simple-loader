# browser-simple-loader

**browser-simple-loader** - it's a simple html5 (based on svg) loader in browser.

![Example](data/example.gif?raw=true)

## Install 
```
npm install browser-simple-loader --save-dev
```

## Use (recommended)
Create your es6 file:
``` js
// my-file.js

'use strict';

import Loader from 'browser-simple-loader';

class Test {
    constructor() {
        let loader = new Loader();

        loader.show();
    }
}

export default new Test();

```

and then build it with [webpack](https://webpack.github.io/).

Add to html page you generated script and open your page:
``` html
<script src='my-bundle.js'></script>
```
You will see a Loader.


## Use in html (without build)
Of course you can just include on page compiled file and use it.
- download browser-simple-loader.js from /build/ folder from [project page](https://github.com/alexander-usolcev/browser-simple-loader) 
- added script tag with browser-simple-loader.js on your page
```html
<script src="/path-to/browser-simple-loader.js"></script>

<script>	
    var loader = new window.Loader(); // window.Loader is a global object if you choose this method.
    
    loader.show();
</script>
```

## API
### constructor()
```js
import Loader from 'browser-simple-loader';
let loader = new Loader({...});
```


or just call in browser (if you choose 'Use in html (without build)')
```js
let loader = new window.Loader({...});
```

default configuration is:
```js
{            
    size: 120, // px
 
    duration: 1, // seconds
    radius: 8, // px
    colors: [
        ['#c5523f', '#f2b736'],
        ['#f2b736', '#499255'],
        ['#499255', '#1875e5'],
        ['#1875e5', '#c5523f'],
    ],
 
    templates: {
        style: null, // <style>....</style>
        loader: null // <svg>....</svg>
    },
 
    container: document.getElementsByTagName('body')[0], // DOM element
 
    className: 'browser-simple-loader' // String
}
```

Default templates is:
templates.style
```css
<style type="text/css">
    .browser-simple-loader {
        background: rgba(255, 255, 255, 0.5);
        bottom: 0;
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 1000;
        display: none;
    }

    .browser-simple-loader svg {
        position: fixed;
        left: 50%;
        top: 50%;
        z-index: 1001;
        margin: -${size / 2}px 0 0 -${size / 2}px;
    }
</style>
```

templates.loader
```html
<svg width="${size}px" height="${size}px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
    <rect x="0" y="0" width="100" height="100" fill="none"></rect>
    <g transform="rotate(0 50 50)">
        <circle r="${radius}" cx="20" cy="50" transform="translate(23.4991 -23.4991)">
            <animateTransform attributeName="transform" type="translate" begin="0s" repeatCount="indefinite" dur="${duration}s" values="0 0;30 -30" keyTimes="0;1"></animateTransform>
            <animate attributeName="fill" dur="${duration}s" begin="0s" repeatCount="indefinite" keyTimes="0;1" values="${colors[0][0]};${colors[0][1]}"></animate>
        </circle>
    </g>
    <g transform="rotate(90 50 50)">
        <circle r="${radius}" cx="20" cy="50" transform="translate(23.4991 -23.4991)">
            <animateTransform attributeName="transform" type="translate" begin="0s" repeatCount="indefinite" dur="${duration}s" values="0 0;30 -30" keyTimes="0;1"></animateTransform>
            <animate attributeName="fill" dur="${duration}s" begin="0s" repeatCount="indefinite" keyTimes="0;1" values="${colors[1][0]};${colors[1][1]}"></animate>
        </circle>
    </g>
    <g transform="rotate(180 50 50)">
        <circle r="${radius}" cx="20" cy="50" transform="translate(23.4991 -23.4991)">
            <animateTransform attributeName="transform" type="translate" begin="0s" repeatCount="indefinite" dur="${duration}s" values="0 0;30 -30" keyTimes="0;1"></animateTransform>
            <animate attributeName="fill" dur="${duration}s" begin="0s" repeatCount="indefinite" keyTimes="0;1" values="${colors[2][0]};${colors[2][1]}"></animate>
        </circle>
    </g>
    <g transform="rotate(270 50 50)">
        <circle r="${radius}" cx="20" cy="50" transform="translate(23.4991 -23.4991)">
            <animateTransform attributeName="transform" type="translate" begin="0s" repeatCount="indefinite" dur="${duration}s" values="0 0;30 -30" keyTimes="0;1"></animateTransform>
            <animate attributeName="fill" dur="${duration}s" begin="0s" repeatCount="indefinite" keyTimes="0;1" values="${colors[3][0]};${colors[3][1]}"></animate>
        </circle>
    </g>
</svg>
```

Create loader with own config:
```js
let loader = new Loader({
    size: 400,
    duration: 0.8,
    radius: 10,
    container: document.getElementById('my-loader-container')
});

loader.show();
```

### show()
Method to show Loader.
```js
loader.show();
```

### hide()
Method to hide Loader.
```js
loader.hide();
```

### _static_ getInstance()
Static method to get instance of Loader.
 ```js
import Loader from 'browser-simple-loader';

...
let loader = new Loader({...});
...

Loader.getInstance(); // return result of the first new Loader();
```
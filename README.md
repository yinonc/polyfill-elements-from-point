# elementsFromPoint Polyfill

This polyfill comes to solve missing [elementsFromPoint](https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/elementsFromPoint) in some browsers / specific versions, but to use [msElementsFromPoint](https://docs.microsoft.com/en-us/previous-versions/hh772121(v%3Dvs.85)) if exists.

#### How it works:
* Check for native `document.elementsFromPoint`
* If doesn't exist, try fallback to `document.msElementsFromPoint`
* Otherwise, use `elementsFromPoint` polyfill function.

Polyfill function is based on https://gist.github.com/iddan/54d5d9e58311b0495a91bf06de661380

#### How to use:

First install package:

`$ npm install --save-dev elements-from-point-polyfill`

On application load:
```javascript
const elementsFromPointPolyfill = require('elements-from-point-polyfill')

elementsFromPointPolyfill(window)
```

Or ES6:
```javascript
import elementsFromPointPolyfill from 'elements-from-point-polyfill'

elementsFromPointPolyfill(window)
```

# elementsFromPoint Polyfill

This polyfill comes to solve missing [elementsFromPoint](https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/elementsFromPoint) in some browsers / specific versions, but to use [msElementsFromPoint](https://docs.microsoft.com/en-us/previous-versions/hh772121(v%3Dvs.85)) if exists.

Using VanillaJS, very small package size.

#### How it works:
* Check for native `document.elementsFromPoint`
* If doesn't exist, try fallback to `document.msElementsFromPoint`
* Otherwise, use `elementsFromPoint` polyfill function.

Polyfill function is based on https://gist.github.com/iddan/54d5d9e58311b0495a91bf06de661380

#### How to use:

First install package:

`$ npm install --save polyfill-elements-from-point`

On application load:
```javascript
const elementsFromPointPolyfill = require('polyfill-elements-from-point')

elementsFromPointPolyfill(window)
```

Or ES6:
```javascript
import elementsFromPointPolyfill from 'polyfill-elements-from-point'

elementsFromPointPolyfill(window)
```
And then window.document.elementsFromPoint would be available no matter which browser you're using :)

##### Author notes:   

* Keep in mind some browsers / some versions are returning `null`. See [documantation](https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/elementsFromPoint).  
Although the polyfill function will always return an array, I didn't want to wrap whole function to return `[]` if received `null`, but to return original value from native functions.  
* By using [babel preset env](https://babeljs.io/docs/en/babel-preset-env), I'm assuring browsers compatibility.

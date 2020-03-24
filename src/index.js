import elementsFromPoint from './elementsFromPoint'

function elementsFromPointPolyfill(windowObj) {
    if (!windowObj || !windowObj.document || windowObj.document.elementsFromPoint) {
        return
    }
    if (windowObj.document.msElementsFromPoint) {
        windowObj.document.elementsFromPoint = windowObj.document.msElementsFromPoint
        return
    }
    windowObj.document.elementsFromPoint = elementsFromPoint
}

export default elementsFromPointPolyfill

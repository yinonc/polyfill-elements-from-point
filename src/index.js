import elementsFromPoint from './elementsFromPoint'

function elementsFromPointPolyfill(windowObj) {
    if (!windowObj || !windowObj.document || windowObj.document.elementsFromPoint) {
        return
    }
    if (windowObj.document.msElementsFromPoint) {
        window.document.elementsFromPoint = windowObj.document.msElementsFromPoint
        return
    }
    window.document.elementsFromPoint = elementsFromPoint
}

export default elementsFromPointPolyfill

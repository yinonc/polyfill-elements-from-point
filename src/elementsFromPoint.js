export default function elementsFromPoint(x, y) {
    const elements = [];
    const pointerEvents = [];

    let el = null;
    do {
        const topElement = document.elementFromPoint(x, y);
        if (el !== topElement) {
            el = topElement
            elements.push(el);
            pointerEvents.push(el.style.pointerEvents);
            el.style.pointerEvents = 'none';
        } else {
            el = null;
        }
    } while (el);

    elements.forEach((element, index) => {
        element.style.pointerEvents = pointerEvents[index]
    })

    return elements;
}

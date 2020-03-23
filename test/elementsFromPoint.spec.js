import elementsFromPoint from '../src/elementsFromPoint'

function getDefaultElement() {
    const element = window.document.createElement('div')
    element.style.top = '10px'
    element.style.left = '10px'
    element.style.width = '10px'
    element.style.height = '10px'
    return element
}

describe('elementsFromPoint', function () {
    let element
    let bodyElement
    let htmlElement

    beforeAll(() => {
        element = getDefaultElement()
        htmlElement = document.getElementsByTagName('html')[0]
        bodyElement = document.getElementsByTagName('body')[0]
        bodyElement.appendChild(element)
    })

    it('should return the added div element when calling elementsFromPoint from its point', () => {
        const elements = elementsFromPoint(15, 15)

        expect(elements.length).toBe(3)
        expect(elements[0]).toEqual(element)
        expect(elements[1]).toEqual(bodyElement)
        expect(elements[2]).toEqual(htmlElement)
    });

    it('should not return the added div element when calling elementsFromPoint not from its point', () => {
        const elements = elementsFromPoint(5, 5)

        expect(elements.length).toBe(1)
        expect(elements[0]).toEqual(htmlElement)
    });

    it('should not keep pointerEvents none after getting elementsFromPoint', () => {
        const elements = elementsFromPoint(15, 15)

        elements.forEach(el => {
            expect(el.style.pointerEvents).not.toBe('none')
        })
    });
});

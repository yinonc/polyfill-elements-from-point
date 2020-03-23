import elementsFromPointPolyfill from '../src/index'

describe('set elementsFromPoint', () => {
    beforeEach(() => {
        window.document.elementsFromPoint = undefined
    })

    test('should set polyfill function to elementsFromPoint', () => {
        elementsFromPointPolyfill(window)

        expect(typeof window.document.elementsFromPoint).toBe('function')
    })

    test('should set msElementsFromPoint if exists and elementsFromPoint does not exist', () => {
        const func = () => {}
        window.document.msElementsFromPoint = func

        elementsFromPointPolyfill(window)

        expect(window.document.elementsFromPoint).toEqual(func)
    })

    test('should not set msElementsFromPoint or polyfill if elementsFromPoint exists', () => {
        const func1 = () => {}
        const func2 = () => {}
        window.document.elementsFromPoint = func1
        window.document.msElementsFromPoint = func2

        elementsFromPointPolyfill(window)

        expect(window.document.elementsFromPoint).toEqual(func1)
    })

    test('should not crash if window argument is undefined', () => {
        expect(() => elementsFromPointPolyfill(undefined)).not.toThrow()
    })

    test('should not crash if document on window argument is undefined', () => {
        expect(() => elementsFromPointPolyfill({})).not.toThrow()
    })
})

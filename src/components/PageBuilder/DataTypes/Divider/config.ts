import { getStyleAsObject } from '../../utils'

export default (elem: HTMLElement) => {
    const hrElement = elem.children[0] as HTMLElement

    return {
        line: {
            style: getStyleAsObject(hrElement.style),
        },
    }
}
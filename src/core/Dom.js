class Dom {

}

const $ = () => {
    return new Dom()
}

$.create = (tagName, classes = '') => {
        const el = document.createElement(tagName)
        if (classes) {
            el.className = classes
        }
        return el
}

export default $


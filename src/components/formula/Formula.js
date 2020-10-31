import {ExcelComponent} from '@core/ExcelComponent'

export class Formula extends ExcelComponent {

    constructor() {
        super()
        this.classes = 'excel__formula formula'
    }

    toHTML() {
        return `
        <div class="formula__info">fx</div>
        <div class="formula__input" contenteditable="true" spellcheck="false"></div>
        `
    }
}

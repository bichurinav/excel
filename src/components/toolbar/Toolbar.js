import {ExcelComponent} from '@core/ExcelComponent'

export class Toolbar extends ExcelComponent {

    constructor() {
        super()
        this.classes = 'excel__toolbar toolbar'
    }

    toHTML() {
        return `
        <button class="button-icon header__btn-delete">
                    <span class="material-icons">
                        format_bold
                    </span>
        </button>
        <button class="button-icon header__btn-delete">
                    <span class="material-icons">
                        format_italic
                    </span>
        </button>
        <button class="button-icon header__btn-delete">
                    <span class="material-icons">
                        format_underlined
                    </span>
        </button>
        <button class="button-icon header__btn-delete">
                    <span class="material-icons">
                        format_align_left
                    </span>
        </button>
        <button class="button-icon header__btn-delete">
                    <span class="material-icons">
                        format_align_center
                    </span>
        </button>
        <button class="button-icon header__btn-delete">
                    <span class="material-icons">
                        format_align_right
                    </span>
        </button>
        `
    }
}

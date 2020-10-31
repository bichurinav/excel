import {ExcelComponent} from '@core/ExcelComponent'

export class Header extends ExcelComponent {

    constructor() {
        super()
        this.classes = 'excel__header header'
    }

    toHTML() {
        return `
        <input type="text" class="input header__input" value="Новая таблица">
        <div class="header__buttons">
            <button class="button-icon header__btn-exit">
                <span class="material-icons">
                    exit_to_app
                </span>
            </button>
            <button class="button-icon header__btn-delete">
                <span class="material-icons">
                    delete
                </span>
            </button>
        </div>
        `
    }

}

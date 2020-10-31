import $ from '@/core/Dom'

export class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.components = options.components || []
  }

  getRoot() {
    const $root = $.create('div', 'excel')

    this.components.forEach((Component) => {
      const component = $.create('div', new Component().classes);
      component.innerHTML = new Component().toHTML()
      $root.append(component)
    })

    return $root
  }

  render() {
    this.$el.append(this.getRoot())
  }

}

class AppComponent extends Component {
    constructor(options) {
        super(options)
        this.header = new HeaderComponent({
            id: 'header',
            parent: this.id,
            template: template.headerTemplate,
            callbacks: {
                showComponent: name => this.showComponent(name)
            }
        })

        this.calculator = new CalculatorComponent({
            id: 'calculator',
            parent: this.id,
            template: template.calculatorTemplate,
            calssName: 'hide'
        })
    }

    showComponent(name) {
        this.calculator.hide()
        this[name].show()
    }
}
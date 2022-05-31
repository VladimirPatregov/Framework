window.requestAnimFrame = (() => {
    return window.requestAnimationFrame ||
    function(callback){
        window.setTimeout(callback, 1000 / 60)
    }
})()

const template = new Template
new AppComponent({
    id: 'app',
    template: template.appTemplate
})
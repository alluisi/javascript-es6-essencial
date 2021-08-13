// EXEMPLOS:

var SETTINGS = {
    api: 'http://loclhost',
    trackJsToken: '12345'
}

function MyApp() {
    if (!MyApp.instance) {
        MyApp.instance = this;
    }

    return MyApp.instance;
}
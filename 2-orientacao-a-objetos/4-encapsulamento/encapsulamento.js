function Person(initialName) {
    var name = initialName;

    Object.defineProperties(this, 'name', {
        get: function () {
            return name;
        },
        set: function (value) {
            name = value;
        }
    });
}

class Person {
    #name = '';

    constructor(name) {
        this.#name = name
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }
}
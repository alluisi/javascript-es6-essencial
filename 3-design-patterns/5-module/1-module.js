// EXEMPLO:

// Antigamente
(function ($) {
    // your plugin here
})(jQuery);

// Hoje
class Person {
    constructor(name) {
        this.name = name;
    }
}

export default Person;

// Utilizar Person
import Person from "./2-1-module";
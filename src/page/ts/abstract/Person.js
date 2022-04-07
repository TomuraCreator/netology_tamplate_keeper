"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this.first_name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "lastName", {
        get: function () {
            return this.last_name;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
exports["default"] = Person;

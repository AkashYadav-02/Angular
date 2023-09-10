"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Customer.prototype.getfirstName = function () {
        return this.firstName;
    };
    Customer.prototype.setfirstName = function (newFirstName) {
        this.firstName = newFirstName;
    };
    Customer.prototype.getlastName = function () {
        return this.lastName;
    };
    Customer.prototype.setlastName = function (newLastName) {
        this.lastName = newLastName;
    };
    return Customer;
}());
exports.Customer = Customer;

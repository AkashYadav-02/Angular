var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getfirstName = function () {
        return this.firstName;
    };
    Person.prototype.setfirstName = function (newFirstName) {
        this.firstName = newFirstName;
    };
    Person.prototype.getlastName = function () {
        return this.lastName;
    };
    Person.prototype.setlastName = function (newLastName) {
        this.lastName = newLastName;
    };
    return Person;
}());
var person = new Person("John", "Doe");
console.log("First Name: ".concat(person.getfirstName));
console.log("Last Name: ".concat(person.getlastName));
person.setfirstName("Yash");
person.setlastName("Shinde");
console.log("Updated First Name: ".concat(person.getfirstName));
console.log("Updated Last Name: ".concat(person.getlastName));

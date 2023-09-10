"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
var Rectangle = /** @class */ (function () {
    function Rectangle(_length, _width) {
        this._length = _length;
        this._width = _width;
    }
    Rectangle.prototype.getInfo = function () {
        return " ".concat(this._length, " ").concat(this._width);
    };
    Rectangle.prototype.calculateArea = function () {
        return this._length * this._width;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;

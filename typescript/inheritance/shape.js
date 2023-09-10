"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(_thex, _they) {
        this._thex = _thex;
        this._they = _they;
    }
    Shape.prototype.getInfo = function () {
        return "".concat(this._thex, " ").concat(this._they);
    };
    return Shape;
}());
exports.Shape = Shape;

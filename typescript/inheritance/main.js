"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rectangle_1 = require("./Rectangle");
//const shae= new Shape("10","20");
var obj = new Rectangle_1.Rectangle( 34, 40);
var shape = [];
//   shape.push( shae);
var area = obj.calculateArea();
console.log("The area of the rectangle is: ".concat(area));

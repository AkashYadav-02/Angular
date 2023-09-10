
import { Shape } from "./shape";
import { Rectangle } from "./Rectangle";


//const shae= new Shape("10","20");
 const obj =new Rectangle(30,40);

  var shape: Shape []=[];

//   shape.push( shae);
   
console.log(obj.getInfo());

const area = obj.calculateArea();


console.log(`The area of the rectangle is: ${area}`);

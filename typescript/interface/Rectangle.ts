import { Shape } from "./shape";

 export class  Rectangle implements  Shape{
   

     constructor(private _length :number ,private _width :number){
         
     }

     public getInfo():string {
        return  ` ${this._length} ${this._width}`;
     }



     public calculateArea(): number {
        return this._length * this._width;
     }
 }
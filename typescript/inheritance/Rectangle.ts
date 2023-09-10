import { Shape } from "./shape";

 export class  Rectangle extends Shape{
   

     constructor(thex :string,they:string,private _length :number ,private _width :number){
         super( thex,they);
     }

     public getInfo():string {
        return  super.getInfo()+` ${this._length} ${this._width}`;
     }



     public calculateArea(): number {
        return this._length * this._width;
     }
 }
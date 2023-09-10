export  abstract class Shape{

    constructor( private _thex:string ,private _they:string){

    }

    public getInfo():string{

        return `${this._thex} ${this._they}`  


    }
    public  abstract calculateArea():number;
}
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-forms';
  listt:{name:string, email:string, degree:string}[]=[];
  getValue(data:{name:string, email:string, degree:string}){
    this.listt.push(data)
  }

}

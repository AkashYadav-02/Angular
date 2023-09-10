import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Input()  incomingData:any;
  // inputValue:string=''

  @Output() outEvent = new EventEmitter<{ movie: string, desc: string }>();
 inputValue: string = '';

 onSubmit(moviename: string, description: string) {
  // this.inputValue = `Movie: ${movie}, Description: ${desc}`;
   if(moviename.trim()==='' ){
    alert("please fill movie name")
   } 
   else  if(description.trim()==='' ){
    alert("please fill description")
   }else{

  this.outEvent.emit({movie:moviename,desc:description});
   }
}
}

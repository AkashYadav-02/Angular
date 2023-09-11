import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent {
  @Output() outEvent = new EventEmitter<{name:string, email:string, degree:string}>();
  onSubmit(form: NgForm){
    console.log(form);
    this.outEvent.emit({name:form.value.username, email:form.value.useremail, degree:form.value.useroption})
  }
}

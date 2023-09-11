import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'reacted-forms';
  genderList:string[]=['Male','Female']
  genders:string[]=['Male','Female']
  
  userForm!:FormGroup;
  invalidUserNames=['admin','users']

  ngOnInit():void{
    this.userForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, 
        Validators.minLength(5), Validators.maxLength(15),
        Validators.pattern("^[a-zA-Z ]*$"),
        this.inValidNames.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'number': new FormControl('', Validators.required),
      'gender': new FormControl('Male', Validators.required)
    })
  }

  onSubmit(){
  
    console.log(this.userForm);
  }

  inValidNames(control:FormControl):{[s:string]:boolean}{
    if(this.invalidUserNames.includes(control.value)){
      return {'invalidName':true};
    }
    return {}
  }

  onClickReset()
{
  this.userForm.reset();
}
}
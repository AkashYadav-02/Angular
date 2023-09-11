import { Component, OnInit } from '@angular/core'; 
import { FormGroup, FormControl, Validators } from '@angular/forms'; 
 
@Component({ 
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'] 
}) 
export class AppComponent implements OnInit { 
  onSubmit() { 
    
    console.log(this.userForm); 
  } 
  resetForm() { 
    this.userForm.reset 
  } 
 
  title = 'reactive-forms'; 
  genders: string[] = ['male', 'female']; 
  userForm!: FormGroup 
  invalidusername: string[] = ['admin ']; 
  ngOnInit(): void { 
    this.userForm = new FormGroup({ 
      'username': new FormControl(null, [Validators.required, Validators.minLength(4), 
        Validators.pattern(/^[a-zA-Z0-9]*$/),this.invalidNames.bind(this)]), 
      'email': new FormControl(null, [Validators.required, Validators.email]), 
      'number': new FormControl(null, Validators.required), 
      'gender': new FormControl('male', Validators.required) 
 
 
    }) 
 
 
  } 
  invalidNames(control:FormControl):{[s:string]:boolean}{ 
    if(this.invalidusername.includes(control.value)){ 
      return {'invalidNames':true} 
    } 
    return {'invalidNames':false};
  } 

  onClickReset()
{
  this.userForm.reset();
}}
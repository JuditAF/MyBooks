import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

 public loginForm: FormGroup;

 constructor (private formBuilder: FormBuilder) {
  this.buildForm();
}

public buildForm () {

  const minPassLength = 8;

  this.loginForm = this.formBuilder.group({
    email: [, [Validators.required, Validators.email]],
    password : [, [Validators.required, Validators.minLength(minPassLength)]],
  });
}

 public acceder (eMail: string, password: string) {
  const user = this.loginForm.value;
  console.log(user);
 };

}

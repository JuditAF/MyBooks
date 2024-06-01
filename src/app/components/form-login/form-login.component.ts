import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

 public loginForm: FormGroup;

 constructor (private formBuilder: FormBuilder) {
  // this.buildForm();
}

 public acceder (eMail: string, password: string) {

 };

}

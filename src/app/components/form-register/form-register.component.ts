import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

public registerForm: FormGroup;

constructor (private formBuilder: FormBuilder) {
  // this.buildForm();
}


  public register () {
    
  };

}

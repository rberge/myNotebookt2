import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private lgform: FormBuilder) {
    this.createForm();
}
createForm() {
  this.loginForm = this.lgform.group ({
    userid: '',
    password: ''
  });
}
}


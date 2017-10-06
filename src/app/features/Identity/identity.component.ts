import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-identity-root',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.css']
})
export class IdentityComponent implements OnInit {
  title = 'Who';

  rForm: FormGroup;
  post: any;                     // A property for our submitted form
  description: '';
  name: '';
  titleAlert: 'This field is required';

  constructor(private fb: FormBuilder) {

    this.rForm = fb.group({
      'name': [null, Validators.required],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      'validate' : ''
    });

  }

  ngOnInit() {

    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate === '1') {
          this.rForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = 'This field is required';
        } else {
          this.rForm.get('name').setValidators(Validators.required);
        }
        this.rForm.get('name').updateValueAndValidity();
      }
    );
  }

  addPost(post) {
    this.description = post.description;
    this.name = post.name;
  }

}



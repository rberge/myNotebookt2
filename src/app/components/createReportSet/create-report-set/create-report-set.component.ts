import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-report-set',
  templateUrl: './create-report-set.component.html',
  styleUrls: ['./create-report-set.component.css']
})
export class CreateReportSetComponent {
  title = 'Create Report Set';

    RptSetForm: FormGroup;

    constructor(private RptSetform: FormBuilder) {
      this.createForm();
  }
  createForm() {
    this.RptSetForm = this.RptSetform.group ({
      ReportSetDescription: '',
      encStartTime: '',
      encEndTime: '',
      encType: '',
      Medications: '',
      Problems: '',
      Allergies: ''
    });
  }

}

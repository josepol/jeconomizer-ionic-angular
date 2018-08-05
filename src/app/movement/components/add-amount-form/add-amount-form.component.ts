import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-amount-form',
  templateUrl: './add-amount-form.component.html',
  styleUrls: ['./add-amount-form.component.scss']
})
export class AddAmountFormComponent implements OnInit {

  public addMovementForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildAddMovementForm();
  }

  private buildAddMovementForm() {
    this.addMovementForm = this.formBuilder.group({
      description: ['', Validators.required],
      amount: ['', Validators.required]
    });
  }

}

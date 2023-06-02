import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  dynamicForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.dynamicForm = this.formBuilder.group({
      fields: this.formBuilder.array([]),
    });
  }

  get fields() {
    return this.dynamicForm.get('fields') as FormArray;
  }

  addField() {
    const fieldControl = this.formBuilder.control('', Validators.required);
    this.fields.push(fieldControl);
  }

  removeField(index: number) {
    this.fields.removeAt(index);
  }

  saveForm() {
    if (this.dynamicForm.valid) {
      console.log(this.dynamicForm.value);
    }
  }
}
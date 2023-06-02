import { Component, OnInit } from '@angular/core';
import { FormsComponent } from '../forms/forms.component';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-lab8',
  templateUrl: './lab8.page.html',
  styleUrls: ['./lab8.page.scss'],
})
export class Lab8Page implements OnInit {

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

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-task-reactive',
  templateUrl: './new-task-reactive.component.html',
  styleUrls: ['./new-task-reactive.component.scss']
})
export class NewTaskReactiveComponent {
  form: FormGroup;

  @Output()
  onNewTask = new EventEmitter<string>();

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      name: this.fb.control('', [Validators.required, Validators.minLength(5)])
    })
  }

  handleSubmit() {
   this.onNewTask.emit(this.form.value.name)
  }

  hasErrors(name: string) {
    const control = this.form.get(name);

    return control?.errors && control.touched
  }

  getErrors(name: string) {
    const control = this.form.get(name);

    if(!control || !control.errors) return {};
    
    return control.errors;
  }

}

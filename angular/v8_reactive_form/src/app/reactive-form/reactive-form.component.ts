import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
 form = new FormGroup({
   login: new FormControl('', [Validators.required, Validators.minLength(3)]),
   pwd: new FormControl('', [Validators.required, Validators.minLength(8)])
 }) 

 hasErrors(name: string) {
   const input = this.form.get(name);
   return input?.errors && input.touched;
 }

 getErrors(name: string) {
  const input = this.form.get(name);

  if(!input || !input.errors) return {};

  return input.errors
 }

 ngOnInit(): void {
   console.log(this.form);
  //  this.form.get('login').
  console.log(this.form.get('login')?.errors);
 }

 handleSubmit() {
   console.log('Sending reactive form with data', this.form.value);
 }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'app-reactive-form-fb',
  templateUrl: './reactive-form-fb.component.html',
  styleUrls: ['./reactive-form-fb.component.scss']
})
export class ReactiveFormFbComponent implements OnInit {

  constructor(private fb: FormBuilder) {

  }

  form = this.fb.group({
    login: this.fb.control('', [Validators.required, Validators.minLength(3)]),
    pwd: this.fb.control('', [Validators.required, Validators.minLength(8)])
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
    // this.form.valueChanges.subscribe(val => {
    //   console.log(val);
    // })

    // this.form.get('login')?.valueChanges.subscribe(val => {
    //   console.log(val);
    // })

    this.form.valueChanges.pipe(
      filter(val => {
        if(val.login.includes('@')) return true;
        return false
      }),
      map(val => val.login)
    ).subscribe(val => {
      console.log(val);
    })
 }

 handleSubmit() {
   console.log('Sending reactive form with data', this.form.value);
   this.form.setValue({ // musimy cały model danych przekazać
     login: '',
     pwd: ''
   })
  
  // this.form.patchValue({ // wystarczy że przekażemy jedną wybraną właściwość (lub więcej)
  //   pwd: ''
  // })

   this.form.markAsUntouched()
 }
}

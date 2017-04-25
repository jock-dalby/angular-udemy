import { Component, ViewChild } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  defaultName = "Jock";
  answer = '';
  genders = ['male', 'female'];

  @ViewChild('f') signupForm: NgForm;
  @ViewChild('userData') userData: FormGroup;


// using .setValue is not a great approach becaus ehave to pass it an object that is an exact replication of the existing js object.
// Therefore if there are already values in other fields they will be overwritten.

  // suggestUserName() {
  //   const suggestedName = 'Superuser';
  //   this.signupForm.setValue({
  //     userData: {
  //       name: suggestedName,
  //       email: ''
  //     },
  //     secret: 'pet',
  //     questionAnswer: '',
  //     gender: 'male'
  //   });
  // };

  // Better way. patchValue allows you to overwrite specific certain controls.

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({userData: {name: suggestedName}});
  }

  onSubmit() {
    console.log(this.signupForm);
    console.log(this.userData);
  }

// Passing form data only at time of submit. This is fine if you do not need access to data before submission, for validation etc.
  // onSubmit(f: NgForm) {
  //   console.log(f.value);
  // }

}

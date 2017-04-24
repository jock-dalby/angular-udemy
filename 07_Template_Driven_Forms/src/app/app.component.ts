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

  @ViewChild('f') signupForm: NgForm;
  @ViewChild('userData') userData: FormGroup;

  suggestUserName() {
    const suggestedName = 'Superuser';
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

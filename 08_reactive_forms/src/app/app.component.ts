import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];

  ngOnInit() {
    // Create a new FormGroup by passing an object of key:value pairs
      // Property names are wrapped in quotations to protect them during minification. This may not be necessary and without them the property names may not get destroyed, but just to be sure, we are wrapping them as strings.
     // We can pass FormControl up to 3 arguments (initialState, single validator/array of validators, async validators).
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      // When using validators or async validators we need to bind (this) if we use this in the function because as time of execution it will not have access to it.
      'email': new FormControl(null, [Validators.required, Validators.email, this.forbiddenEmails]),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });

    // Observable hooks can subscribe to if want to watch closely what happens on forms
    // #1
    this.signupForm.valueChanges.subscribe(
        (value) => console.log(value)
    );

    // #2
    this.signupForm.statusChanges.subscribe(
        (status) => console.log(status)
    );
  }

  usernameToJock() {
    // Change values on your form controls using TS. As this is called on init it will assign overwrite this object with the one one created above (so long as all the property names match up correctly). Warning: When using setValue you must pass an entire object and so any data on the existing signupForm obj will be overwritten. To just overwrite one properties value, use patchValue.
    this.signupForm.setValue({
      'userData': {
        'username': 'Jock',
        'email': ''
      },
      'username': '',
      'email': '',
      'gender': 'male',
      'hobbies': []
    });
  }

  usernameToNele() {
    this.signupForm.patchValue({
      'username': 'Nele'
    });
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  onDeleteHobby(i: number) {
    (<FormArray>this.signupForm.get('hobbies')).removeAt(i);
  }

  // forbidenNames is a validator and we want to pass it as an argument a formControl (for validation).
  // In return we expect to get a js obj as a key value pair, the key should be a string and the value, a boolean, represented by {[s: string]: boolean}
  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
    // do not return {'nameIsForbidden': false};
  }

  // async validator
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
       if (control.value === 'test@test.com') {
         resolve({'emailIsForbidden': true});
       } else {
         resolve (null);
       }
      }, 1500);
    });
    return promise;
  }

  onSubmit() {
    console.log(this.signupForm);
    // Empties all form data
    this.signupForm.reset();
  }
}

import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

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
     // We can pass FormControl up to 3 arguments (initialState, single validator/array of validators, potential async validators).
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      // When assigning this.forbiddenNames we need to bind (this) to it because as time of execution it will not have access to it.
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])

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

  onSubmit() {
    console.log(this.signupForm);
  }
}

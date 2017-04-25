import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];

  signupForm: FormGroup;

  ngOnInit() {
    // Create a new FormGroup by passing an object of key:value pairs
      // Property names are wrapped in quotations to protect them during minification. This may not be necessary and without them the property names may not get destroyed, but just to be sure, we are wrapping them as strings.
     // We can pass FormControl up to 3 arguments (initialState, single validator/array of validators, potential async validators).
    this.signupForm = new FormGroup({
      'username': new FormControl(null),
      'email': new FormControl(null),
      'gender': new FormControl('male')

    });
  }
}

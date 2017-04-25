import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projectForm: FormGroup;
  items = ['Stable', 'Critical', 'Finished'];
  forbiddenName = 'Test';
  forbiddenEmail = 'Test@test.com';

  ngOnInit() {
    this.projectForm = new FormGroup({
      name: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      status: new FormControl(null)
    });
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    let temp = control.value;
    if (temp) {
      temp = temp.toLowerCase();
    }
    if (temp === this.forbiddenName.toLowerCase()) {
      return {'nameIsForbidden': true};
    } else {
      return null;
    }
  }

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
    console.log(this.projectForm);
  }
}

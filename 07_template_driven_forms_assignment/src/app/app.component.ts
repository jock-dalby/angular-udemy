import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dropdownOptions = ["Basic", "Advanced", "Pro"];

  onSubmit(formData: NgForm) {
    console.log(formData.value);
  }

}

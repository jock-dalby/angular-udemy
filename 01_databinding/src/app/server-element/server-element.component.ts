import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Default setting for ViewEncapsulation
})
export class ServerElementComponent implements OnInit {

  // Define element as a property, assign it's type and key/value pairs. By default, all properties of components are only accessible inside the components. The @Input decorator enables parent components to bind to this property. The parenthesis call the input function and so must be included. You can put an alias inside the parenthesis if you wish to call the property something else where the binding takes place i.e. @Input('serverElement') would bind as [serverElement]='data' in parent component.
  @Input() element: {type: string, name: string, content: string};



  constructor() {
    console.log("constructor called");
  }

  ngOnInit() {
    console.log("ngOnInit called");
  }

}

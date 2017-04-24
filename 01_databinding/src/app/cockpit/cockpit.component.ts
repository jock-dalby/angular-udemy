import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  // EventEmitter is a generic type where we can define the type of data we plan to emit. The parenthesis at the end call the EventEmitter constructor function and create a new instance of EventEmitter. The @Output decorator makes the EventEmitter listenable from the outside the component. @Input allows parent component to pass in changes in data. @Output allows parent components to be sent out changes in data. The parenthesis call the @Output method and must be included. You can put an alias inside the parenthesis if you wish to call the EventEmitter something else where the listening takes place i.e. @Output('bpCreated') would be listened to as (bpCreated)='method($event)' in parent component.

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  // newServerName = ''; => Needed for 2 way binding
  // newServerContent = ''; => Needed for 2 way binding

  // Local reference @ ViewChild decorator. Allows you to access an element in the template through local references. See example with serverContentInput in addServer and add Blueprint methods.
    @ViewChild('serverNameInput') serverNameInput: ElementRef;
    @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput, contentInput) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput, contentInput) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

  // EventEmitter is a generic type where we can define the type of data we plan to emit. The parenthesis at the ned call the EventEmitter constructor function and create a new instance of EventEmitter. The @Output decorator makes the EventEmitter listenable from the outside the component. @Input allows parent component to pass in changes in data. @Output allows parent components to be sent out changes in data. The parenthesis call the @Output method and must be included. You can put an alias inside the parenthesis if you wish to call the EventEmitter something else where the listening takes place i.e. @Output('bpCreated') would be listened to as (bpCreated)='method($event)' in parent component.

  // @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  @Output() newNumber = new EventEmitter<number>();
  @Output() gameStopped = new EventEmitter();

  constructor() {
  }

  currentNumber = 0;

  gameOn;

  onStartGame() {
    this.gameOn =
        setInterval(() => {
      this.newNumber.emit(
        this.currentNumber
      );
      this.currentNumber++;
    }, 1000);
  }

  onPauseGame() {
    clearInterval(this.gameOn);
  }

  onStopGame() {
    clearInterval(this.gameOn);
    this.currentNumber = 0;
    this.gameStopped.emit();
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  handleNewNumber(currentNumber: number) {
    currentNumber % 2 === 0 ? this.evenNumbers.push(currentNumber) : this.oddNumbers.push(currentNumber);
  }

  handleGameStopped() {
    this.oddNumbers = [];
    this.evenNumbers = [];
  }
}

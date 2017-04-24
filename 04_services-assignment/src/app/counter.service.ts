export class CounterService {

  constructor() { }

  count = {
    activeToInactive: 0,
    inactiveToActive: 0
  };

  addActiveToInactive() {
    this.count.activeToInactive++;
    console.log(this.count);
  }

  addInactiveToActive() {
    this.count.inactiveToActive++;
    console.log(this.count);
  }
}

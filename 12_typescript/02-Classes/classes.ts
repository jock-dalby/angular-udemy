// Classes allow us to create 'blueprints' for objects
// In Angular 2 we use classes a lot. For example to create Components, Services, Directives, Pipes, ...

// How to create a class

class Car {
    engineName: string;
    gears: number;

    // private means this property is only accessible from within this class. Would not accept car.speed form outside this class. We can only access the speed property through a method which has access to this class e.g. getSpeed().
    private speed: number;

    constructor(speed: number) {
        this.speed = speed || 0;
    }

    accelerate(): void {
        this.speed++;
    }

    throttle():void {
        this.speed--;
    }

    getSpeed():void {
        console.log(this.speed);
    }

    // static means this method is callable without instantiating a new object, as per line 41.
    static numberOfWheels(): number {
        return 4;
    }
}

// Instantiate (create) an object from a class

let car = new Car(5);
car.accelerate();
car.getSpeed();

// Notice 'C' on car is capitalised, we are calling numberOfWheels() on the class, not on the object we instantiated.
console.log(Car.numberOfWheels());
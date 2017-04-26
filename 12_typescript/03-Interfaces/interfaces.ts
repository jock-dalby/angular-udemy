// Interfaces allow us to create contracts other classes/ objects have to implement
// We can use them to define custom types without creating classes
// Interfaces ARE NOT compiled to JavaScript! It's just for checking/ validation done by our TypeScript compiler

// Example interface

interface User {
    username: string;
    password: string;
    confirmPassword?: string; // ? means Optional property => Does not have to be implemented
}

let user:User;

// This value does not satisfy the interface => Compilation error
// user = { anything: 'anything', anynumber: 5};

// These value do satisfy the interface
user = {username: 'max', password: 'supersecret'};
user = {username: 'max', password: 'supersecret', confirmPassword: 'myPassword'};

// Interfaces can also contain functions (without the function body - as it only is a blueprint/ requirement)

interface CanDrive {
    // Here we describe what a function/method should look like when implementing the canDrive interface. It should have a method called accelerate, which takes a number as an argument, and does not return anything. As below.
    accelerate(speed:number): void;
}

// Here we create anew object 'car' of type 'CanDrive' and has a function called 'accelerate' which takes a number as an argument and does not return anything/

let car:CanDrive = {
    accelerate: function (speed:number) {
        // ...
        console.log(speed);
    }
};

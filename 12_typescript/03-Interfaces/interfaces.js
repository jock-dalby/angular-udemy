// Interfaces allow us to create contracts other classes/ objects have to implement
// We can use them to define custom types without creating classes
// Interfaces ARE NOT compiled to JavaScript! It's just for checking/ validation done by our TypeScript compiler
var user;
// This value does not satisfy the interface => Compilation error
// user = { anything: 'anything', anynumber: 5};
// These value do satisfy the interface
user = { username: 'max', password: 'supersecret' };
user = { username: 'max', password: 'supersecret', confirmPassword: 'myPassword' };
// Here we create anew object 'car' of type 'CanDrive' and has a function called 'accelerate' which takes a number as an argument and does not return anything/
var car = {
    accelerate: function (speed) {
        // ...
        console.log(speed);
    }
};
car.accelerate(5);

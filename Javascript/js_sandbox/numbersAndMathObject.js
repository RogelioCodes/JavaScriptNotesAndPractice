//Learning math functions

const num1 = 100;
const num2 = 50;
let val;

//Math example
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.8); // rounds to 3
val = Math.ceil(2.4); //ceil rounds up so 2.4 rounds to....
val = Math.floor(2.8); //rounds down, so this rounds to...
val = Math.sqrt(64); //square root.
val = Math.abs(-3); //returns absolute value
val = Math.pow(8, 2); //power function, read as 8 to the power of 4
val = Math.min(2, 33, 4, 1, 5, 6, 7, 3); //.min returns the minimum value
val = Math.max(2, 33, 4, 1, 5, 6, 7, 3); //returns max
val = Math.random(); //gives a random decimal between 0 and 1, in a lot of cases you want a random
//whole number, so instead we can try multiplying it by the max number we cant
val = Math.floor(Math.random() * 20 + 1); // this will return a random number between one and 19, to make it
//between one and 20 we add 1 to the 20.
//we wrap it in Math.floor to round down, thus eliminating the decimals
// this is very common in javascript
console.log(val);

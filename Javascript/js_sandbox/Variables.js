// var, let, and const all work

// var name = 'John Doe';
// console.log(name);

// name = 'Steve Smith';
// console.log(name);
// //you can reassign variables if you use var or let, not const

// // Init var this is called initializing
// var greeting; //
// /*
//     a lot of times we will initialize variables if we have to assign a value later
//     say for example if we have a condition if ... then greeting = 'hello'
// */
// console.log(greeting);//returns undefined
// greeting = 'Hello';
// console.log(greeting); 

//Rules and conventions
    /*
        Theres only a couple different things that a variable can include:
            letters, numbers, _, $
            cannot start with a number
            var 1name is an error
            var $name = 'John" ; //this is typically done when using JQuery
            and we are selecting things from the DOM which globally uses a money sign itself
            _name the underscore is typically used for private variables and more advanced JS
            _ is global for private variables
    */
// Multi word variables

// var firstName = 'John'; //Camel case convention REGULAR VARIABLES
// var first_name = 'Sara'; // Underscore convention, usually in php
// var FirstName = 'Tom'; //Pascal Case CONSTRUCTORS, CLASSES

// LET we can create a variable and then change it 
// let name; //we can also make it undefined
// let name = 'John Doe';
// console.log(name);

// name = 'Steve Smith';
// console.log(name);

//CONST cant be reassigned
// const name = 'John';
// console.log(name);
//name = 'Sara'; doesn't work 
//WE HAVE TO ASSIGN A VALUE 
//const greeting; //CAUSES ERROR

const person = {
    name: 'John',
    age: 30
}
person.name = 'Sara'; //We can change the stuff in the object we just can't reassign person
person.age = 32;
//console.log(person);

const numbers = [1,2,3,4,5];
numbers.push(6); //adds 6 to array 
//we can change arrays and objects that are assigned to variables using const, 
//we just cant redeclare and say numbers = [1,2,3,4,5,6]
//Whatever you assign it to does not have to stay the same we just can't redeclare

//Travis recommends using const unless we plan on
/*
    the value changing, 
    plan on initializing it,
    plan on using it on an iterator or a loop

    using const allows people reading your code to know that this variable shouldnt be reassigned 
    It can't be reassigned as a new primitive value but it can be mutated

    lets em know this value has to stay this value 
*/
console.log(numbers);
// Arrays and methods
// Create some arrays 
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null,  {a:1, b:1}, new Date()];
const chap = [{a:1, b:1}];

let val ;

// Get array length
val = numbers.length;

// check if is an array
val = Array.isArray(numbers);

// Get single value
val = numbers[3]; //returns number at index 3
val = numbers[0];

// We can modify arrays

// Insert into array
numbers[2] = 100; //insert 100 at index 2

// Find index of value
val = numbers.indexOf(36);
/*
// Mutating arrays
// Add on to end
numbers.push(250); //adds 250 at end of array

// Add to front
numbers.unshift(120); //inserts at start of array

// Take off from end
numbers.pop();

// Remove from the front
numbers.shift();

// Splice values
numbers.splice(1,3); //remove values from index 1 to 3

// Reverse array
numbers.reverse() ; 

*/
// Concatenate an array
val = numbers.concat(numbers2);

// Sorting arrays
//.sort() sorts by first number
val = fruit.sort();
//val = numbers.sort();

/*
// Use the "compare function"
val = numbers.sort(function(x,y){
    console.log("x: " + x);
    console.log("y: " + y);
    return x - y;
});


// reverse sort

val = numbers.sort(function(x,y){
    console.log("x: " + x);
    console.log("y: " + y);
    return y - x;
});
*/
// Find
//returns first num < 50
function under50(num){
    return num < 50 ;
}

function over50(num){
    return num > 50 ;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);
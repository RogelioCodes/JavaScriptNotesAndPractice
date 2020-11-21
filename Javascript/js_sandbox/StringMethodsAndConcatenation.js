//String Methods and Concatentation notes
const firstName = 'Bolo';
const lastName = 'Johnson';
const age = 23;
const str = 'Hello there my name is chap';
const tags = 'web design,web development,programming';
let val ; 

val = firstName + lastName ;

// Concatenation
val = firstName + ' ' + lastName ;

// Append
val = 'Bolo ';
val += 'Johnson';

val = `Hello, my name is ${firstName} and I am ${age}`;
val = 'Hello, my name is '+ firstName + ' and I am ' + age;

//Escaping
val = "That's awesome, I can't wait";
val = 'That\'s awesome, I can\'t wait';// the backslash makes the quote a regular character

// Length
val = firstName.length; //Since this is a property and not a method, we dont need ()
// paranthesis are for methods which are basically just functions

// concat
val = firstName.concat(' ', lastName); // firstName + ' ' + lastName
val = firstName.concat(firstName, lastName); // BoloBoloJohnson

// change case
val = firstName.toUpperCase();// converts all to upper case

console.log(val);
val = firstName.toLowerCase(); //converts ALL to lower

// traversing a string
val = firstName[3]

// indexOf() 
// BOLO 0123
// indexOf will return -1 if the substring is not there 
val = firstName.indexOf('o'); // will look for substring and return index of the first appearance of that sub string
console.log(val);
val = firstName.lastIndexOf('o'); //returns index of last occurence of substring

// charAt()
val = firstName.charAt('3');// returns the character at specified index, firstName[3]

// Get last char
val = firstName.charAt(firstName.length -1); //this method is very common and will always return the last string
// length returns length (4) so 4 - 1 = 3, our index goes from 0 to 3

// substring()
val = firstName.substring(0,2); //return substring from index 0 to 2

// slice() mostly used with arrays to pull things out of arrays but we can also use it for strings
val = firstName.slice(0,3); // returns substring from 0 to 3
val = firstName.slice(-3); //starts at end and returns last 3 characters


// split () can split a string into an array based on a separator
val = str.split(' '); // split based on space, returns ["Hello", "there", "my", "name", "is", "chap"]
val = tags.split(','); // split based on comma,  returns ["web design", "web development", "programming"]

// replace ()
val = str.replace('chap', 'John Doe'); //replaces substring with another subtring

// includes (), returns true or false depending on whether or not a string includes a substr
val = str.includes('Hello');
console.log(val);
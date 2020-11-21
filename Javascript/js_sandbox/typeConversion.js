let val;

// Number to string
val = String(555);//typecast
val = String(4+4);

// Boolean to string 
val = String(true);

// Date to string 
val = String(new Date());


// Array to string
val = String([1,2,3,4,5])

// toString()
val = (5).toString();
val= (true).toString();

// String to Number
val = Number('5');
val = Number(true); //returns 1
val = Number(false);//0
val = Number(null); //0
val = Number('hello');//returns NaN - not a number 
val = Number([1,2,3]);//returned when cant be parsed to number;

val = parseInt('100.23');//100.00 as a number.  converts its first argument to a string, parses that string, then returns an integer or NaN.
val = parseFloat('100.32');//if u want decimals use parseFloat
// Output
// console.log(val);
// console.log(typeof val);
// //console.log(val.length); //val.length only works on strings
// console.log(val.toFixed(2));//allows us to specify decimals

const val1 = String(5); 
const val2 = 6 ; 
const sum = Number(val1 + val2);//added and then converted to number

console.log(sum);//56
console.log(typeof sum);
const name = 'John';
const age = 23 ; 
const job = 'Web Developer';
const city = 'Miami';
let html ;
/*Usually we will have to insert HTML from JS
 So when we fetch data we will do that through JS and we will 
have to create some kind of HTML string with the HTML and with the dynamic data we want to insert

*/

// Without template strings (es5)
html = '<ul><li>Name: '+ name + '</li><li>Age: ' + age + ' </li><li>Job: ' + job + 
'</li><li>City: '+ city +' </li></ul>';

html =  '<ul>' + 
        '<li>Name: '+ name + '</li>' +
        '<li>Age: ' + age + ' </li>' +
        '<li>Job: ' + job + ' </li>' +
        '<li>City: ' + city + ' </li>' +
        '</ul>';


function hello(){
    return 'Hello';
}
// With template strings (es6)
html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${2+2}</li>
        <li>${hello()}</li> 
        <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
        <li></li>
    </ul>

`;
document.body.innerHTML = html;
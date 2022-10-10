// ----------------
// HELPER METHODS
// 
// document.write('hello world');
// alert('hello world');
// console.log('hello world');
// ----------------

// VID. 27 (CHALLENGE - VARIABLES #1)
/*
var firstName = "Don";
var last_name = "Nichols";
console.log(firstName, last_name);

var address = "Mains St.";
address = "First St.";
console.log(address);
*/

// -----------------------

// VID. 31 (CHALLENG - STRINGS + CONCATINATION #2)
/*
var street = "main street";
var country = "America";

var fullMailingAddress = street + ' ' + country;
console.log(fullMailingAddress);
*/

// ------------------------

// Number | Operators

// +=, -=, /=, *=, ++, --, %
// Modulus (%) operator returns the remainder after integer division
/*
// To get the Modulus of:
const slices = 10;
const children = 3;
const amount = slices % children;

console.log(amount);
*/

// ----------------------------

// VID. 33 (CHALLENG - NUMBERS #3)
/*
var score1 = 20;
var score2 = 50;
var score3 = 11;

const total = score1 + score2 + score3;
var average = total / 3;

console.log(total);
console.log(average);
// VID. 34 (CHALLENG - NUMBERS #3)
var plates = 20;
var people = 7;

var platesRemaining = plates % people;
platesRemaining++;
var message = "There are " + platesRemaining + " plates available."

console.log(message);
*/
// ------------------------------

// ======================
// ARRAYS

// Example:
// instead of creating individual variables; we can use an Array
/*
const friend1 = 'john';
const friend2 = 'peter';
const friend3 = 'bob';
const friend4 = 'susy';
const friend5 = 45;
const friend6 = undefined;
const friend7 = null;
*/
/*
const friends = ['john','peter','bob','susy',45,'undefined','null'];

let betstFriend = friends [2];
console.log(betstFriend); // displays: bob

console.log(friends [3]); // displays: susy

// re-assign a new value to an index:
// change index [1] peter => to mike
friends [1] = 'mike';
//console.log(friends);
*/
// VID. 38 ( CHALLENGE #4 - FRUITS ARRAY )

// 1. create "fruits" array and store some fruit values
// 2. setup the last item as number (random)
// 3. assign first fruit to the variable
// 4. re-assign last array item to the actual fruit
// 5. log both first fruit variable and entire fruits array
/*
const fruits = ['apple','orange','pear','lemon','35'];

const firstFruit = fruits[0];

fruits[4] = 'grape';
console.log(firstFruit, fruits);
*/

// ==========================

// FUNCTIONS - Declare, Invoke
// example 1-------
// declare th function: parameters goes in (). logic goes in {}.
/*
function hello() {
    // logic
    console.log('Hello don');
    console.log('Hello jenn');
    console.log('Hello tony');
};

// invoke (call) the function.
hello();
*/
// ------
// FUNCTIONS - Parameters, Arguments
// example 2-------
/*
function greet(name) {
    console.log('Hello there ' + name);
};


// greet don
greet('don');
// greet jenn
greet('jenn');
// greet tony
greet('tony');
*/
// ------


// FUNCTIONS - Return
// 1 inch = 2.54cm
/*
const wallHeight = 80;

function calculate(value){
   // const newValue = value * 2.54;
    return value * 2.54;
    // 
}

const width = calculate(100);
const height = calculate(wallHeight);

const dimensions = [width, height];
console.log(dimensions);
*/
// ------


// FUNCTIONS - Expressions

// expressions- another way to define a function
// create a variable, assign to FUNCTIOn (not value), use var
// diff - hoisting, use - arrow func, libraries
/*
// function definition/declaration
function addValues(num1, num2) {
    return num1 + num2;
}

const firstValue = addValues(3, 4);
const secondValue = addValues(12, 34);
// function expression
const add = function (num1, num2) {
    return num1 + num2;
};

// const thirdValue = add(5, 6);
const values = [firstValue, secondValue, add(5, 6)];
console.log(values);

// example of a simple Arrow Function
// const multiply = (num1, num2) => num1 * num2;
//
*/

//--------------
// FUNCTION ( CHALLENGE #5 )
/*

1. create "calculateTotal" function
2. add two parameters subTotal, tax
3. return sum of parameters

4. create 3 vars "order1", "order2", "order3"
5. call calculateResults, pass in some values and assign results to each order
6. log all three orders
7. refactor "calculateTotal" to funtion expression

*/
// Steps 1-3
function calculateTotal(subTotal, tax)
// the above refactored:
// const calculateTotal = function random(subTotal, tax)
{
    // const total = subTotal + tax;
    // return total;
    // -- another way to write the above:
    return subTotal + tax;
}
//console.log(calculateTotal(200, 20));

// Steps 4-7
const order1 = calculateTotal(100, 10);
const order2 = calculateTotal(50, 5);
const order3 = calculateTotal(25, 5);

console.log(order1, order2, order3);
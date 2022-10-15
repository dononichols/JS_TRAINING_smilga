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
*/

// =========================

// -----   OBEJECTS   ------
/*
// example of an Object: setup
const person = {
    name: 'john',
    lastName: 'peters',
    age: 40,
    education: false,
    married: true,
    siblings: ['anna','susan','peter'],
    greeting: function (){  // within the object, this is a method.
        console.log('Hello my name is John');
    }
};

// assign property values to a variable:
const age = person.age;
console.log(age);

// change the name property to = bob
person.name = 'bob';

// in order to access the properties or envoke the methods= calling name: => displays: john
console.log(person.name);
// access items in the objects Array:
console.log(person.siblings[1]);  // displays: susan, because we're calling the 1 index
// how to run the method in the object:
person.greeting();

//--------------
// OBJECT ( CHALLENGE #6 ) VID# 45
/*
1. create car object
2. add make, model, year, colors (array), hybrid (boolean) keys
3. add two methods (drive and stop)
4. in the function body setup log with random text
5. log make
6. log first color
7. invoke both methods


const car = {
    make: 'lexus',
    model: 'gs430',
    year: 2001,
    color: ['gray','silver','black'],
    hybrid: false,
    keys: true,
    drive: function (){ 
        console.log('press gas')
    },
     stop(){ 
        console.log('press brake')
    }
};

console.log(car.make);
console.log(car.color[0]);
car.drive();
car.stop();
*/

// ======================

// CONDITIONAL STATEMENTS

// >, <, >=, <=, ==, ===, !=, !===

// if the condition in the () is met, run the code in the {}
// example:
/*

if (true) {
    console.log('hello world');
}

another example:

if (2>1) {
    console.log('hello world');
}

- since 2 is bigger than 1 (a true statement), the code in the {} will run.
*/

/*
// example of conditional flow

const value = 2 > 1; // true
const value2 = 1 > 2; // false

if (value) {
    console.log('hello world');
} else {// if not true, run code below
    console.log('hello people');
}


const num1 = 6;
const num2 = 6;
const result = num1 >= num2;

const value = true;
*/

/*
if (num1 > num2) {
    console.log('first number is bigger than second');
} else if (result) {
    console.log('numbers are equal');
} else {// if not true, run code below
    console.log('second number is bigger than first');
}


// NOT statement

// if value is 'not true' !value, code will not run, because it is not true. if value = false, then that would make the statement (!value) 'true', so code would run.
if (!value) {
    console.log('value is true');
}


*/

// ======================

// EQUALITY

// CONDITIONAL STATEMENTS
// Comparison Operators
// >, <, >=, <=, ==, ===, !=, !===
// == checks only value
// === checks value and type
/*
 const num1 = 6;
 const num2 = 6;

// variables
const value = num1 == num2; // == means equality
const value2 = num1 === num2; // === means 

console.log(value);
console.log(value2);

*/
// ======================

// LOGICAL OPERATORS

// (|| - OR), (&& - AND), !
/*
const name = 'peter';
const age = 24;

if (name === 'bob'|| age === 24) {   // OR 
    console.log('hello there user');
} else {
    console.log('wrong value');
}
*/

// ---------

// --- SWITCH STATEMENTS  ---

// Switch statements are another way to write 'if and else'.
// dice values : 1-6
/*
const dice = 5;

// ---- using 'Switch Statement'
switch(dice) {
        case 1:
        console.log('you got one');
        break;
        case 2:
        console.log('you got two');
        break;
        case 3:
        console.log('you got three');
        break;
        default:
            console.log('you did not roll the dice');
}

*/


// ---  using 'else if' statement
/*
if (dice === 1) {
    console.log('you got one');
} else if (dice === 2) {
    console.log('you got two');
} else  {
    console.log('roll again');
}
*/

// ----- using all 'if' statements...this is'nt the best way to do this. See above for a better way ---
/*
if (dice === 1) {
    console.log('you got one');
}
if (dice === 2) {
    console.log('you got two');
}
if (dice < 1 || dice > 6) {
    console.log('roll again');
*/

// *******

//--------------
// CONDITIONALS ( CHALLENGE #7 ) VID# 51

/*

1. create two objects "person1" , "person2"
2. set name, age (15-25), status ('resident' , 'tourist') keys

3. setup if else, condition where
   age must be bigger than 18 and status must be equal to 'resident'
4. test with both objects
*/
/*
// objects using person1 and person2 --
const person1 = {
    name: 'susan',
    age: 25,
    status: 'resident',   
};

const person2 = {
    name: 'bobo',
    age: 17,
    status: 'tourist',   
};

if(person1.age >= 18 && person1.status === 'resident'){
    console.log('You can vote');
} else {
    console.log('Not eligeble to Vote, sorry');
}
*/

// ===================================

// *****   LOOPS ****** 

// repeatedly run a block of code while the condition is true.
// // turn off autosave in VS Code- to prevent endless loop crashes

// WHILE LOOPS ---
/*
let amount = 10;

while (amount > 0) {
    console.log('I have ' + amount + " dollars and I'm going to the mall");
    // create an escape for the loop
    amount--;
};
*/

//------

// DO WHILE LOOPS ---

// write code block first, condition second
// runs at least once
/*
let money = 0;

do{
    console.log('You have ' + money + ' dollars');
    money++;
} while (money < 10);
*/

// ----------

// FOR LOOPS ---

// example
/*
let i;
for(i = 0; i < 10; i++) {
    console.log(' and the number is : ' + i);
}

// ----

for(let number = 11;number >= 0;number--){
    console.log(' and the number is : ' + number);
}
*/

//------
// ============================================
// String properties and methods

// wrapper String Object, don't memorize methods
/*
let text = ' Peter Jordan';

let result = text.length;
console.log(result);

// -- PROPERTIES --
console.log(text.length);
// -- METHODS --
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(2)); // use this to target a specific index in an Array/String.
console.log(text.charAt(text.length - 1)); // displays the last index of a string/array
console.log(text.indexOf('e')); // indexOf will display the index number.(case sensitive)
console.log(text); // displays the whole string
console.log(text.trim()); // .trim will trim off any space at the beginning of a string
//console.log(text.startsWith(' Peter')); // returns a boolean. (case and space sensitive)

// How to chain these methods together...
console.log(text.trim().toLowerCase().startsWith('peter'));
console.log(text.includes('eter'));
console.log(text.slice(0, 2));
console.log(text.slice(-1)); // to get the index at the end of a string
*/


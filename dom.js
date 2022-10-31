// window object = browser api
// document
// console.dir

// -----------------------------------
//vid.91

// --- Get Element By ID ---

// Select the element or group of elements that we want
// Decide the effect we want to apply to the selection

// getElementById('element')
/*
const h1 = document.getElementById('title');
h1.style.color = 'red';

const btn = document.getElementById('btn');

btn.style.backgroundColor = 'blue';
btn.style.color = 'white';
*/
// -------------------------------------
//vid.92

// --- Get Element By Tag Name ---

// Select the element or group of elements we want
// Decide the effect we want to apply to the selection

// get ElementsByTagName('tagname');
//HTMLCollection = array-like object
// index, length property but not array methods (forEach)

// querySelectorAll() in most cases -returns a none list
// NodeList - objects are collections of nodes
// can run forEach
// turn them into array - spread operator [...]
// after that can use any array properties

const headings = document.getElementsByTagName('h2');
headings[0].style.color = 'red';
// console.log(headings.length);

const items = document.getElementsByTagName('li');
items[2].style.color = 'orange';
const betterItems = [ ...items]

betterItems.forEach(function(item){
    console.log(item);
});

console.log(items);
console.log(betterItems);

// ----------------------------------------
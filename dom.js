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
/*
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

*/
// ----------------------------------------
// vid.93

// GET ELEMENTS BY CLASS NAME

// Select the element or group of elements that we want
// Decide the effect we want to apply to the selection

// getElementByClassName('classname');

// HTMLCollection
/*

const listItems = document.getElementsByClassName('special');
listItems[2].style.color = 'blue'; // how to target an item
console.log(listItems);
*/

// ----------------------------------------
//vid.94

// QUERY SELECTOR and QUERY SELECTOR ALL

// Select the element or group of elements that we want
// Decide the effect we want to apply to the selection

// querySelector('any css'); - selects single
// querySelectorAll('any css') - selects all
/*
// Query Selector
const result = document.querySelector('#result');
result.style.backgroundColor = 'blue';

// to target last specific item using querySelectro
const lastItem = document.querySelector('li:last-child'); //tomato is the last item
// console.log(lastItem); 

// Query Selector All
const list = document.querySelectorAll('.special');
// console.log(list);

list.forEach(function(item){
    console.log(item);
    item.style.color = 'red';
});

*/
// ----------------------------------------
// vid.95

// NAVIGATE THE DOM  -  Children

// Select the element or group of elements that we want
// Decide the effect we want to apply to the selection

// childNodes - returns all childNodes including whitespace whick is treated as a text node

// children
// firstChild
// lastChild

/*
// target the "result" id, then navigate the li list/ Dom tree

// this selects the id "result"
const result = document.querySelector('#result');

// this selects the children
// children
const children = result.children;
console.log(children);

// firstChild
console.log(result.firstChild); //
// lastChild
console.log(result.lastChild); //

*/
// ----------------------------------------
// vid.96

// NAVIGATE THE DOM - Parent Element

const heading = document.querySelector('h2');
// console.log(heading.parentElement); // target one parent element

// console.log(heading.parentElement.parentElement.parentElement); //chaining to navigate the tree

// because the style is added to the parent and not the element, everything added within that parent will recieve that style.
const parent = heading.parentElement;
parent.style.color = 'red';

// ----------------------------------------
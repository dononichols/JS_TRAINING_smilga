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

/*
const heading = document.querySelector('h2');
// console.log(heading.parentElement); // target one parent element

// console.log(heading.parentElement.parentElement.parentElement); //chaining to navigate the tree

// because the style is added to the parent and not the element, everything added within that parent will recieve that style.
const parent = heading.parentElement;
parent.style.color = 'red';

*/
// ----------------------------------------
//vid.97

// Navigate the DOM - 

// nextSibling, previousSibling
// return whitespace

/*
const first = document.querySelector('.first'); 
// console.log(first);
// const second = first.nextSibling;
//console.log(second); // displays the white space...text
const second = first.nextSibling.nextSibling.style.color = 'red';
console.log(second);

const last = document.querySelector('#last');
const third = last.previousSibling.previousSibling;
console.log(third);

*/
// ----------------------------------------
// vid.98

// Navigate the DOM -

// nextElementSigling
// previousElementSibling

/*
const first = document.querySelector('.first'); 
first.nextElementSibling.style.color = 'red';
const last = document.querySelector('#last');
*/

// -----------------------------------------
//vid.99

// TEXT CONTENT & NODE VALUE

// textContent & nodeValue = allow us to access the text content inside of an element

/*
// nodeValue & textContent
const item = document.getElementById('special');
const value = item.firstChild.nodeValue;
const easyValue = item.textContent;

console.log(easyValue);

*/
// -----------------------------------------
// v.100

// getAttribute()  setAttribute()

/*
const first = document.querySelector('.first');
const idValue = first.getAttribute('id');
// console.log(idValue);

const link = document.getElementById('link');
const showLink = link.getAttribute('href');
console.log(showLink);

// dynamically set the attribute
const last = link.nextElementSibling;
last.setAttribute('class','first');
last.textContent = 'i also have a class of first';
console.log(last);



const links = document.querySelectorAll('.first');
console.log(links);

*/
// -----------------------------------------
// vid.101

// classList and className

//
/*
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
//
//const classValue = first.className;
// console.log(classValue); // displays the class name
//
second.className = 'colors text'; // this method dynamically adds the colors class to the second. className only allows you to add one class at a time...the last class. if you want to add more than one class to a row, use the classList.
//
// third.classList.add('colors'); // adds colors class to the third element

//to add multiple classes
third.classList.add('text', 'colors');// add class
third.classList.remove('colors');// remove class

// ***
let result = third.classList.contains('colors');
if(result){
    console.log('hell0 world');
} else {
    console.log('missing color class')
}


const classValue = third.classList;
console.log(classValue);

*/
// -----------------------------------------
// vid.102

// createElement ('element')
// createTextNode ('text content')
// appendChild ('childElement')

// add elements dynamically
/*
// select "result"
const result = document.querySelector('#result');
// create an empty element
const bodyDiv = document.createElement('div');
// create text node
const text = document.createTextNode('a simple body div');
bodyDiv.appendChild(/text);
document.body.appendChild(bodyDiv);
//

const heading = document.createElement('h2');
const headingText = document.createTextNode('dynamic heading');
heading.appendChild(headingText);
heading.classList.add('blue');

result.appendChild(heading);


console.log(result.children);

*/
// ---------------------------------------
// vid.103
 
// insertBefore('element','location' );

// insertBefore requires two arguments: the 'element' and the 'location'...meaning: before which element, would you like to insert your dynamic element?
/*
// select "result"
const result = document.querySelector('#result');
const first = document.querySelector('red');
// create an empty element
const bodyDiv = document.createElement('div');
// create text node
const text = document.createTextNode('a simple body div');
bodyDiv.appendChild(text);
document.body.insertBefore(bodyDiv, result); // adds in body, before the result
//

const heading = document.createElement('h2');
const headingText = document.createTextNode('dynamic heading');
heading.appendChild(headingText);
heading.classList.add('blue');

result.insertBefore(heading, first);

console.log(result.children);

*/
// ---------------------------------
// vid.104

// --- replaceChild -----

// replaceChild('new', 'old'); ...takes two arguments: the 'new' element we'll be adding. and the 'old' element. the element we'll be replacing with the new element.

/*
// select "result"
const result = document.querySelector('#result');
const first = document.querySelector('red');
// create an empty element
const bodyDiv = document.createElement('div');
// create text node
const text = document.createTextNode('a simple body div');
bodyDiv.appendChild(text);
document.body.insertBefore(bodyDiv, result); // adds in body, before the result
//

const heading = document.createElement('h2');
const headingText = document.createTextNode('dynamic heading');
heading.appendChild(headingText);
heading.classList.add('blue');

result.insertBefore(heading, first);

// create h6 element, place text in it, add a class of 'red' to it, add smallText to smallHeading,
const smallHeading = document.createElement('h6');
const smallText = document.createTextNode(`i'm a small heading text. `);
smallHeading.classList.add('red')
// add smallText to smallHeading
smallHeading.appendChild(smallText);
document.body.replaceChild(smallHeading,bodyDiv); // replaced original bodyDiv with smallHeading

console.log(result.children);

*/
// ----------------------------------
//vid.105

// --- prepend and innerText ---

// prepend

// innerText

// insert a 'h2' in front of the 'first heading'
// first, create a new element
const heading = document.createElement('h2');
heading.innerText = `i am a dynamic heading`; // innerText
document.body.prepend(heading); // innerText


// -----------------------------------


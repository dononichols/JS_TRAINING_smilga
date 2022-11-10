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

/*
// insert a 'h2' in front of the 'first heading'
// first, create a new element
const heading = document.createElement('h2');
heading.innerText = `i am a dynamic heading`; // innerText
document.body.prepend(heading); // innerText

*/
// -----------------------------------
// vid. 106

// remove
// removeChild

// remove elements from the DOM
/*
const result = document.querySelector('#result');
// result.remove(); // remove...

const heading = result.querySelector('h1');
result.removeChild(heading);
console.log(heading);

*/
// -------------------------------
// vid.107

// innerHTML
// textContent
/*
const list = document.getElementById('first');
const div = document.getElementById('second');
const item = document.querySelector('.item');

console.log(div.textContent); // displays the text content in the div // returns text in that element

console.log(list.innerHTML); // innerHTML returns all the html within that element.. in this case, the list element

// create another list
const ul = document.createElement('ul'); // creates an element of ul
ul.innerHTML = ` <li class="item">list item</li>
<li>list item</li>`; // gives ul a container to hold the html
// append
document.body.appendChild(ul);

*/
// ------------------------------------
// vid.108

// Change CSS with style property
/*
const random = document.querySelector('.random');
// console.log(random.style); // displays a list of CSS styles that you can manipulate. HOWEVER, the downside to this method is that you are adding properties One by One.
// requires to many lines
// random.style.backgroundColor = 'blue';
// random.style.color = 'white';
// random.style.fontSize = '3rem';
// random.style.textTransform = 'capitalize';

random.classList.add('title'); // using this method, we'r able to add all styles at once

*/
// ---------------------------------
// vid.110

// --- Click Events ----

// 3 core principles

// select element
// addEventListener()
// what event, what to do
/*
// select the button
const btn = document.querySelector('.btn');
const heading = document.querySelector('h2');

btn.addEventListener('click',function(){
    heading.classList.add('red');
})

*/
// ---------------------------------
// vid.111

// Function Reference

/*
const btn = document.querySelector('.btn');
const heading = document.querySelector('h2');

// add and remove the 'red' class to change colors
function changeColors() {
  let hasClass = heading.classList.contains('red');
  if(hasClass){
    heading.classList.remove('red');
  }
  else {
    heading.classList.add('red');
  }

}

btn.addEventListener('click', changeColors);

*/
// ---------------------------------
// vid.112

// Mouse Events

// click - fires after full action occurs
// mousedown - button is pressed
// mouseup - button is released
// mouseenter - move onto an element
// mouseleave - move out of an element
/*

// select the h1 and the button
const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');

//
btn.addEventListener('click', function(){
    console.log('you CLICKED me');
});

//
btn.addEventListener('mousedown', function(){
    console.log('DOWN !!!');
});

//
btn.addEventListener('mouseup', function(){
    console.log('UP !!!!');
});

// --
// type of hover 
heading.addEventListener('mouseenter', function(){
    heading.classList.add('blue');
});
//
heading.addEventListener('mouseleave', function(){
    heading.classList.remove('blue');
});

*/
//--------------------------------------------
// vid.113

// KEY EVENTS

// keypress - when key is pressed
// keydown - when key is down
// keyup - when key is released
/*
const nameInput = document.getElementById('name');

//key Press - when key is pressed
nameInput.addEventListener('keypress', function(){
    console.log('you pressed a key');
});


//key Down - when key is pressed down
nameInput.addEventListener('keydown', function(){
    console.log('you pressed a key');
});

//key Up - when key is released
nameInput.addEventListener('keyup', function(){
    console.log('you pressed a key');
});
*/

// -----------------------------------
//v.114

// --- Event Object ---

// event object argument e, evt
// info about triggered event
// event.type
// event.currentTartget
// this keyword ...try not to use this, until u have more expreience
// preventDefault() - prevents default behaviour


// select the h1 and btn, and created a variable
// const heading = document.querySelector('h1');
// const btn = document.querySelector('.btn');
// const link = document.getElementById('link');

// add an eventListener to listen for the click
/*
heading.addEventListener('click',function(event){
    console.log(event.currentTarget);
});
*/
/*
btn.addEventListener('click',function(event){
    event.currentTarget.classList.add('blue'); // didnt display blue ?
    console.log(event.type);
});

function someFunc(e){
    e.preventDefault(); // the default action is, when you click the link, it scrolls to the top of page. 'preventDefault' prevents that from occuring.
}

link.addEventListener('click', someFunc); // ?

*/
// ---------------------------------------
//vid.115

// --- CurrnetTarget vs. Target --- (these are event objects)

// currentTarget - always refers to the element to which the event handler has been attached to

// target - indentifies the element on which the event occured
/*
// select all the buttons
const btns = document.querySelectorAll('.btn');

// add a green color to whatever button we click on
btns.forEach(function(btn){
    btn.addEventListener('click',function(e){

        // console.log(e.currentTarget); // currentTarget
        // e.currentTarget.style.color = 'green';

        console.log('target',e.target);
        console.log('currentTarget',e.currentTarget); // targets the specific element clicked, not just all the items in the elements. used to target nested elements
        e.target.style.color = 'yellow';
    });
});

*/
// ---------------------------------------
//vid.116

// --- Event Propagation - Bubbling - Capturing ---

// ** allows select dynamic elements **
// event propogation - order the events are fired
// event bubbling - clicked element first then bubbles up-default
// event capturing - fires at the root and fires until reaches target
/*
const container = document.querySelector('.container');
const list = document.querySelector('.list-items');

function showBubbling(e){
    console.log('current target', e.currentTarget);
    console.log('target', e.target);

    if(e.target.classList.contains('link')){
        console.log('this is a linnk');
    }
};

function stopPropagation(e) {
    console.log('you clicked on list');

    e.stopPropagation();
}


list.addEventListener('click', showBubbling);
// other examples:
// container.addEventListener('click', showBubbling);
// document.addEventListener('click', showBubbling);
// window.addEventListener('click', showBubbling);

*/
// ------------------------------------
//vid.117

// -- Event Propagation Example --

// ** allows select dynamic elements **
// event propogation - order the events are fired
// event bubbling - clicked element first then bubbles up-default
/*
// selecting...
const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
//const heading = document.querySelector('.heading');

function sayHello(){
    console.log('hello there!');
}

//add heading dynamically
btn.addEventListener('click',function(){
    const element = document.createElement('h1');
    element.classList.add('heading');
    element.textContent = `i'm inside of the container`;
    container.appendChild(element);
});

// set up function for the container
container.addEventListener('click',function(e){
    if(event.target.classList.contains('heading')) {
        console.log('hello there?');
    }
})

// heading.addEventListener('click', sayHello);

*/
// --------------------------------------
//vid. 118

// --- FORMS ---

// submit event listener
// prevent default
// how to get a value
/*
const form = document.getElementById('form');
const name = document.getElementById('name');
const submit = document.getElementById('submit');
const password = document.getElementById('password');

form.addEventListener('submit', function(e){
    e.preventDefault(); // prevents form from trying to send output to the server, whick causes it not to be stored in the console log.
    console.log('form submitted');
    //
    console.log(name.value);
    console.log(password.value);
});

*/
// --------------------------------------
//vid.119

// Local Storage

// Web Storage API - provided by browser
// session storage, local storage
// setItem - getItem - removeItem - clear

// localStorage.setItem('name', 'john');
// sessionStorage.setItem('name', 'john');
/*
localStorage.setItem('name', 'john');
localStorage.setItem('friend', 'peter');
localStorage.setItem('job', 'developer');
localStorage.setItem('address', 'street 123');

const  name = localStorage.getItem('name');
console.log(name);

// to remove item-removes the key 'name'
localStorage.removeItem('name');

// clear the local storage
localStorage.clear();

*/
// --------------------------------------
//vid.120

// -- Local Storage with Multiple Values --

// JSON.stringify(), JSON.parse() --use these when storing anything more complex than a string in order to maintain the data structure
/*
const friends = ['john','peter','bob'];

localStorage.setItem('friends', JSON.stringify(friends));

const Values = JSON.parse(localStorage.getItem('friends'));
console.log(Values[0]);

//

// how to check if value is already in local storage. if it is, we will sign it, if it's not, then we'll have an empty array

let fruits;

if(localStorage.getItem('fruits')){

    fruits = JSON.parse(localStorage.getItem('fruits'));
}
else{
    fruits = [];
};

console.log(fruits);
// add value to fruits[]
fruits.push('apple');
// push fruits array[] to local storage
localStorage.setItem('fruits',JSON.stringify(fruits));

*/
// --------------------------------------
//vid.121

// --- setTimeout ---

// setTimeout - runs functions once, after specific time

// - pass function reference
// - duration in ms (1000 ms = 1 second)
// - default 0, will cover more extensively in async/await section
// - returns unique identifier
// - clearTimeout to cancel
// - on window object

function sayHello() {
    console.log('hello john');
}

// sayHello is the reference, and 1000 is the delay time.
setTimeout(sayHello,3000);

// this method of invoking the function() will not work
// setTimeout(sayHello(),3000);

// alternative approach...use this
// ES6 arrow functions

// setTimeout(function(){
//     console.log('hellow Don');
// }, 5000); 
   
//pass arguments
function showScore(name,score){
    console.log(`hello ${name}, your score is ${score}`);
}

//setTimeout(showScore, 1000, 'john', 34);

const firstID = setTimeout(showScore, 1000, 'john', 34);
const secondID = setTimeout(showScore, 1000, 'peter', 88);

console.log(firstID);
console.log(secondID);

// stops the firstID from running
clearTimeout(firstID);

// --------------------------------------
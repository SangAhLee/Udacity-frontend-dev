/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu
const navbar_element = document.getElementById('navbar__list');

//const fragment = document.createDocumentFragment();

var newElement = '';
for (let i = 1; i <= 4; i++) {
    newElement = newElement + '<li><a href="#Section' + i + '"></li>';
    
/*
    const linka = document.createElement('a');
    newElement.append('<a href="#Section"+i>''Section''+i</a>'); */
    
 // newElement.addEventListener('click', function moveToAnchor(event){

  //  fragment.appendChild(newElement);
    console.log('Navigation Section'+i);
}
navbar_element.innerHTML = newElement;

/*

const links = document.querySelectorAll('input');
const thirdField = links[2];

thirdField.addEventListener('keypress', function handleKeyPresses(event) {
    console.log('a key was pressed');
});




navbar_element.appendChild(fragment);


const links = document.querySelectorAll('a');
const thirdLink = links[2];

thirdLink.addEventListener('click', function (event) {
    event.preventDefault();
    console.log("Look, ma! We didn't navigate to a new page!");
});



function showDetails(animal) {
    var animalType = animal.getAttribute("data-animal-type");
    alert("The " + animal.innerHTML + " is a " + animalType + ".");
}
*/


// Scroll to section on link click

// Set sections as active


document.addEventListener('click', function(){
    console.log('I am a cucumberpooh!')
});
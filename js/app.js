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
var nav = document.createElement("nav");


// Add class 'active' to section when near top of viewport

function active(clicked_id) {
    var elements = document.getElementsByClassName("your-active-class");

    console.log(elements);

    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove('your-active-class');
    }

    console.log("clicked id = " + clicked_id);
 
    var element2 = document.getElementById(clicked_id);
    element2.classList.add("your-active-class");
}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu
const navbar_element = document.getElementById('navbar__list');

var fragment = document.createDocumentFragment();


for (let i = 1; i <= 4; i++) {
  //  newElement = newElement + '<li><a href="#Section' + i + '"></li>';
  var newElement = document.createElement("li");
 newElement.innerHTML = '<a href="#Section ' + i+ '">';
 newElement.innerText = 'Section ' + i;
 newElement.classList.add("menu__link");

 console.log(newElement.innerHTML + ' ---' + i);
    /*
        const linka = document.createElement('a');
        newElement.append('<a href="#Section"+i>''Section''+i</a>'); */

    newElement.addEventListener('click', function moveToAnchor(event){
        var nav_clicked = event.target;

        var sections_list = document.getElementsByTagName('section');
        console.log('sections_list =' + sections_list + '  length=' + sections_list.length);
        for(var i=0; i<sections_list.length; i++) {           
            console.log('sections_list[' + i + '].dataset.nav = ' + sections_list[i].dataset.nav);
            if(sections_list[i].dataset.nav == nav_clicked.innerText) {
                sections_list[i].scrollIntoView(true);
                break;
            }
        }    
    });

    fragment.appendChild(newElement);

    console.log('Navigation Section' + i);
}
//navbar_element.innerHTML = newElement;
navbar_element.appendChild(fragment);
/*

const links = document.querySelectorAll('input');
const thirdField = links[2];

thirdField.addEventListener('keypress', function handleKeyPresses(event) {
    console.log('a key was pressed');
});



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

/* don't knowwwww
var sections = document.getElementsByName("section");
for(var i=0; i<sections.length; i++) {
    sections[i].class
}
*/

/*
document.addEventListener('click', function(){
    console.log('I am a cucumberpooh!')
});
*/
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
const sections = document.getElementsByTagName('section');
const navbar_element = document.getElementById('navbar__list');
const menus = document.getElementsByClassName('menu__link');

const NONE = -1;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

document.addEventListener("DOMContentLoaded", function () {
    setMenusClickEvent();
});

function setMenusClickEvent() {
    for (let i = 0; i < sections.length; i++) {
        menus[i].addEventListener('click', function click_nav(event) {
            moveToAnchor(event);
        });
    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Add class 'active' to section when near top of viewport

window.addEventListener('scroll', function (event) {
    for (let i = 0; i < sections.length; i++) {
        if (isInViewport(sections[i])) {
            // setting the "active" status
            setActiveClass(i);
        }
    }
}, false);

let isInViewport = function (elem) {
    let bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// Scroll to anchor ID using scrollTO event
function moveToAnchor(event) {
    let nav_clicked = event.target;

    for (let i = 0; i < sections.length; i++) {
        if (sections[i].dataset.nav == nav_clicked.innerText) {
            setActiveClass(i);
            sections[i].scrollIntoView({ behavior: "smooth" });
            break;
        }
    }
}

function setActiveClass(count) {

    for (let i = 0; i < sections.length; i++) {
        menus[i].classList.remove("active");
        sections[i].classList.remove("your-active-class");
    }
    if (count != NONE) {
        menus[count].classList.add("active");
        sections[count].classList.add("your-active-class");
        console.log('[Active] Section' + count);
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build navbar

let fragment = document.createDocumentFragment();

for (let i = 1; i <= sections.length; i++) {
    let newElement = document.createElement("li");
    newElement.innerHTML = '<a href="#Section ' + i + '">';
    newElement.innerText = 'Section ' + i;
    newElement.classList.add("menu__link");

    fragment.appendChild(newElement);
    console.log('[UI] Navbar Created: Section' + i);

    if (1 == i) {
        newElement.classList.add("active");
    }
}
navbar_element.appendChild(fragment);
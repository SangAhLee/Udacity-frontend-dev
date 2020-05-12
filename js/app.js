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
var sections_list = document.getElementsByTagName('section');
const navbar_element = document.getElementById('navbar__list');

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

// Add class 'active' to section when near top of viewport

document.addEventListener("DOMContentLoaded", function () {
    func_active();
});

function func_active() {

    var menus = document.getElementsByClassName('menu__link');

    for (let i = 0; i < 4; i++) {
        console.log(i);
        menus[i].addEventListener('click', function click_nav(event) {
            var sub_menus = document.getElementsByClassName('menu__link');
            for (let j = 0; j < 4; j++) {
                sub_menus[j].classList.remove("active");
            }


            var nav_clicked = event.target;
            nav_clicked.classList.add("active");
            console.log('[active]' + nav_clicked.innerText);


        });
    }
    /*
    navbar_li.addEventListener('click', function click_nav(event){
        
        var nav_clicked = event.target;

        console.log('hey ' + event.target);
     /*   for(i=0; i<navbar_li.length; i++) {
            navbar_li[i].classList.remove("active");            
        }
        navbar_li.removeClass("active");
     
        this.classList.add("active");
    }); */
}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu

var fragment = document.createDocumentFragment();


for (let i = 1; i <= 4; i++) {
    //  newElement = newElement + '<li><a href="#Section' + i + '"></li>';
    var newElement = document.createElement("li");
    newElement.innerHTML = '<a href="#Section ' + i + '">';
    newElement.innerText = 'Section ' + i;
    newElement.classList.add("menu__link");

    /*
        const linka = document.createElement('a');
        newElement.append('<a href="#Section"+i>''Section''+i</a>'); */

    newElement.addEventListener('click', function moveToAnchor(event) {
        var nav_clicked = event.target;

        for (var i = 0; i < sections_list.length; i++) {
            if (sections_list[i].dataset.nav == nav_clicked.innerText) {
                console.log('[MoveTo]' + sections_list[i].dataset.nav);
                sections_list[i].classList.add("your-active-class");
                sections_list[i].scrollIntoView({ behavior: "smooth" });
            } else {
                sections_list[i].classList.remove("your-active-class");
            }
        }
    });

    fragment.appendChild(newElement);

    console.log('[Nav bar Created] Section' + i);
}
//navbar_element.innerHTML = newElement;
navbar_element.appendChild(fragment);
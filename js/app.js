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
const sections = document.querySelectorAll("section");
let unorderList = document.getElementById("navbar__list");
const newfragment = document.createDocumentFragment();

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

sections.forEach((section) => {
    const newItem = document.createElement("a");
    const itemLink = section.getAttribute("data-nav");
    newItem.innerHTML = itemLink;
    let listItem = document.createElement("li");
    listItem.appendChild(newItem);
    newfragment.appendChild(listItem);
    newItem.addEventListener("click", () => {
        listItem.classList.remove("activLink");
        listItem.classList.add("activLink");
        event.preventDefault();
        section.scrollIntoView({ behavior: "smooth" });
    });
});

unorderList.appendChild(newfragment);
// Add class 'active' to section when near top of viewport
// Scroll to anchor ID using scrollTO event
/**
 * End Main Functions
 * Begin Events
 *
 */
// to know when the view change
window.addEventListener("scroll", () => {
    sections.forEach((active) => {
        const react = active.getBoundingClientRect();
        if (react.top >= 0 && react.top <= 200) {
            // add the new
            sections.forEach((section) => {
                section.classList.remove("your-active-class");
            });
            active.classList.add("your-active-class");
            active.style = "background-color: red;";
        }
        let activeLink = document.querySelectorAll("a");
        activeLink.forEach((link) => {
            if (link.textContent == active.getAttribute("data-nav")) {
                link.classList.remove("your-active-class");

                link.classList.add("your-active-class");
            }
        });
    });
});
// Build menu
// Scroll to section on link click
// Set sections as active
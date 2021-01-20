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
const sections = document.querySelectorAll("section");
const newfragment = document.createDocumentFragment();
let unorderList = document.getElementById("navbar__list");

sections.forEach((section) => {
    const newItem = document.createElement("a");
    const itemLink = section.getAttribute("data-nav");
    newItem.innerHTML = itemLink;
    let listNewItem = document.createElement("li");
    listNewItem.appendChild(newItem);
    newfragment.appendChild(listNewItem);
    newItem.addEventListener("click", () => {
        event.preventDefault();
        section.scrollIntoView({ behavior: "smooth" });
    });
});
// to know when the view change
window.addEventListener("scroll", () => {
    sections.forEach((active_sec) => {
        const react = active_sec.getBoundingClientRect();
        if (react.top >= 0 && react.top <= 200) {
            // remove the old one
            active_sec.classList.remove("your-Active-class");
            // add the new
            //itemLink = section.getAttribute("data-nav");
            active_sec.classList.add("your-Active-class");
        }
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
// Build menu
// Scroll to section on link click
// Set sections as active
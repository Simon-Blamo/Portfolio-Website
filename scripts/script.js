import {
    Carousel,
    Collapse,
    Dropdown,
    Modal,
    Ripple,
    initTE,
} from "../node_modules/tw-elements/dist/js/tw-elements.es.min.js";

initTE({ Collapse, Dropdown, Carousel, Ripple, Modal });

const home = document.getElementById('homeLink');
const about = document.getElementById('aboutLink');
const project = document.getElementById('projectLink');
const contact = document.getElementById('contactLink');
let homeHeight = document.getElementById('home').offsetHeight;
let aboutHeight = document.getElementById('about_me').offsetHeight;
let projectHeight = document.getElementById('projects').offsetHeight;
let contactHeight = document.getElementById('contact_me').offsetHeight;




var typed = new Typed('#dynamic', {
    strings: ['Software Engineer.', 'Web Developer.', 'Cyber-Security Specialist.'],
    typeSpeed: 65,
    backSpeed: 50,
    backDelay: 1300,
    loop: true,
    loopCount: Infinity,
});


window.addEventListener('scroll', function(){
    let windowWidth = window.innerWidth;
    if(windowWidth > 767){
        var scrolled = window.scrollY;
        if((scrolled > homeHeight) && (scrolled <= (homeHeight + aboutHeight))){
            home.classList.remove("active")
            about.classList.add("active")
            project.classList.remove("active")
            contact.classList.remove("active")
        } else if ((scrolled > (homeHeight + aboutHeight)) && (scrolled <= (homeHeight + aboutHeight + (projectHeight - (4.45 * contactHeight))))){
            home.classList.remove("active")
            about.classList.remove("active")
            project.classList.add("active")
            contact.classList.remove("active")
        } else if  (scrolled > (homeHeight + aboutHeight + (projectHeight- (4.45 * contactHeight)))){
            home.classList.remove("active")
            about.classList.remove("active")
            project.classList.remove("active")
            contact.classList.add("active")
        } else {
            home.classList.add("active")
            about.classList.remove("active")
            project.classList.remove("active")
            contact.classList.remove("active")
        }
    } else {
        var scrolled = window.scrollY;
        if((scrolled > homeHeight) && (scrolled <= (homeHeight + aboutHeight))){
            home.classList.remove("active")
            about.classList.add("active")
            project.classList.remove("active")
            contact.classList.remove("active")
        } else if ((scrolled > (homeHeight + aboutHeight)) && (scrolled <= (homeHeight + aboutHeight + (projectHeight - (contactHeight))))){
            home.classList.remove("active")
            about.classList.remove("active")
            project.classList.add("active")
            contact.classList.remove("active")
        } else if  (scrolled > (homeHeight + aboutHeight + (projectHeight- (contactHeight)))){
            home.classList.remove("active")
            about.classList.remove("active")
            project.classList.remove("active")
            contact.classList.add("active")
        } else {
            home.classList.add("active")
            about.classList.remove("active")
            project.classList.remove("active")
            contact.classList.remove("active")
        }
    }
    
});

window.addEventListener("resize", () => {
    let windowWidth = window.innerWidth;
    if(window.innerWidth > 767) {
        homeHeight = document.getElementById('home').offsetHeight;
        aboutHeight = document.getElementById('about_me').offsetHeight;
        projectHeight = document.getElementById('projects').offsetHeight;
        contactHeight = document.getElementById('contact_me').offsetHeight;
    }
});

// arrowBtns.forEach(btn => {
//     btn.addEventListener("click", () => {
//         carousel.scrollLeft += btn.id == "left" ? (-windowWidth) : (windowWidth);
//     })
// });

// const dragStart = (e) => {
//     isDragging = true;
//     carousel.classList.add("dragging")
//     startX = e.pageX;
//     startScrollLeft = carousel.scrollLeft;
// }

// const dragStop = (e) => {
//     isDragging = false;
//     carousel.classList.remove("dragging")
// }

// const dragging = (e) => {
//     if (!isDragging) {
//         return;
//     }
//     carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
// }

// window.addEventListener("resize", () => {
//     const x = document.getElementById("myLinks");
//     windowWidth = window.innerWidth;
//     if(window.innerWidth > 1425) {
//         x.style.display = "inherit";
//     } else if (window.innerWidth <= 1425) {
//         x.style.display = "none";
//     }
// });

// carousel.addEventListener("mousedown", dragStart);
// document.addEventListener("mouseup", dragStop);
// carousel.addEventListener("mousemove", dragging);

// // Initialization for ES Users

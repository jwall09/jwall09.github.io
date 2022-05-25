/*********************
Name: Jacob Wallace
Coding 07-09
Purpose: JavaScript for use on all pages
**********************/
//NAVBAR ANIMATIONS

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
 
    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});




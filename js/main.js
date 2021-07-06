// Select DOM items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const menuBranding_overlay = document.querySelector(".menu-branding-overlay");
// for selecting several items (of similar selector) and store them in an array
const navItems = document.querySelectorAll(".nav-item");

// Set Initial State of Menu
let showMenu = false;

// Event listener and callback function for the Btn
menuBtn.addEventListener("click", toggleMenu);

// toggleMenu function
function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    menuBranding_overlay.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    menuBranding_overlay.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}

//moving the image from left to right to give the sense of movement
// Make it be available only on mobile devices (maybe there is a way of differentiate scrolling with mouse from finger?)
//The idea was actually to use the finger to move the image and make the name follow it.
//I need to think more how to do that
//const bg_image_body = document.getElementById("bg-image");

//////////////////////////////////////////////////
///////////////////////////////////////////////////////////

// Awards and Certifications selection and lightbox

//Set Options
var autoswitch = true; //auto slider options
var autoswitch_speed = 8000; //auto slider speed

//select slide class elements
const certificates_slides = document.querySelectorAll(".certificates .slide");
const awards_slides = document.querySelectorAll(".awards .slide");
const awards_prev = document.querySelector(".awards .prev");
const certificates_prev = document.querySelector(".certificates .prev");
const awards_next = document.querySelector(".awards .next");
const certificates_next = document.querySelector(".certificates .next");

// add initial active class
// Finally done in the HTML. 
// certificates_slides[0].classList.add("active");
// awards_slides[0].classList.add("active");

// Hide all slides
//certificates_slides.forEach(item => item.style.setProperty("opacity", "0"));
certificates_slides.forEach(item => item.style.setProperty("opacity", "0"));
awards_slides.forEach(item => item.style.setProperty("opacity", "0"));

// Show first slide
//certificates_slides[0].style.setProperty("opacity", "1");
certificates_slides[0].style.setProperty("opacity", "1");
awards_slides[0].style.setProperty("opacity", "1");

//VITAL:!!! IF YOU DONT WRITE function(){function(variable)} and write just function(variable) IT DOES NOT WORK WITH A VARIABLE,
//ONLY IF THE CALLBACK FUNCTION DOES NOT NEED A VARIABLE. WHY???TRY TO FIGURE IT OUT. CHECK THIS LINK:
//https://stackoverflow.com/questions/256754/how-to-pass-arguments-to-addeventlistener-listener-function
//I THINK IT IS RELATED TO THE WAY ANONYMOUS FUNCTIONS WORK
// next slide handler
certificates_next.addEventListener("click", function() {
  nextSlide(".certificates", true);
});
awards_next.addEventListener("click", function() {
  nextSlide(".awards", true);
});

// // prev slide handler
certificates_prev.addEventListener("click", function() {
  prevSlide(".certificates", true);
});
awards_prev.addEventListener("click", function() {
  prevSlide(".awards", true);
});

//autoswitch handler
// Set interval functions allows for a function to be called at intervals
if (autoswitch == true) {
  var switch1 = setInterval(function() {
    nextSlide(".certificates");
  }, autoswitch_speed);
  var switch2 = setInterval(function() {
    nextSlide(".awards");
  }, autoswitch_speed);
}

//functions
// Switch to next slide function
function nextSlide(type, manually_triggered = false) {
  if (manually_triggered) {
    clearInterval(switch1);
    clearInterval(switch2);
    autoswitch = false;
  }
  const element = document.querySelector(type + " .active");
  const siblings = document.querySelectorAll(type + " .slide");
  element.classList.remove("active");
  element.classList.add("oldActive");
  next_sibling = element.nextElementSibling;
  if (!next_sibling) {
    siblings[0].classList.add("active");
  } else {
    next_sibling.classList.add("active");
  }
  element.classList.remove("oldActive");

  element.classList.remove("fade-in");
  element.classList.add("fade-out");
  document.querySelector(type + " .active").classList.remove("fade-out");
  document.querySelector(type + " .active").classList.add("fade-in");
}

// // Switch to prev slide function
function prevSlide(type, manually_triggered = false) {
  if (manually_triggered) {
    clearInterval(switch1);
    clearInterval(switch2);
    autoswitch = false;
  }
  const element = document.querySelector(type + " .active");
  const siblings = document.querySelectorAll(type + " .slide");
  element.classList.remove("active");
  element.classList.add("oldActive");
  prev_sibling = element.previousElementSibling;
  if (!prev_sibling) {
    siblings[siblings.length - 1].classList.add("active");
  } else {
    prev_sibling.classList.add("active");
  }
  element.classList.remove("oldActive");
  element.classList.remove("fade-in");
  element.classList.add("fade-out");
  document.querySelector(type + " .active").classList.remove("fade-out");
  document.querySelector(type + " .active").classList.add("fade-in");
}

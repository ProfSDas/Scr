// Get the elements we need
const navbar = document.querySelector('.navbar');
const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger');

// Add a click event listener to the burger icon
burger.addEventListener('click', () => {
  // Toggle the "active" class on the burger icon
  burger.classList.toggle('burger');
  // Toggle the "active" class on the menu
  menu.classList.toggle('menu');
});

// Hide the menu when a link is clicked
menu.addEventListener('click', () => {
  menu.classList.remove('menu');
  burger.classList.remove('burger');
});

function redirectToFillPage() {
  window.location.href="/fill/index.html";
}
function redirectToResponseSignupPage() {
  window.location.href="/responsesignup/index.html";
}
function redirectToLoginPage() {
  window.location.href="/login/index.html";
}
function redirectToSignupPage() {
  window.location.href="/signup/index.html";
}
function redirectToContactPage() {
  window.location.href="/contact/index.html";
}


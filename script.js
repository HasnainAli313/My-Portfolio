// Get the mobile element
const mobile = document.getElementById('menu');

// Get the header element
const header = document.querySelector('header');

// Add a click event listener to the mobile element
mobile.addEventListener('click', function() {
  // Toggle the visibility of the header element
  header.classList.toggle("active");
});

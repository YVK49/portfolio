document.addEventListener("DOMContentLoaded", function () {
    // Get the hamburger button and the navigation links
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Add a click event listener to the hamburger button to toggle the 'active' class
    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');  // Toggle the visibility of the navigation links
    });
});

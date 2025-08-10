document.addEventListener("DOMContentLoaded", function () {
  // Get hamburger and nav menu elements
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  // Toggle hamburger menu on click
  hamburger.addEventListener("click", function () {
    // Toggle active class on hamburger for animation
    hamburger.classList.toggle("active");

    // Toggle active class on nav menu to show/hide
    navMenu.classList.toggle("active");
  });

  // Close menu when clicking on a nav link (mobile)
  const navLinks = navMenu.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Remove active classes to close menu
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  // Close menu when clicking outside (mobile)
  document.addEventListener("click", function (event) {
    const isClickInsideNav = navMenu.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);

    // If click is outside nav and hamburger, close menu
    if (!isClickInsideNav && !isClickOnHamburger) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }
  });

  // Handle window resize to ensure proper menu state
  window.addEventListener("resize", function () {
    // If window is resized to desktop size, ensure menu is reset
    if (window.innerWidth > 768) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }
  });
});
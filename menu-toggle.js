document.addEventListener('DOMContentLoaded', function() {
    const navMenu = document.getElementById('nav-menu');
    const menuToggle = document.getElementById('menu-toggle');

    // Ensure the menu starts in a closed state by removing the 'active' class
    navMenu.classList.remove('active');

    // Toggle navigation menu on mobile when the menu icon is clicked
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Add window resize listener to ensure correct behavior
    window.addEventListener('resize', function() {
        // If window size is large enough (not mobile), hide menu again
        if (window.innerWidth > 1199) {
            navMenu.classList.remove('active');
        }
    });
});

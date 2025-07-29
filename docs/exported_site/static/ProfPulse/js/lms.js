// LMS Integration Page JS

document.addEventListener("DOMContentLoaded", function () {
    // Highlight the current nav link if present
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.href.includes('lms')) {
            link.classList.add('active');
        }
    });

    // Example: Show alert for demo purposes
    const integrationLinks = document.querySelectorAll('a[href*="integration-examples"]');
    integrationLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Optionally show a message or analytics event
            // alert('You are leaving ProfPulse to view integration examples on GitHub.');
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const heroHeading = document.querySelector('.hero-content h1');
    const heroParagraph = document.querySelector('.hero-content p');
    const button = document.querySelector('.hero-content .button');

    // Fade-in animation
    heroHeading.style.opacity = 0;
    heroParagraph.style.opacity = 0;
    button.style.opacity = 0;

    setTimeout(() => {
        heroHeading.style.transition = 'opacity 1s ease-in-out';
        heroHeading.style.opacity = 1;
    }, 500);

    setTimeout(() => {
        heroParagraph.style.transition = 'opacity 1s ease-in-out';
        heroParagraph.style.opacity = 1;
    }, 1000);

    setTimeout(() => {
        button.style.transition = 'opacity 1s ease-in-out';
        button.style.opacity = 1;
    }, 1500);

    // Optional: Smooth scroll to gear list on button click
    button.addEventListener('click', function (e) {
        // If gear list is on same page
        if (button.getAttribute('href') === "#gear-list") {
            e.preventDefault();
            const target = document.querySelector('#gear-list');
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

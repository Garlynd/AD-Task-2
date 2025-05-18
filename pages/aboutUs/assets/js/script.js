document.addEventListener("DOMContentLoaded", () => {
    // Fade-in animation for hero heading only
    const heroHeading = document.querySelector(".hero-content h1");
    if (heroHeading) {
        heroHeading.style.opacity = 0;
        heroHeading.style.transition = "opacity 1.2s ease-in-out";
        setTimeout(() => {
            heroHeading.style.opacity = 1;
        }, 600);
    }

    // Smooth scroll to top on back button click (only if internal anchor)
    const backButton = document.querySelector(".button");
    if (backButton) {
        backButton.addEventListener("click", (e) => {
            if (backButton.getAttribute("href")?.startsWith("#")) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            }
            // else default navigation (external link) happens normally
        });
    }

    // Intersection Observer to reveal sections, tables, and ul on scroll — except inside hero
    const observerOptions = {
        threshold: 0.1,
    };

    const revealOnScroll = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(revealOnScroll, observerOptions);

    // Select all sections, tables, and ul NOT inside the hero
    const revealElements = document.querySelectorAll("section, table, ul");
    revealElements.forEach((el) => {
        if (!el.closest('.hero')) { // exclude anything inside .hero
            el.classList.add("hidden");
            observer.observe(el);
        }
    });
});

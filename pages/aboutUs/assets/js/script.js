document.addEventListener("DOMContentLoaded", () => {
    const heroHeading = document.querySelector(".hero-content h1");
    if (heroHeading) {
        heroHeading.style.opacity = 0;
        heroHeading.style.transition = "opacity 1.2s ease-in-out";
        setTimeout(() => {
            heroHeading.style.opacity = 1;
        }, 600);
    }

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
        });
    }

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

    const revealElements = document.querySelectorAll("section, table, ul");
    revealElements.forEach((el) => {
        if (!el.closest('.hero')) {
            el.classList.add("hidden");
            observer.observe(el);
        }
    });
});

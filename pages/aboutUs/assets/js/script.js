document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll to top if the user clicks the "Back to Home" button
    const backButton = document.querySelector(".button");
    backButton?.addEventListener("click", (e) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Simple scroll reveal effect
    const observerOptions = {
        threshold: 0.1
    };

    const revealOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(revealOnScroll, observerOptions);

    const revealElements = document.querySelectorAll("section, table, ul");
    revealElements.forEach(el => {
        el.classList.add("hidden");
        observer.observe(el);
    });
});

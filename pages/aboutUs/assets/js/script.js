document.addEventListener("DOMContentLoaded", () => {
    const backButton = document.querySelector(".button");
    backButton?.addEventListener("click", (e) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

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

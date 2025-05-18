document.addEventListener("DOMContentLoaded", () => {
    const gearList = document.querySelector(".gear-list");
    if (gearList) {
        gearList.style.opacity = 0;
        gearList.style.transition = "opacity 1s ease-in-out";

        setTimeout(() => {
            gearList.style.opacity = 1;
        }, 300);
    }

    const gearCards = document.querySelectorAll(".gear-card");
    gearCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            card.style.boxShadow = "0 12px 24px rgba(0,0,0,0.25)";
            card.style.transform = "translateY(-7px)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.boxShadow = "";
            card.style.transform = "";
        });
    });
});

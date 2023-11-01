const cardContainer = document.querySelector(".container");

const clickHandler = (event) => {
    const target = event.target.closest(".card");
    if (!target) return;
    
    cardContainer.querySelectorAll(".card").forEach((card) => {
        card.classList.remove("active");
    });
    
    target.classList.add("active");
}

cardContainer.addEventListener("click", clickHandler);
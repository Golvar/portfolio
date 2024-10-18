document.addEventListener("scroll", (event) => {
    let scrollPosition = window.scrollY;
    let windowHeight = window.innerHeight;
    const leftSide = document.querySelector(".left-side");

    // Si on est au-delà de la première slide, montrer la left-side
    if (scrollPosition >= windowHeight) {
        leftSide.style.opacity = 1; // Afficher la div
    } else {
        leftSide.style.opacity = 0; // Masquer la div
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const menu = document.querySelector(".header-middle");

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("show");
    });
});
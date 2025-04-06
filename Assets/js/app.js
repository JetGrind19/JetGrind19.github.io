
// Burger Menu
const menu = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

menu?.addEventListener("click", () => {
    ul?.classList.toggle("show");
});

const links = document.querySelectorAll(".nav-link");
links.forEach((link) => {
    link.addEventListener("click", () => {
        const ul = document.querySelector("ul");
        if(ul){
            ul.classList.remove("show");
        }
    })
});
const burger = document.querySelector(".header_burger")
const head_menu = document.querySelector(".header_menu")


burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    head_menu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    burger.classList.remove("active");
    head_menu.classList.remove("active");
}))
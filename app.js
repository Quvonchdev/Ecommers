const homburger = document.querySelector(".burger");
const navlink = document.querySelector(".leftt");
const links = document.querySelectorAll(".leftt li");

homburger.addEventListener('click', () =>{
    navlink.classList.toggle("open");
})



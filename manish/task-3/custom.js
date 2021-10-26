const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("closeBtn");

burger.addEventListener("click",()=>{
    menu.classList.toggle("active");
});

closeBtn.addEventListener("click",()=>{
    menu.classList.toggle("active");
})
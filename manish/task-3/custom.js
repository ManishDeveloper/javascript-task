const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("closeBtn");

burger.addEventListener("click",()=>{
    menu.classList.toggle("active");
},true);

closeBtn.addEventListener("click",()=>{
    menu.classList.toggle("active");
},true);

document.addEventListener("click",(e)=>{
    if(!e.target.closest(".nav-box")){
        menu.classList.remove("active");
    }
},true)
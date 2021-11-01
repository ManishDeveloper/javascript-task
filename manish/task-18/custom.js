//Write Your JS Code Here
const popBox = document.querySelector(".pop-box");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");
const popBoxBtn = document.getElementById("button");


popBoxBtn.addEventListener("click",()=>{
    popBox.classList.add('active');
    overlay.classList.add('active');
});

closeBtn.addEventListener("click",()=>{
    popBox.classList.remove('active');
    overlay.classList.remove('active');
})

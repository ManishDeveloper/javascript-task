//Write Your JS Code Here

let menuBtn = document.getElementById('menu-icon');
let menu = document.getElementById('menu-wrap');
let closeBtn = document.getElementById('close-btn');

menuBtn.addEventListener('click', function(){
    menu.classList.add('in');
});
closeBtn.addEventListener('click', function(){
    menu.classList.remove('in');
});
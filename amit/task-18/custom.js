//Write Your JS Code Here

let btn = document.getElementById('myBtn');
let modal = document.getElementById('myModal');
let closeBtn = document.getElementById('close');

btn.addEventListener('click', function(){
    modal.classList.add('open');
});

closeBtn.addEventListener('click', function(){
    modal.classList.remove('open');
})
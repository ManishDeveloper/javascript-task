//Write Your JS Code Here
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const button = document.getElementById("form");


button.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    if(username.value.toString() == ''){
        username.classList.add('error');
        username.nextElementSibling.classList.add('error');
    }
    else {
        username.classList.remove('error');
        username.nextElementSibling.classList.remove('error');
    }
    if(email.value.toString() === ''){
        email.classList.add('error');
        email.nextElementSibling.classList.add('error');
    }
    else {
        email.classList.remove('error');
        email.nextElementSibling.classList.remove('error');
    }
    if(password.value.toString() === ''){
        password.classList.add('error');
        password.nextElementSibling.classList.add('error');
    }
    else {
        password.classList.remove('error');
        password.nextElementSibling.classList.remove('error');
    }
})
//Write Your JS Code Here
const button = document.getElementById("button");
const toastBox = document.getElementById("toasts");

const messages = ['First Notification','Second Notification','Third Notification'];

button.addEventListener('click',()=>{
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.innerHTML = messages[Math.floor(Math.random()*(messages.length))];

    toastBox.appendChild(notif);

    setTimeout(()=>{
        notif.remove();
    },3000);

});
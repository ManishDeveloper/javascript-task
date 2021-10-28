//Write Your JS Code Here
const text = document.getElementById("showString");
const input = document.getElementById("inputString");

input.addEventListener("keyup",(e)=>{

    text.innerHTML = `${e.target.value.split('').reverse().join('')}`;
});

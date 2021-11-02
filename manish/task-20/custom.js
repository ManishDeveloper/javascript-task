//Write Your JS Code Here
const typeText = document.getElementById("typeText");
const showText = document.getElementById("showText");


typeText.addEventListener("keyup",(e)=>{

    let text = e.target.value.split(' ');

    let newText = text.map(word => word.charAt(0).toUpperCase()+word.slice(1).toLowerCase());

    let finalText = newText.join(' ');

    showText.innerText = finalText;
});
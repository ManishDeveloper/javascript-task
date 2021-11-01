//Write Your JS Code Here
const rotate = document.getElementById("rotate");

let word = "Onsumaye";

let wordArray = word.split('');

setInterval(()=>{
    let lastWord = wordArray.pop();
    wordArray.unshift(lastWord);

    let rotateString = wordArray.join('');

    rotate.innerHTML = rotateString;

},1000)

//Write Your JS Code Here
const match = document.getElementById("match");

let guessNum = Math.ceil(Math.random()*10);

let enterNum = prompt('Enter Number Between 1 to 10');

if(guessNum == enterNum){
    match.innerHTML = `Great! Number is Matched!`;
}
else {
    match.innerHTML = `Not Matched! Number is ${guessNum}`;
}
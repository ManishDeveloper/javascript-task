//Write Your JS Code Here
const showText = document.getElementById("showText");


const text = prompt("Type your String..");

const vowels = /[aeiou]/gi;

const words = text.match(vowels);

showText.innerText = `Total vowels is : ${words.length} (${words.toString()})`;
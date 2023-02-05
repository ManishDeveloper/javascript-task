//Write Your JS Code Here

let showText = document.getElementById('showText');

let getValue = prompt('Enter a string');

let vowel = /[aeiou]/gi

let compare = getValue.match(vowel)

showText.innerHTML = `Vowel is ${compare.length} ${compare.toString()}`








// function countVowel(str) { 
//     const count = str.match(/[aeiou]/gi).length;
//     return count;
// }

// const string = prompt('Enter a string: ');

// const result = countVowel(string);

// console.log('Vowel Count: ' + result);
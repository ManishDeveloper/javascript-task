//Write Your JS Code Here

var myVar = setInterval(myFunction, 1000);
    
var word = 'w3resource';
var newArray = word.split('');

function myFunction() {
    var letter = newArray.pop();
    var newWord = newArray.unshift(letter);
    var theWord = newArray.join('');
    //console.log(theWord);
    document.getElementById('rotate').innerHTML = theWord;
}
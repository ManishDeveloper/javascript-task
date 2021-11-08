//Write Your JS Code Here

let str = 'onsumaye';
let revert = str.split("").reverse().join("");

//console.log(revert);

document.getElementById('test').innerHTML = str;
document.getElementById('test2').innerHTML = revert;
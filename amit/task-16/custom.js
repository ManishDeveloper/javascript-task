//Write Your JS Code Here

let extention = 'main.html';
let getExtention = extention.split('.').pop();

document.getElementById('demo').innerHTML = getExtention;
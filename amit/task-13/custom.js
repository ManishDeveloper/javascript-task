//Write Your JS Code Here

//prompt('hello world')
//confirm('hello world')

let match = document.getElementById('match');
let valuePrompt = prompt('Please Enter a number 1 to 10');
let rendamVal = Math.ceil(Math.random()*10)
//let rendamVal = Math.random() - 0.5
console.log(rendamVal)

if(rendamVal == match){
    match.innerHTML = `Number is Match. ${rendamVal}`
}else{
    match.innerHTML = `Number is not Match. ${rendamVal}`
}

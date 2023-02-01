//Write Your JS Code Here
const showArr = document.getElementById("shuffleArr");
const shuffleBtn = document.getElementById('shuffleBtn');

let shuffleArr = [3,1,9,29,4,6,7,2,9];

showArr.innerHTML = `[${shuffleArr}]`;

shuffleBtn.addEventListener('click',()=>{
    shuffleArr = shuffleArr.sort((a,b)=>0.5-Math.random());
    showArr.innerHTML = `[${shuffleArr}]`;
})


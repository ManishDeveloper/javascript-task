//Write Your JS Code Here

let btn = document.getElementById("btn");
let box = document.getElementById("box");

// let result = () => {
//     box.classList.toggle('active');
// }

btn.addEventListener('click', ()=>{
	box.classList.toggle('active');
})
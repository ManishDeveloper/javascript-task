//Write Your JS Code Here
const box = document.querySelector('.container');

window.addEventListener('keydown',(event)=>{
    box.innerHTML = `
<div class="key-box">
    <h5>Key</h5>
    <h3 class="key">${event.key === ' ' ? 'Space' : event.key}</h3>
</div>
<div class="key-box">
    <h5>keyCode</h5>
    <h3 class="key">${event.keyCode}</h3>
</div>
<div class="key-box">
    <h5>Code</h5>
    <h3 class="key">${event.code}</h3>
</div>`

});
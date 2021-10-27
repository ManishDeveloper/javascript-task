//Write Your JS Code Here

let d = new Date();
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const hours12 = () => {
    let ampm = d.getHours() >= 12 ? 'pm' : 'am';
    return `${(d.getHours() % 12  || 12)} ${ampm}`;
};


document.getElementById('dayWrap').innerHTML = 'Today is : ' + days[d.getDay()];
document.getElementById('timeWrap').innerHTML = 'Current time is : ' + hours12()  + " : " + d.getMinutes() + " : " + d.getSeconds();
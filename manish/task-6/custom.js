//Write Your JS Code Here
const todayDay = document.getElementById("day");
const timeNow = document.getElementById("time");

window.addEventListener("load",()=>{
let today = new Date();

const day = today.getDay();

const dayList = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Saturday"];

todayDay.innerHTML = `Today is: ${dayList[day]}`;

setInterval(()=>{
today = new Date();
let hour = today.getHours();
let amPm = (hour >=12) ? "PM" : "AM";
let hour12 = (hour >=12) ? hour-12 : hour;
let min = today.getMinutes();
min = (min < 10) ? '0'+min : min;
let second = today.getSeconds();
second = (second < 10) ? '0'+second : second;
timeNow.innerHTML = `Current Time : ${hour12} ${amPm} : ${min} : ${second}`;
},1000)

});

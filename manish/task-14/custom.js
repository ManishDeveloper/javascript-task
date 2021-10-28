//Write Your JS Code Here
const showDay = document.getElementById("showDay");

let today = new Date();

let christmasYear = today.getFullYear();

if(today.getDate() >25 && today.getMonth == 11){
    christmasYear = christmasYear +1;
}

let christmasDay = new Date(christmasYear,11,25);

let milliSecondDay = 1000 * 60 * 60 * 24;

let remaindays = Math.ceil((christmasDay.getTime() - today.getTime())/milliSecondDay);

showDay.innerHTML = `${remaindays} days left for the Christmas`;
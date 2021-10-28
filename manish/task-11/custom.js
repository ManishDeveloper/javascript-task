//Write Your JS Code Here
const year = document.getElementById("showYear");
const input = document.getElementById("inputYear");

input.addEventListener("keyup",(e)=>{
    let leapYear = +e.target.value;

    if(leapYear.toString().length === 4){
        
        if((leapYear%400 === 0) || ((leapYear%4===0) && (leapYear%100 !== 0))){
            year.innerHTML = `${leapYear} is leap year.`
        }
        else {
            year.innerHTML = `${leapYear} is not leap year.`
        }
    }
    else {
        year.innerHTML = "";
    }
})

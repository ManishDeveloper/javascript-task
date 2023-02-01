//Write Your JS Code Here
const year = document.getElementById("showYear");
const input = document.getElementById("inputYear");

input.addEventListener("keyup",(e)=>{
    let inputYear = +e.target.value;
    
    let isLeapYear = new Date(inputYear, 1, 29).getDate() === 29;

    if(inputYear.toString().length === 4){
        
        if(isLeapYear){
            year.innerHTML = `${inputYear} is leap year.`
        }
        else {
            year.innerHTML = `${inputYear} is not leap year.`
        }
    }
    else {
        year.innerHTML = "";
    }
})

//Write Your JS Code Here

// function check_leapyear(){
//     var year;

//     year = document.getElementById("year").value;

//     if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) ){
//         alert(year+" is a leap year");  
//     }
//     else{
//         alert(year+" is not a leap year");  
//     }
// }


//(0 == 2020 % 4)
// console.log((0 == 2020 % 4) && (0 == 2000 % 100) || (0 !== 2000 % 100) )



let year = 2022;

if(0 == year % 4){
    alert('leap year')
}else{
    alert('Not leap year')
}
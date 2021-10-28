//Write Your JS Code Here
function check50(x,y){
    return ((x==50) || (y==50) || ((x+y)==50));
}

console.log(`30, 20 : ${check50(30, 20)}`);
console.log(`40, 20 : ${check50(40, 20)}`);
console.log(`50, 20 : ${check50(50, 20)}`);
console.log(`10, 20 : ${check50(10, 20)}`);
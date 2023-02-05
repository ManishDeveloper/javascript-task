//Write Your JS Code Here

let arr = [1,1,2,3,1,4,3];

// let obj = {}
// obj[item] = 1;
// console.log(obj[item] = 1)

// arr.forEach((item) => {
//     if(obj[item]){
//         obj[item]++
//     }else{
//         obj[item] = 1;
//     }    
// });
// console.log(obj)

let obj = {}

let majorNum = 1;
let majorOccur = 1;

arr.forEach((item)=> obj[item] ? obj[item]++ : obj[item] = 1 )

for(let i in obj){
    if(obj[i] > majorOccur){
        majorNum = i;
        majorOccur = obj[i];
    }
}

console.log(`${majorNum} occur ${majorOccur} times.`);
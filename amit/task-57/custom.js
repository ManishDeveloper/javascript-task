//Write Your JS Code Here

let obj = {}
let arr = [1, 2, 3, 4];
let arr2 = ['Rohan', 'Ashish', 'Manoj', 'Ram'];

//debugger
arr.forEach((item, index)=>{
    //console.log(obj[item], arr2[index])
    obj[item] = arr2[index]
})

console.log(obj)






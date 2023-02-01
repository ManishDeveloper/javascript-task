//Write Your JS Code Here

let numArr = [0,1,2,2,1,4,8,4,9,6,8,5,23];

let removeDuplicate = numArr.filter((item,index,arr)=>arr.indexOf(item)===index);


console.log(`Normal Array`);
console.log(numArr);

console.log(`Remove Duplicate`);
console.log(removeDuplicate);
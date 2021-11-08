//Write Your JS Code Here
const checkArray = (array) => {

    return Array.isArray(array);
}

console.log(checkArray([1,2,3,4]));
console.log(checkArray(2));
console.log(checkArray('hello'));
console.log(checkArray(["one","two","three"]));
//Write Your JS Code Here

let removeArray = (array, n) => {
    let index = array.indexOf(n);
    if(index > -1){
        array.splice(index, 1)
    }
    return array
}

let result = removeArray([1,2,3,4,5], 3)

console.log(result)

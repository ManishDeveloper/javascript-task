//Write Your JS Code Here
const removeItemFromArray = (array, n) => {
    const index = array.indexOf(n);

    // if the element is in the array, remove it
    if(index > -1) {

        // remove item
        array.splice(index, 1);
    }
    return array;
}

const result = removeItemFromArray([1, 2, 3 , 4, 5], 5);

console.log(result);
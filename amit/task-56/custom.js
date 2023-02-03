//Write Your JS Code Here


let arr = ["ssidmansfsdf","manserdc","sdfsman"];

let arr2 = arr.map((item, index)=>{
    let removeMan = item.split('man')
    let joinArr = removeMan.join('')
    return joinArr
})

console.log(arr2)



// const arr11 = ["Cecilie", "Lone"];
// const arr22 = ["Emil", "Tobias", "Linus"];
// const arr33 = ["Robin"];

// const children = arr11.concat(arr22, arr33);
// console.log(children)



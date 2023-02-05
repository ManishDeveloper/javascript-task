//Write Your JS Code Here
const showText = document.getElementById("showText");
let student1 = {name:'amit', rollno:23}
let student2 = {name:'amit3', rollno:23}

let compareFun = (obj1, obj2) => {
    let obj1Key = Object.keys(obj1)
    let obj2Key = Object.keys(obj2)

    if(obj1Key.length !== obj2Key.length){
        showText.innerHTML = 'Object length are not same'
        return false;
    }

    for(let objKey in obj1Key){
        if(obj1[objKey] === obj2[objKey]){
            showText.innerHTML = 'Object are same'
            return true;
        }else{
            showText.innerHTML = 'Object are not same'
            return false;
        }
    }


}

compareFun(student1, student2)
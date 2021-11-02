//Write Your JS Code Here
const showText = document.getElementById("showText");
const student1 = {name:"amit",rollNo:25}
const student2 = {name:"amit",rollNo:25}

const comObject = (obj1,obj2) => {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);

    if(obj1Keys.length !== obj2Keys.length){
        showText.innerText = "Objects have not same length!";
        return false;
    }

    for(let objKey of obj1Keys){
        if(obj1[objKey] === obj2[objKey]){
            showText.innerText = "Objects values are same!";
            return true;
        }
        else {
            showText.innerText = "Objects values are not same!";
            return false;
        }
        
    }
}

comObject(student1,student2);
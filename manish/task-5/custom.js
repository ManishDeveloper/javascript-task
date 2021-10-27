//Write Your JS Code Here

const letters = ["a","b","c","a","d","f","b","f","c","a"]

const count = {}

letters.forEach((item)=>{
    if(count[item]){
        count[item]++;
    }
    else {
        count[item] = 1;
    }
});

console.log(count);
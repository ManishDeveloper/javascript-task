//Write Your JS Code Here

const uniqueCount=(arr)=>{
    let rs ={};
    arr.sort().join("").match(/(.)(\1*)/g).map(i=>rs[i[0]]=i.length);
    return rs;
};

console.log(uniqueCount(['a', 'b', 'c', 'a', 'f', 'b', 'a', 'c']));

//document.getElementById('result').innerHTML = uniqueCount;
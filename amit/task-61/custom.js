//Write Your JS Code Here

 let arr = [2,6,8,8,0,3,4,2,1,3,6];

 let arr2 = arr.filter((item, index, arr)=>{
    //console.log(arr.indexOf(item), index)
    return arr.indexOf(item) === index
 })

 console.log(arr2)

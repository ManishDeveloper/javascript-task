//Write Your JS Code Here

let students = [
    {id:1,name:"vikas",age:35},
    {id:2,name:"ajay",age:31},
    {id:3,name:"amit",age:40},
    {id:4,name:"ajay",age:20}
]

students.sort((a, b)=>{
    //return a.age - b.age
    return (a.name > b.name) - (a.name < b.name)
})
console.log(students)
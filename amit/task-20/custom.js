//Write Your JS Code Here

// function capital_letter(str) 
// {
//     str = str.split(" ");
//     //console.log(str[2][1])

//     for (var i = 0, x = str.length; i < x; i++) {
//         str[i] = str[i][0].toUpperCase() + str[i].substr(1);
//         //console.log(str[i][0].toUpperCase())
//     }

//     return str.join(" ");
// }

// document.getElementById('demo').innerHTML = capital_letter("Write a JavaScript program to capitalize the first letter of each word of a given string.");

let capfunction = (str) => {
    str = str.split(' ')

    for( i = 0; i < str.length; i++ ){

        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
        //str[i] = strArr[i][0].toUpperCase()
        //console.log(strArr[i][0].toUpperCase())
    }
   
    return str.join(' ')
}

console.log(capfunction('write a javaScript program'));
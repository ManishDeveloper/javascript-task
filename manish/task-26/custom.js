//Write Your JS Code Here

const swapCase = (str) => {

    return str.split("").map(item => item.toUpperCase() === item ? item.toLowerCase() : item.toUpperCase()).join("");
}

console.log(swapCase("Hello World"));
console.log(swapCase("Onsumaye Web Solution"));
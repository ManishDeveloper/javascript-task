//Write Your JS Code Here
let side1 = 5;
let side2 = 6;
let side3 = 7;

let perameter = (side1 + side2 + side3)/2;

let area = Math.sqrt(perameter*((perameter-side1)*(perameter-side2)*(perameter-side3)));

console.log(area);
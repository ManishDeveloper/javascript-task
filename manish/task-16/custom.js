//Write Your JS Code Here
const showExt = document.getElementById("showExt");

let fileName = "student.php";

showExt.innerHTML = `File is ${fileName}, Extension is ${fileName.split('.').pop()}`;
//Write Your JS Code Here

function myFunction(event) {
    var x = event.which || event.keyCode;
    document.getElementById("demo").innerHTML = x;
}
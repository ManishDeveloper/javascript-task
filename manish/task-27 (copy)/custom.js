//Write Your JS Code Here

const searchInput = document.getElementById("inputText");
const rows = document.querySelectorAll("tbody tr");

searchInput.addEventListener("keyup",(e)=>{
    let text = e.target.value.toLowerCase();

    rows.forEach(row=>{
        row.querySelector("td").textContent.toLowerCase().startsWith(text) ? 
        (row.style.display = "table-row") : (row.style.display="none")
    });
});
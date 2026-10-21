
function addBook() {
    let b = document.getElementById("book").value;
    let a = document.getElementById("author").value;

    if (b == "" || a == "") {
        alert("Please fill all fields");
    } else {
        let li = document.createElement("li");
        li.textContent = b + " - " + a;
        document.getElementById("list").appendChild(li);

        document.getElementById("book").value = "";
        document.getElementById("author").value = "";
    }
}

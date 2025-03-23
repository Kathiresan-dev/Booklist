var overlay = document.querySelector(".popup-overlay")
var box = document.querySelector(".popup-box")
var btn = document.getElementById("add-pop")

btn.addEventListener("click", function () {
    overlay.style.display = "block";
    box.style.display = "block";
})

var cancel = document.getElementById("cancel-popup")

cancel.addEventListener("click", function (event) {
    event.preventDefault()
    overlay.style.display = "none";
    box.style.display = "none";
})

// select container , add-book , Book-title-input, Book-author-input, Book-description-input

var container = document.querySelector(".container")
var add = document.getElementById("add-book")
var title = document.getElementById("Book-title-input")
var author = document.getElementById("Book-author-input")
var description = document.getElementById("Book-description-input")

add.addEventListener("click", function (event) {
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "book-container")
    div.innerHTML = `<h2>${title.value}</h2>
    <h5>${author.value}</h5>
    <p>${description.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    overlay.style.display = "none";
    box.style.display = "none";
    event.target.parentElement.reset();
})

function deletebook(event) {
    event.target.parentElement.remove()
}
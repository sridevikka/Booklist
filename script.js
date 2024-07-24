//selecting popup box popup overlay button
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popupbutton")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"

})

//select cancle button
var canclepopup =document.getElementById("cancle-popup")

canclepopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

// Select container, add-book, book-title, book-author-input, book-description-input
var container = document.querySelector(".container"); 
var addbook = document.getElementById("add-book");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdescriptioninput = document.getElementById("book-description-input");

addbook.addEventListener("click", function(event) {
    event.preventDefault();
    
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `<h2>${booktitleinput.value}</h2>
        <h5>${bookauthorinput.value}</h5>
        <p>${bookdescriptioninput.value}</p>
        <button onclick="deletebook(event)">delete</button>`;

    container.appendChild(div); 
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

function deletebook(event) {
    event.target.parentElement.remove();
}

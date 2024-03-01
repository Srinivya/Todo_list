var popup_box=document.querySelector(".popup_box")
var popup_overlay=document.querySelector(".popup_overlay")
var plus_button=document.getElementById("plus_button")
plus_button.addEventListener("click",function(){
    popup_overlay.style.display="block"
    popup_box.style.display="block"
})
var cancel_popup=document.getElementById("cancel_popup")
cancel_popup.addEventListener("click",function(event){
    event.preventDefault()
    popup_overlay.style.display="none"
    popup_box.style.display="none"
})
var box=document.querySelector(".box")
var add_popup=document.getElementById("add_popup")
var book_title=document.getElementById("book_title")
var book_author=document.getElementById("book_author")
var book_description=document.getElementById("book_description")
add_popup.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","inside")
    div.innerHTML=` <h2>${book_title.value}</h2>
    <h4>${book_author.value}</h4>
    <p>${book_description.value}</p>
    <button onclick="delete_box(event)">Delete</button>`
    box.append(div)
})
function delete_box(event){
    event.target.parentElement.remove()
}
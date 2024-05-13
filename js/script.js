var allitems = document.querySelectorAll(".col-10 .col-4");
var content = document.getElementById("div-price");
var btn = document.getElementById("btn-price");
var totalPrice = 0;
var text = document.querySelector(".col-10 .col-4 .card-title")
var price = document.querySelector("#totalPrice");


allitems.forEach(function(item){
    item.onclick = function(){
        totalPrice+= +(item.getAttribute("price"))
        content.innerHTML += "<br>" +item.textContent+"<hr>";
        if(content.innerHTML !=""){
            btn.style.display= "block"
        }
        // if
    } 
    // func
}) 
// for

btn.onclick = function(){
    price.style.display= "block"
    price.innerHTML ="Total Price: " +totalPrice +"<br>";
}
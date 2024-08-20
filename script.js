var menubutton = document.getElementById("menubutton");
var menu = document.getElementById("menu");

menubutton.addEventListener("click", function() {
    if (menu.style.display === "block") {
        menu.style.display = "none";
    }else{
        menu.style.display = "block";
    }
});
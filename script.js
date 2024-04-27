var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
// console.log("script")

menuIcon.onclick = function()
{
    // console.log("sidebar menu")
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");


}
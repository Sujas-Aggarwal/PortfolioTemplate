const burgerMenu = document.getElementById("burger-menu")
const menu = document.getElementsByClassName("middle-nav")[0]
//Adding logic to menu button
burgerMenu.onclick=()=>{
   menu.classList.toggle("hidden")
}
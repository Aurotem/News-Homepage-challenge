const menuIcon = document.getElementById("menu-button");
const sideMenu = document.getElementById("side-menu");
const menu = document.getElementById("menu");
const navbar = document.getElementById("navbar");
const menudiv = document.getElementById("menu-div")
const bgEffect = document.getElementsByClassName("bgEffect");

function openNav(){
        sideMenu.style.width = "75%";
        sideMenu.style.display = "block";
        sideMenu.appendChild(menu);
        menu.style.display = "grid";
        navbar.style.backgroundColor = "rgba(160,160,160,100)";
        document.body.style.backgroundColor = "rgba(160,160,160,100)";

}

function closeNav(){
    sideMenu.style.width = "0%";
    menudiv.appendChild(menu);
    menu.style.display = "none";
    navbar.style.backgroundColor = "rgba(255,255,255,100)";
    document.body.style.backgroundColor = "rgba(255,255,255,100)";



}

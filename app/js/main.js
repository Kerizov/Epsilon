window.onload = function(){
    let preloader = document.getElementById('load');
    preloader.classList.add('fade');
    $('.load').remove();

}

let menu_btn = document.querySelector(".mob-menu_btn");
let menu_btn_close = document.querySelector(".close_btn");
let mob_menu = document.querySelector(".mob__menu");
function mobileMenu(){

    menu_btn.addEventListener("click",function(){
        menu_btn.style.display = "none";
        menu_btn_close.style.display = "block";
        mob_menu.style.display = "flex";

    });

    menu_btn_close.addEventListener("click", function(){
        menu_btn.style.display = "block";
        menu_btn_close.style.display = "none";
        mob_menu.style.display = "none";

    });
}

mobileMenu();
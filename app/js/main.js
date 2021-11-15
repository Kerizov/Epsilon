window.onload = function () {
    let preloader = document.getElementById('load');
    preloader.classList.add('fade');
    $('.load').remove();

}

let menu_btn = document.querySelector(".mob-menu_btn");
let menu_btn_close = document.querySelector(".close_btn");
let mob_menu = document.querySelector(".mob__menu");

function mobileMenu() {

    menu_btn.addEventListener("click", function () {
        menu_btn.style.display = "none";
        mob_menu.classList.add('anim-open');
        mob_menu.classList.remove('anim-close');
        menu_btn_close.style.display = "block";
        mob_menu.style.display = "flex";

    });

    menu_btn_close.addEventListener("click", function () {
        menu_btn.style.display = "block";
        mob_menu.classList.remove('anim-open');
        mob_menu.classList.add('anim-close');
        menu_btn_close.style.display = "none";

    });
}

mobileMenu();
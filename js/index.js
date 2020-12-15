$(document).ready(function () {

    $(".menu-reponsive").click(() =>{
        toggle_menu();
        toggle_bg();
    });

    $(".icon-close-menu").click(() => {
        toggle_menu();
        toggle_bg();
    });

    $(".bg-opacity").click(() => {
        toggle_menu();
        toggle_bg();
    });

    $(".icon-close-filter").click(() => {
        toggle_filter();
    });


    $(".filter").click(() => {
        toggle_filter();
    });

    $(".h_menu__btn").click(() => {
        $(".h_menu__box").toggleClass('display-menu');
    });

    $(".arrow_bottom").click(function(){
        $(this).children('.h_menu__sub').slideToggle();
    });


});

function toggle_menu() {
    $(".menu").toggleClass('dp-transform');
}

function toggle_bg() {
    $(".bg-opacity").toggleClass('bg-opacity-block');
}


function toggle_filter() {
    $(".all-product").toggleClass('bg-opacity-block');
}

$(function(){
    $('.testimonials__slider').slick({
        arrows: true,
        dots: false,
    });
});

$('.header__menu-btn').on('click',function(){
    $('.menu > ul').slideToggle();
})
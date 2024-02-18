$(function () {
    $('.product__inner-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: '<button class="product-section__slider-btn product-section__slider-btnprev"><img src="../images/icon/left-arrow.svg" alt=""></button>',
        nextArrow: '<button class="product-section__slider-btn product-section__slider-btnnext"><img src="../images/icon/right-arrow.svg" alt=""></button>'
    }
    );

    $('.product__compare ').on('click', function () { // при нажатии
        $(this).toggleClass('product__compare--active') // toggleClass значит что при нажатии класс изменяется, а при еще одном нажатии убирается.
    });
    $('.product__heart').on('click', function () { // при нажатии
        $(this).toggleClass('product__heart--active') // toggleClass значит что при нажатии класс изменяется, а при еще одном нажатии убирается.
    });
    $('.product__cart').on('click', function () { // при нажатии
        $(this).toggleClass('product__cart--active') // toggleClass значит что при нажатии класс изменяется, а при еще одном нажатии убирается.
    });

});

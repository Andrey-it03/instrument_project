$(function () {

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


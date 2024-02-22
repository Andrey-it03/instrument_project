$(function () {
    $('.product__inner-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="product-section__slider-btn product-section__slider-btnprev "><img src="../images/icon/left-arrow.svg" alt=""></button>',
        nextArrow: '<button class="product-section__slider-btn product-section__slider-btnnext brend--slide "><img src="../images/icon/right-arrow.svg" alt=""></button>'
    }
    );
    $('.brend__slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button class="product-section__slider-btn product-section__slider-btnprev brend--slide-prev"><img src="../images/icon/left-arrow.svg" alt=""></button>',
        nextArrow: '<button class="product-section__slider-btn product-section__slider-btnnext brend--slide-next"><img src="../images/icon/right-arrow.svg" alt=""></button>'
    });

    $('.product__compare ').on('click', function () { // при нажатии
        $(this).toggleClass('product__compare--active') // toggleClass значит что при нажатии класс изменяется, а при еще одном нажатии убирается.
    });
    $('.product__heart').on('click', function () { // при нажатии
        $(this).toggleClass('product__heart--active') // toggleClass значит что при нажатии класс изменяется, а при еще одном нажатии убирается.
    });
    $('.product__cart').on('click', function () { // при нажатии
        $(this).toggleClass('product__cart--active') // toggleClass значит что при нажатии класс изменяется, а при еще одном нажатии убирается.
    });

    $('.tab').on('click', function (e) {
        e.preventDefault(); //отключение ссылок

        $('.tab').removeClass('tab--active'); // удаление 2 класса
        $('.tabs-content').removeClass('tabs-content--active');

        $(this).addClass('tab--active'); // добавление класса при клике
        $($(this).attr('href')).addClass('tabs-content--active'); // добавление класса по id
    })


    $('.filter-btngrid').on('click', function () {
        $(this).addClass('filter__button--active');
        $('.filter-btnline').removeClass('filter__button--active');
        $('.product__item').removeClass('filter__line');

    });

    $('.filter-btnline').on('click', function () {
        $(this).addClass('filter__button--active');
        $('.filter-btngrid').removeClass('filter__button--active');
        $('.product__item').addClass('filter__line');
    });



    $('.filter__aside-item').on('click', function () {
        $('.filter__aside-drop ').toggleClass('filter__aside-drop--active');
    });



});


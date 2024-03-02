$(function () {

    $('.slider-for').slick({
        asNavFor: '.slider-nav',
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,

    });
    $('.slider-nav').slick({
        asNavFor: '.slider-for',
        focusOnSelect: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        draggable: false,
    });

    $('.tab').on('click', function (e) {
        e.preventDefault(); //отключение ссылок

        $('.tab').removeClass('tab--active'); // удаление 2 класса
        $('.tabs-content').removeClass('tabs-content--active');

        $(this).addClass('tab--active'); // добавление класса при клике
        $($(this).attr('href')).addClass('tabs-content--active'); // добавление класса по id
    });

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

    // $('.tab').on('click', function (e) {
    //     e.preventDefault(); //отключение ссылок

    //     $('.tab').removeClass('tab--active'); // удаление 2 класса
    //     $('.tabs-content').removeClass('tabs-content--active');

    //     $(this).addClass('tab--active'); // добавление класса при клике
    //     $($(this).attr('href')).addClass('tabs-content--active'); // добавление класса по id
    // });

    $('.product__tab').on('click', function (e) {
        e.preventDefault(); //отключение ссылок

        $('.product__tab').removeClass('product__tab--active'); // удаление 2 класса
        $('.product-one__content').removeClass('product-one__content--active');

        $(this).addClass('product__tab--active'); // добавление класса при клике
        $($(this).attr('href')).addClass('product-one__content--active'); // добавление класса по id
    });




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



    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 100000,
    });
    $('.aside__chice-drop').on('click', function () {
        $(this).toggleClass('aside__chice-drop--active');
        $(this).next().slideToggle('300');
    });




    $('.product-one__compare ').on('click', function () { // при нажатии
        $(this).toggleClass('product-one__compare--active') // toggleClass значит что при нажатии класс изменяется, а при еще одном нажатии убирается.
    });

    $('.product-one__heart').on('click', function () { // при нажатии
        $(this).toggleClass('product-one__heart--active') // toggleClass значит что при нажатии класс изменяется, а при еще одном нажатии убирается.
    });

    $('.product-one__cart ').on('click', function () { // при нажатии
        $(this).toggleClass('product-one__cart--active') // toggleClass значит что при нажатии класс изменяется, а при еще одном нажатии убирается.
    });


    $('.contact__tab').on('click', function (e) {
        e.preventDefault(); //отключение ссылок

        $('.contact__tab').removeClass('contact__tab--active'); // удаление 2 класса

        $('.contact__map ').removeClass('contact__map--active');

        $(this).addClass('contact__tab--active'); // добавление класса при клике
        $($(this).attr('href')).addClass('contact__map--active'); // добавление класса по id
    });

    $('.aside__tab').on('click', function (e) {
        e.preventDefault(); //отключение ссылок

        $('.aside__tab').removeClass('aside__tab--active'); // удаление 2 класса

        $('.filter__tab-content ').removeClass('filter__tab-content--active');

        $('.aside__tab').toggleClass('aside__tab--delete'); // удаление 2 класса
        $('.filter__tab-content ').toggleClass('filter__tab-content--delete');


        $(this).addClass('aside__tab--active'); // добавление класса при клике
        $($(this).attr('href')).addClass('filter__tab-content--active'); // добавление класса по id
    });

    $('.filter-style').styler();

    $('.header__menu-catalog').on('click', function () { // при нажатии
        $(this).toggleClass('header__menu-catalog--active') // toggleClass значит что при нажатии класс изменяется, а при еще одном нажатии убирается.
    });


    $('.perosnal__area-tab').on('click', function (e) {
        e.preventDefault(); //отключение ссылок

        $('.perosnal__area-tab').removeClass('personal__area-tab--active'); // удаление 2 класса
        $('.personal__tab-content').removeClass('personal__tab-content--active');

        $(this).addClass('personal__area-tab--active'); // добавление класса при клике
        $($(this).attr('href')).addClass('personal__tab-content--active'); // добавление класса по id
    });

    $('.personal__tab-drop').on('click', function () { // при нажатии
        $(this).toggleClass('personal__tab-drop--active') // toggleClass значит что при нажатии класс изменяется, а при еще одном нажатии убирается.
    });


    $('.personal__tab-content').on('click', function (e) {
        e.preventDefault(); //отключение ссылок

        $('.personal__tab-content').removeClass('personal__tab-content--active'); // удаление 2 класса

        $('.contact__map ').removeClass('contact__map--active');

        $(this).addClass('contact__tab--active'); // добавление класса при клике
        $($(this).attr('href')).addClass('contact__map--active'); // добавление класса по id
    });
});


$(function () {
  "use strict";

  $(document).ready(function () {
    $(".product-image-slider .parent-container").mousemove(function (e) {
      var image = $(this).find("img");
      var parentOffset = $(this).offset();
      var mouseX = e.pageX - parentOffset.left;
      var mouseY = e.pageY - parentOffset.top;
      var imageWidth = image.width();
      var imageHeight = image.height();
      var offsetX = 0.5 - mouseX / imageWidth;
      var offsetY = 0.5 - mouseY / imageHeight;

      image.addClass("zoomed");
      image.css({
        transform:
          "scale(1.5) translate(" +
          offsetX * 200 +
          "px," +
          offsetY * 200 +
          "px)",
      });
    });

    $(".product-image-slider .parent-container").mouseleave(function () {
      $(this).find("img").removeClass("zoomed").css("transform", "none");
    });
  });

  // Preloader
  const getPreloaderId = document.getElementById("preloader");
  if (getPreloaderId) {
    getPreloaderId.style.display = "none";
  }

  // function preloader() {
  //   $("#preloader").delay(0).fadeOut();
  // }

  // $(window).on("load", function () {
  //   preloader();
  //   wowAnimation();
  // });

  // menu cart js
  $(".cart_").on({
    mouseenter: function () {
      $(".cart_options_").addClass("show");
    },
    mouseleave: function () {
      $(".cart_options_").removeClass("show");
    },
  });

  $(".remove_btn").on("click", function () {
    $(".header_cart_overlay, .cart_options_").removeClass("show");
  });

  // read more text js
  $(document).ready(function () {
    $(".read_more_less_btn").on("click", function () {
      $(".text_area").toggleClass("active");
      var buttonText = $(this).text();
      $(this).text(buttonText == "Read More..." ? "Read Less" : "Read More...");
    });
  });

  // gallery popup js
  $(".parent-container").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  // product details image slider
  $(".product-image-slider").slick({
    dots: true,
    arrows: true,
    prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
    nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
    customPaging: function (slick, index) {
      var targetImage = slick.$slides.eq(index).find("img").attr("src");
      return '<img src=" ' + targetImage + ' "/>';
    },
  });

  $(".js-select2").select2({
    closeOnSelect: true,
  });
  // Fixed menu js start
  // $(window).on('scroll', function () {
  //   var scroll = $(window).scrollTop();
  //   if (scroll < 245) {
  //     $("#sticky-header").removeClass("sticky-menu");
  //     $("#header-fixed-height").removeClass("active-height");

  //   } else {
  //     $("#sticky-header").addClass("sticky-menu");
  //     $("#header-fixed-height").addClass("active-height");
  //   }
  // });

  // banner slider js
  $(".banner_area").slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    autoplay: false,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
    nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // categories slider js
  $(".categories_slider").slick({
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
    nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // quantity js
  $(".cart-minus").on("click", function () {
    var $input = $(this).parent().find("input");
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $(".cart-plus").on("click", function () {
    var $input = $(this).parent().find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });

  // back to top js
  var btn = $("#button");

  $(window).scroll(function () {
    btn.toggleClass("show", $(window).scrollTop() > 300);
  });

  btn.click(function (e) {
    e.preventDefault();
    if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
      $("html").animate(
        {
          scrollTop: 0,
        },
        1000
      );
    } else {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        0
      );
    }
  });

  // // Animation on scroll
  // $(window).on("load", function () {
  //   setTimeout(() => {
  //     AOS.init({
  //       once: false,
  //     });
  //   }, 0);
  // });

  // // counter up js
  // $('.counter').counterUp({
  //   delay: 50,
  //   time: 2000
  // });

  // let elt = document.querySelectorAll('.why--choose--text--slider > *')

  // anime({
  //   targets: elt,
  //   translateX: '-100%',
  //   duration: 50000,
  //   easing: 'linear',
  //   loop: true
  // });

  // let elt1 = document.querySelectorAll('.pricing--plan--text--slider > *')

  // anime({
  //   targets: elt1,
  //   translateX: '-100%',
  //   duration: 50000,
  //   easing: 'linear',
  //   loop: true
  // });

  // Mobile menu js start

  $(".mobile-topbar .bars i").on("click", function () {
    $(".mobile-menu-overlay,.mobile-menu-main").addClass("active");
    return false;
  });

  $(".close-mobile-menu,.mobile-menu-overlay").on("click", function () {
    $(".mobile-menu-overlay,.mobile-menu-main").removeClass("active");
  });

  $(".sub-mobile-menu ul").hide();
  $(".sub-mobile-menu a").on("click", function () {
    $(this).parent(".sub-mobile-menu").children("ul").slideToggle("100");
    $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
  });
});

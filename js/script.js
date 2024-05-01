$(function () {
  "use strict";

  $(".filter_prd_mobile").on("click", function () {
    $(".category_left_sidebar, .category_main_prd_overlay").addClass("show");
  });

  $(".category_main_prd_overlay,.close_mobile_filter").on("click", function () {
    $(".category_left_sidebar, .category_main_prd_overlay").removeClass("show");
  });

  // Preloader
  const getPreloaderId = document.getElementById("preloader");
  if (getPreloaderId) {
    getPreloaderId.style.display = "none";
  }

  // Fixed menu js start
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $("#sticky-header").removeClass("sticky-menu");
      $("#header-fixed-height").removeClass("active-height");
    } else {
      $("#sticky-header").addClass("sticky-menu");
      $("#header-fixed-height").addClass("active-height");
    }
  });

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
          slidesToShow: 1,
          arrows: false,
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
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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

  // scroll to top js
	var btn = $(".scroll-to-top");

	$(window).scroll(function () {
		btn.toggleClass("show", $(window).scrollTop() > 300);
	});

	btn.click(function (e) {
		e.preventDefault();
		if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
			$("html").animate({
					scrollTop: 0,
				},
				800
			);
		} else {
			$("html, body").animate({
					scrollTop: 0,
				},
				0
			);
		}
	});

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

/******************* Main JS File *************************/


(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {



		/* 
		=================================================================
		01 - Search Toggle JS
		=================================================================	
		*/

		$(".search-option .search-toggle").on("click", function () {
			$(".search-overlay").toggleClass("search-overlay-active");
		});
		$(".search-overlay-close").on("click", function () {
			$(".search-overlay").removeClass("search-overlay-active");
		});


		/* 
		=================================================================
		02 - Testimonial Slider JS
		=================================================================	
		*/

		$(".testimonial-slider").owlCarousel({
			autoplay: true,
			loop: true,
			margin: 0,
			items: 1,
			touchDrag: true,
			mouseDrag: true,
			nav: true,
			dots: false,
			autoplayTimeout: 6000,
			autoplaySpeed: 1200,
			navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
		});

		/* 
		=================================================================
		03 - Login Slider JS
		=================================================================	
		*/

		$(".login-text").owlCarousel({
			animateOut: 'fadeOutLeft',
			animateIn: 'fadeIn',
			autoplay: true,
			loop: true,
			margin: 0,
			items: 1,
			touchDrag: true,
			mouseDrag: true,
			nav: false,
			dots: true,
			navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
		});

		/* 
		=================================================================
		04 - Youtube Popup JS
		=================================================================	
		*/

		$('.play-video').magnificPopup({
			type: 'iframe',
			mainClass: 'mfp-fade',
			preloader: true,
		});

		/* 
		=================================================================
		05 - Counter JS
		=================================================================	
		*/


		$('.counter').counterUp({
			delay: 15,
			time: 5000
		});


		/* 
		=================================================================
		06 - Hover Active JS
		=================================================================	
		*/

		$('.service-box').on('mouseenter', function () {
			$(this).addClass('active').parent().siblings().find('.service-box').removeClass('active');
		})


		/*==============================
		07 - Quantity Js
		==============================*/
		$(".num-in span").on("click", function () {
			var $input = $(this).parents('.num-block').find('input.in-num');
			if ($(this).hasClass('minus')) {
				var count = parseFloat($input.val()) - 1;
				count = count < 1 ? 1 : count;
				if (count < 2) {
					$(this).addClass('dis');
				} else {
					$(this).removeClass('dis');
				}
				$input.val(count);
			} else {
				var count = parseFloat($input.val()) + 1
				$input.val(count);
				if (count > 1) {
					$(this).parents('.num-block').find(('.minus')).removeClass('dis');
				}
			}

			$input.change();
			return false;
		});


		/*==============================
		08 - Responsive Menu Js
		==============================*/

		$("#mobile-menu").slicknav({
			prependTo: ".mobile-menu"
		});


		/*==============================
		09 - Wow Js
		==============================*/
		new WOW().init();


	});


	/*==============================
	10 - Scroll Header Js
	==============================*/
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 200) {
			$(".header-area").removeClass("fixed-header");
		} else {
			$(".header-area").addClass("fixed-header");
		}
	});

	/*==============================
	11 - Preloader Js
	==============================*/
	/*

	$(window).on('load', function () {
		$('#preloader').fadeOut('1000', function () {
			$(this).remove();
		});
	});

	*/

	var preloader = document.getElementById("preloader");

	window.addEventListener('load', function(){
		preloader.style.transform = 'translateY(-100%)';
	})


}(jQuery));


(function ($) {
  'use strict';

  /* =========================
     STICKY HEADER
  ========================== */
  const handleStickyMenu = () => {
    const scrollTop = $(window).scrollTop();

    if (scrollTop > 10) {
      $('.top-header').addClass('hide');
      $('.navigation').addClass('nav-bg');
    } else {
      $('.top-header').removeClass('hide');
      $('.navigation').removeClass('nav-bg');
    }
  };

  $(window).on('scroll', handleStickyMenu);


  /* =========================
     BACKGROUND IMAGE LOADER
  ========================== */
  const setBackgroundImages = () => {
    $('[data-background]').each(function () {
      const bg = $(this).data('background');
      if (bg) {
        $(this).css('background-image', `url(${bg})`);
      }
    });
  };


  /* =========================
     HERO SLIDER (SLICK)
  ========================== */
  const initHeroSlider = () => {
    const $slider = $('.hero-slider');

    if ($slider.length) {
      $slider.slick({
        autoplay: true,
        autoplaySpeed: 7000,
        pauseOnHover: false,
        pauseOnFocus: false,
        infinite: true,
        arrows: true,
        fade: true,
        dots: true,
        prevArrow:
          "<button type='button' class='prevArrow'><i class='ti-angle-left'></i></button>",
        nextArrow:
          "<button type='button' class='nextArrow'><i class='ti-angle-right'></i></button>"
      });

      if ($.fn.slickAnimation) {
        $slider.slickAnimation();
      }
    }
  };


  /* =========================
     VENOBOX LIGHTBOX
  ========================== */
  const initVenobox = () => {
    if ($.fn.venobox) {
      $('.venobox').venobox();
    }
  };


  /* =========================
     MIXITUP FILTER
  ========================== */
  const initMixitup = () => {
    const containerEl = document.querySelector('[data-ref~="mixitup-container"]');

    if (containerEl && typeof mixitup !== 'undefined') {
      mixitup(containerEl, {
        selectors: {
          target: '[data-ref~="mixitup-target"]'
        }
      });
    }
  };


  /* =========================
     COUNTER ANIMATION
  ========================== */
  let counterTriggered = false;

  const runCounter = () => {
    if (counterTriggered) return;

    const $counters = $('.count');
    if (!$counters.length) return;

    const offsetTop = $counters.first().offset().top - window.innerHeight;

    if ($(window).scrollTop() > offsetTop) {
      counterTriggered = true;

      $counters.each(function () {
        const $this = $(this);
        const countTo = parseInt($this.attr('data-count'), 10) || 0;

        $({ countNum: 0 }).animate(
          { countNum: countTo },
          {
            duration: 1200,
            easing: 'swing',
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            }
          }
        );
      });
    }
  };

  $(window).on('scroll', runCounter);


  /* =========================
     INIT ALL
  ========================== */
  $(document).ready(function () {
    setBackgroundImages();
    initHeroSlider();
    initVenobox();
    initMixitup();
  });

})(jQuery);


/* =========================
   FEATHER ICONS
========================== */
if (typeof feather !== 'undefined') {
  feather.replace();
}


(function() {
    "use strict";
  
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
  
    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    }
  
    /**
     * Clients Slider
     */
    new Swiper('.gallery-slider', {
      speed: 1000,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 10000,
        disableOnInteraction: false
      },
      slidesPerView: 'true',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        992: {
          slidesPerView: 1,
          spaceBetween: 20
        }
      }
    });

    /**
     * Initiate gallery lightbox 
     */
    const galleryLightbox = GLightbox({
      selector: '.gallery-lightbox',
      zoomable: true,
      preload: true,
    });
  
  
})()
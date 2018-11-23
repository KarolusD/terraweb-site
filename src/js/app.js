"use strict";

function fadeIn(el) {
  el.style.opacity = 0;
  var last = +new Date();

  var tick = function tick() {
    el.style.opacity = +el.style.opacity + (new Date() - last) / 400;
    last = +new Date();

    if (+el.style.opacity < 1) {
      window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);
    }
  };

  tick();
}

function fadeOut(el) {
  el.style.opacity = 1;
  var last = +new Date();

  var tick = function tick() {
    el.style.opacity = +el.style.opacity - (new Date() - last) / 400;
    last = +new Date();

    if (+el.style.opacity > 0) {
      window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);
    }
  };

  tick();
} // Scrolling to Section
"use strict";

(function allClicks() {
  function allButtonsClicks() {
    var allClickableElements = document.querySelectorAll('.czym-sie-zajmujemy, .oferta, .kontakt, .tworzenie-stron-www, .identyfikacja-wizualna, .uslugi-dodatkowe');
    var hamburger = document.querySelector('.site-hamburger');
    var hamburgerMenu = document.querySelector('.hamburger-menu');

    function closeHamburgerMenu() {
      hamburger.classList.remove('site-hamburger--open');
      hamburgerMenu.classList.remove('hamburger-menu--open');
    }

    hamburger.onclick = function () {
      hamburger.classList.toggle('site-hamburger--open');
      hamburgerMenu.classList.toggle('hamburger-menu--open');
      var isOpen = true;
      window.addEventListener('scroll', function (evt) {
        window.lastScrollTime = new Date().getTime();

        if (isScrolling()) {
          isOpen = false;
          closeHamburgerMenu();
        }
      });

      function isScrolling() {
        if (isOpen) {
          return window.lastScrollTime && new Date().getTime() < window.lastScrollTime + 500;
        } else {
          return false;
        }
      }
    };

    Array.from(allClickableElements).forEach(function (element) {
      element.addEventListener('click', function () {
        if (element.classList.contains('czym-sie-zajmujemy')) {
          var scroll = new SmoothScroll();
          var anchor = document.querySelector('.section-02');
          scroll.animateScroll(anchor);
        }

        if (element.classList.contains('oferta')) {
          var _scroll = new SmoothScroll();

          var _anchor = document.querySelector('.section-03');

          _scroll.animateScroll(_anchor);
        }

        if (element.classList.contains('kontakt')) {
          var _scroll2 = new SmoothScroll();

          var _anchor2 = document.querySelector('.section-07');

          _scroll2.animateScroll(_anchor2);
        }

        if (element.classList.contains('tworzenie-stron-www')) {
          var _scroll3 = new SmoothScroll();

          var _anchor3 = document.querySelector(".section-03");

          _scroll3.animateScroll(_anchor3);
        }

        if (element.classList.contains('identyfikacja-wizualna')) {
          var _scroll4 = new SmoothScroll();

          var _anchor4 = document.querySelector(".section-04");

          _scroll4.animateScroll(_anchor4);
        }

        if (element.classList.contains('uslugi-dodatkowe')) {
          var _scroll5 = new SmoothScroll();

          var _anchor5 = document.querySelector(".section-05");

          _scroll5.animateScroll(_anchor5);
        }
      });
    });
  }

  allButtonsClicks();
})();
"use strict";

(function headerFixed() {
  var siteHeader = document.querySelector('.site-header');
  window.addEventListener('scroll', function () {
    var currentScrollPos = document.documentElement.scrollTop;

    if (currentScrollPos > 30) {
      siteHeader.classList.add("site-header--active");
    } else {
      siteHeader.classList.remove("site-header--active");
    }

    var section01 = document.querySelector('.section-01');
    var section02 = document.querySelector('.section-02');
    var section03 = document.querySelector('.section-03');
    var section04 = document.querySelector('.section-04');
    var section05 = document.querySelector('.section-05');
    var section06 = document.querySelector('.section-06');
    var section07 = document.querySelector('.section-07');

    function getTopElemPos(el) {
      var topPos = el.getBoundingClientRect().top;
      return topPos;
    }

    function changeActiveNavItem() {
      // navigation
      var nav = document.getElementById('nav');
      var navItems = Array.from(nav.getElementsByTagName('a')); // navigation inside hamburger menu

      var nav2 = document.getElementById('nav2');
      var nav2Items = Array.from(nav2.getElementsByTagName('a')); // pagination

      var pag = document.getElementById('pagination');
      var pagItems = Array.from(pag.getElementsByTagName("a"));

      if (getTopElemPos(section01) <= 300 && getTopElemPos(section01) >= -200 && !navItems[0].classList.contains("active") && !nav2Items[0].classList.contains("active") && !pagItems[0].classList.contains("active")) {
        navItems.forEach(function (element) {
          element.classList.remove("active");
        });
        navItems[0].classList.add("active");
        nav2Items.forEach(function (element) {
          element.classList.remove("active");
        });
        nav2Items[0].classList.add("active");
        pagItems.forEach(function (element) {
          element.classList.remove("active");
        });
        pagItems[0].classList.add("active");
      }

      if (getTopElemPos(section02) <= 300 && getTopElemPos(section02) >= -200 && !navItems[1].classList.contains("active") && !nav2Items[1].classList.contains("active") && !pagItems[1].classList.contains("active")) {
        navItems.forEach(function (element) {
          element.classList.remove("active");
        });
        navItems[1].classList.add("active");
        nav2Items.forEach(function (element) {
          element.classList.remove("active");
        });
        nav2Items[1].classList.add("active");
        pagItems.forEach(function (element) {
          element.classList.remove("active");
        });
        pagItems[1].classList.add("active");
      }

      if (getTopElemPos(section03) <= 300 && getTopElemPos(section03) >= -200 && !navItems[2].classList.contains("active") && !nav2Items[2].classList.contains("active") && !pagItems[2].classList.contains("active")) {
        navItems.forEach(function (element) {
          element.classList.remove("active");
        });
        navItems[2].classList.add("active");
        nav2Items.forEach(function (element) {
          element.classList.remove("active");
        });
        nav2Items[2].classList.add("active");
        pagItems.forEach(function (element) {
          element.classList.remove("active");
        });
        pagItems[2].classList.add("active");
      }

      if (getTopElemPos(section04) <= 300 && getTopElemPos(section04) >= -200 && !pagItems[3].classList.contains("active")) {
        pagItems.forEach(function (element) {
          element.classList.remove('active');
        });
        pagItems[3].classList.add("active");
      }

      if (getTopElemPos(section05) <= 300 && getTopElemPos(section05) >= -200 && !pagItems[4].classList.contains("active")) {
        pagItems.forEach(function (element) {
          element.classList.remove('active');
        });
        pagItems[4].classList.add("active");
      }

      if (getTopElemPos(section06) <= 300 && getTopElemPos(section06) >= -200 && !navItems[3].classList.contains("active") && !nav2Items[3].classList.contains("active") && !pagItems[5].classList.contains("active")) {
        navItems.forEach(function (element) {
          element.classList.remove("active");
        });
        navItems[3].classList.add("active");
        nav2Items.forEach(function (element) {
          element.classList.remove("active");
        });
        nav2Items[3].classList.add("active");
        pagItems.forEach(function (element) {
          element.classList.remove("active");
        });
        pagItems[5].classList.add("active");
      }

      if (getTopElemPos(section07) <= 300 && getTopElemPos(section07) >= -200 && !navItems[4].classList.contains("active") && !nav2Items[4].classList.contains("active") && !pagItems[6].classList.contains("active")) {
        navItems.forEach(function (element) {
          element.classList.remove("active");
        });
        navItems[4].classList.add("active");
        nav2Items.forEach(function (element) {
          element.classList.remove("active");
        });
        nav2Items[4].classList.add("active");
        pagItems.forEach(function (element) {
          element.classList.remove("active");
        });
        pagItems[6].classList.add("active");
      }
    }

    changeActiveNavItem();
  }, false);
})();
"use strict";

var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 600,
  parallax: true,
  spaceBetween: -30,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
var swiperSlide = document.querySelectorAll(".swiper-slide");
Array.from(swiperSlide).forEach(function (slide) {
  slide.addEventListener('click', function () {
    var slideId = slide.id;
    openFullScreenSwiper(slideId);
  });
});

function openFullScreenSwiper(initialSlideNumber) {
  var isOpen = true;
  var mainSwiper = document.querySelector('.swiper-container');
  var fullScreenSwiperMarkup = document.getElementById('fullscreen-swiper'); // fullScreenSwiperMarkup.innerHTML = mainSwiperMarkup;

  fullScreenSwiperMarkup.innerHTML = mainSwiper.innerHTML;
  fullScreenSwiperMarkup.innerHTML += "<div id='fullscreen-swiper-close'></div>";
  fullScreenSwiperMarkup.style.display = 'block';
  fadeIn(fullScreenSwiperMarkup);
  var backdrop = document.getElementById("fullscreen-swiper-backdrop");
  backdrop.style.display = 'block';
  fadeIn(backdrop);
  var fullScreenSwiper = new Swiper("#fullscreen-swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    initialSlide: initialSlideNumber - 1,
    speed: 600,
    parallax: true,
    spaceBetween: 10,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    paginationClickable: true,
    slidesPerView: 1,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
  fullScreenSwiper.update();
  var fullScreenSwiperClose = document.getElementById('fullscreen-swiper-close');
  fullScreenSwiperClose.addEventListener('click', closeFullScreenSwiper);

  function closeFullScreenSwiper() {
    isOpen = false;
    fadeOut(fullScreenSwiperMarkup);
    fadeOut(backdrop);
    setTimeout(function () {
      fullScreenSwiper.destroy();
      fullScreenSwiperMarkup.style.display = 'none';
      backdrop.style.display = 'none';
    }, 400);
  }

  window.addEventListener('scroll', function (evt) {
    window.lastScrollTime = new Date().getTime();

    if (isScrolling()) {
      closeFullScreenSwiper();
    }
  });

  function isScrolling() {
    if (isOpen) {
      return window.lastScrollTime && new Date().getTime() < window.lastScrollTime + 500;
    } else {
      return false;
    }
  }
}
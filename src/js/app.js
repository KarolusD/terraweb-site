function fadeIn(el) {
  el.style.opacity = 0;
  let last = +new Date();

  let tick = function () {
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
  let last = +new Date();

  let tick = function () {
    el.style.opacity = +el.style.opacity - (new Date() - last) / 400;
    last = +new Date();

    if (+el.style.opacity > 0) {
      window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);
    }
  };

  tick();
} // Scrolling to Section
(function allClicks() {
  function allButtonsClicks() {
    let allClickableElements = document.querySelectorAll('.czym-sie-zajmujemy, .oferta, .kontakt, .tworzenie-stron-www, .identyfikacja-wizualna, .uslugi-dodatkowe');
    let hamburger = document.querySelector('.site-hamburger');
    let hamburgerMenu = document.querySelector('.hamburger-menu');

    function closeHamburgerMenu() {
      hamburger.classList.remove('site-hamburger--open');
      hamburgerMenu.classList.remove('hamburger-menu--open');
    }

    hamburger.onclick = function () {
      hamburger.classList.toggle('site-hamburger--open');
      hamburgerMenu.classList.toggle('hamburger-menu--open');
      let isOpen = true;
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

    Array.from(allClickableElements).forEach(element => {
      element.addEventListener('click', () => {
        if (element.classList.contains('czym-sie-zajmujemy')) {
          let scroll = new SmoothScroll();
          let anchor = document.querySelector('.section-02');
          scroll.animateScroll(anchor);
        }

        if (element.classList.contains('oferta')) {
          let scroll = new SmoothScroll();
          let anchor = document.querySelector('.section-03');
          scroll.animateScroll(anchor);
        }

        if (element.classList.contains('kontakt')) {
          let scroll = new SmoothScroll();
          let anchor = document.querySelector('.section-07');
          scroll.animateScroll(anchor);
        }

        if (element.classList.contains('tworzenie-stron-www')) {
          let scroll = new SmoothScroll();
          let anchor = document.querySelector(".section-03");
          scroll.animateScroll(anchor);
        }

        if (element.classList.contains('identyfikacja-wizualna')) {
          let scroll = new SmoothScroll();
          let anchor = document.querySelector(".section-04");
          scroll.animateScroll(anchor);
        }

        if (element.classList.contains('uslugi-dodatkowe')) {
          let scroll = new SmoothScroll();
          let anchor = document.querySelector(".section-05");
          scroll.animateScroll(anchor);
        }
      });
    });
  }

  allButtonsClicks();
})();
(function headerFixed() {
  let siteHeader = document.querySelector('.site-header');
  window.addEventListener('scroll', function () {
    let currentScrollPos = document.documentElement.scrollTop;

    if (currentScrollPos > 30) {
      siteHeader.classList.add("site-header--active");
    } else {
      siteHeader.classList.remove("site-header--active");
    }

    let section01 = document.querySelector('.section-01');
    let section02 = document.querySelector('.section-02');
    let section03 = document.querySelector('.section-03');
    let section04 = document.querySelector('.section-04');
    let section05 = document.querySelector('.section-05');
    let section06 = document.querySelector('.section-06');
    let section07 = document.querySelector('.section-07');

    function getTopElemPos(el) {
      let topPos = el.getBoundingClientRect().top;
      return topPos;
    }

    function changeActiveNavItem() {
      // navigation
      let nav = document.getElementById('nav');
      let navItems = Array.from(nav.getElementsByTagName('a')); // navigation inside hamburger menu

      let nav2 = document.getElementById('nav2');
      let nav2Items = Array.from(nav2.getElementsByTagName('a')); // pagination

      let pag = document.getElementById('pagination');
      let pagItems = Array.from(pag.getElementsByTagName("a"));

      if (getTopElemPos(section01) <= 300 && getTopElemPos(section01) >= -200 && !navItems[0].classList.contains("active") && !nav2Items[0].classList.contains("active") && !pagItems[0].classList.contains("active")) {
        navItems.forEach(element => {
          element.classList.remove("active");
        });
        navItems[0].classList.add("active");
        nav2Items.forEach(element => {
          element.classList.remove("active");
        });
        nav2Items[0].classList.add("active");
        pagItems.forEach(element => {
          element.classList.remove("active");
        });
        pagItems[0].classList.add("active");
      }

      if (getTopElemPos(section02) <= 300 && getTopElemPos(section02) >= -200 && !navItems[1].classList.contains("active") && !nav2Items[1].classList.contains("active") && !pagItems[1].classList.contains("active")) {
        navItems.forEach(element => {
          element.classList.remove("active");
        });
        navItems[1].classList.add("active");
        nav2Items.forEach(element => {
          element.classList.remove("active");
        });
        nav2Items[1].classList.add("active");
        pagItems.forEach(element => {
          element.classList.remove("active");
        });
        pagItems[1].classList.add("active");
      }

      if (getTopElemPos(section03) <= 300 && getTopElemPos(section03) >= -200 && !navItems[2].classList.contains("active") && !nav2Items[2].classList.contains("active") && !pagItems[2].classList.contains("active")) {
        navItems.forEach(element => {
          element.classList.remove("active");
        });
        navItems[2].classList.add("active");
        nav2Items.forEach(element => {
          element.classList.remove("active");
        });
        nav2Items[2].classList.add("active");
        pagItems.forEach(element => {
          element.classList.remove("active");
        });
        pagItems[2].classList.add("active");
      }

      if (getTopElemPos(section04) <= 300 && getTopElemPos(section04) >= -200 && !pagItems[3].classList.contains("active")) {
        pagItems.forEach(element => {
          element.classList.remove('active');
        });
        pagItems[3].classList.add("active");
      }

      if (getTopElemPos(section05) <= 300 && getTopElemPos(section05) >= -200 && !pagItems[4].classList.contains("active")) {
        pagItems.forEach(element => {
          element.classList.remove('active');
        });
        pagItems[4].classList.add("active");
      }

      if (getTopElemPos(section06) <= 300 && getTopElemPos(section06) >= -200 && !navItems[3].classList.contains("active") && !nav2Items[3].classList.contains("active") && !pagItems[5].classList.contains("active")) {
        navItems.forEach(element => {
          element.classList.remove("active");
        });
        navItems[3].classList.add("active");
        nav2Items.forEach(element => {
          element.classList.remove("active");
        });
        nav2Items[3].classList.add("active");
        pagItems.forEach(element => {
          element.classList.remove("active");
        });
        pagItems[5].classList.add("active");
      }

      if (getTopElemPos(section07) <= 300 && getTopElemPos(section07) >= -200 && !navItems[4].classList.contains("active") && !nav2Items[4].classList.contains("active") && !pagItems[6].classList.contains("active")) {
        navItems.forEach(element => {
          element.classList.remove("active");
        });
        navItems[4].classList.add("active");
        nav2Items.forEach(element => {
          element.classList.remove("active");
        });
        nav2Items[4].classList.add("active");
        pagItems.forEach(element => {
          element.classList.remove("active");
        });
        pagItems[6].classList.add("active");
      }
    }

    changeActiveNavItem();
  }, false);
})();
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
Array.from(swiperSlide).forEach(slide => {
  slide.addEventListener('click', () => {
    var slideId = slide.id;
    openFullScreenSwiper(slideId);
  });
});

function openFullScreenSwiper(initialSlideNumber) {
  let isOpen = true;
  let mainSwiper = document.querySelector('.swiper-container');
  let fullScreenSwiperMarkup = document.getElementById('fullscreen-swiper'); // fullScreenSwiperMarkup.innerHTML = mainSwiperMarkup;

  fullScreenSwiperMarkup.innerHTML = mainSwiper.innerHTML;
  fullScreenSwiperMarkup.innerHTML += "<div id='fullscreen-swiper-close'></div>";
  fullScreenSwiperMarkup.style.display = 'block';
  fadeIn(fullScreenSwiperMarkup);
  let backdrop = document.getElementById("fullscreen-swiper-backdrop");
  backdrop.style.display = 'block';
  fadeIn(backdrop);
  let fullScreenSwiper = new Swiper("#fullscreen-swiper", {
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
  let fullScreenSwiperClose = document.getElementById('fullscreen-swiper-close');
  fullScreenSwiperClose.addEventListener('click', closeFullScreenSwiper);

  function closeFullScreenSwiper() {
    isOpen = false;
    fadeOut(fullScreenSwiperMarkup);
    fadeOut(backdrop);
    setTimeout(() => {
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
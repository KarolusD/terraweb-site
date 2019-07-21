<<<<<<< HEAD
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
  var fullScreenSwiperMarkup = document.getElementById('fullscreen-swiper');

  // fullScreenSwiperMarkup.innerHTML = mainSwiperMarkup;
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
=======
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
  var fullScreenSwiperMarkup = document.getElementById('fullscreen-swiper');

  // fullScreenSwiperMarkup.innerHTML = mainSwiperMarkup;
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
>>>>>>> 61b72e3f24234bc8e9146633c822f9b5b6e9c2d4
}
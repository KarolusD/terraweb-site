
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
})

function openFullScreenSwiper(initialSlideNumber) {
    let isOpen = true;
    let mainSwiper = document.querySelector('.swiper-container');
    let fullScreenSwiperMarkup = document.getElementById('fullscreen-swiper');
    
    // fullScreenSwiperMarkup.innerHTML = mainSwiperMarkup;
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
    fullScreenSwiperClose.addEventListener('click', closeFullScreenSwiper) 

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
        window.lastScrollTime = new Date().getTime()
            
        if( isScrolling() ) {
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



"use strict";function fadeIn(t){t.style.opacity=0;var i=+new Date;!function e(){t.style.opacity=+t.style.opacity+(new Date-i)/400,i=+new Date,+t.style.opacity<1&&(window.requestAnimationFrame&&requestAnimationFrame(e)||setTimeout(e,16))}()}function fadeOut(t){t.style.opacity=1;var i=+new Date;!function e(){t.style.opacity=+t.style.opacity-(new Date-i)/400,i=+new Date,0<+t.style.opacity&&(window.requestAnimationFrame&&requestAnimationFrame(e)||setTimeout(e,16))}()}!function(){var e,i,a;e=document.querySelectorAll(".czym-sie-zajmujemy, .oferta, .kontakt, .tworzenie-stron-www, .identyfikacja-wizualna, .uslugi-dodatkowe"),i=document.querySelector(".site-hamburger"),a=document.querySelector(".hamburger-menu"),i.onclick=function(){i.classList.toggle("site-hamburger--open"),a.classList.toggle("hamburger-menu--open");var t=!0;window.addEventListener("scroll",function(e){window.lastScrollTime=(new Date).getTime(),t&&window.lastScrollTime&&(new Date).getTime()<window.lastScrollTime+500&&(t=!1,i.classList.remove("site-hamburger--open"),a.classList.remove("hamburger-menu--open"))})},Array.from(e).forEach(function(m){m.addEventListener("click",function(){if(m.classList.contains("czym-sie-zajmujemy")){var e=new SmoothScroll,t=document.querySelector(".section-02");e.animateScroll(t)}if(m.classList.contains("oferta")){var i=new SmoothScroll,a=document.querySelector(".section-03");i.animateScroll(a)}if(m.classList.contains("kontakt")){var c=new SmoothScroll,s=document.querySelector(".section-07");c.animateScroll(s)}if(m.classList.contains("tworzenie-stron-www")){var n=new SmoothScroll,o=document.querySelector(".section-03");n.animateScroll(o)}if(m.classList.contains("identyfikacja-wizualna")){var r=new SmoothScroll,l=document.querySelector(".section-04");r.animateScroll(l)}if(m.classList.contains("uslugi-dodatkowe")){var d=new SmoothScroll,u=document.querySelector(".section-05");d.animateScroll(u)}})})}(),function(){var f=document.querySelector(".site-header");window.addEventListener("scroll",function(){30<document.documentElement.scrollTop?f.classList.add("site-header--active"):f.classList.remove("site-header--active");var e,t,i,a,c,s,n=document.querySelector(".section-01"),o=document.querySelector(".section-02"),r=document.querySelector(".section-03"),l=document.querySelector(".section-04"),d=document.querySelector(".section-05"),u=document.querySelector(".section-06"),m=document.querySelector(".section-07");function v(e){return e.getBoundingClientRect().top}e=document.getElementById("nav"),t=Array.from(e.getElementsByTagName("a")),i=document.getElementById("nav2"),a=Array.from(i.getElementsByTagName("a")),c=document.getElementById("pagination"),s=Array.from(c.getElementsByTagName("a")),v(n)<=300&&-200<=v(n)&&!t[0].classList.contains("active")&&!a[0].classList.contains("active")&&!s[0].classList.contains("active")&&(t.forEach(function(e){e.classList.remove("active")}),t[0].classList.add("active"),a.forEach(function(e){e.classList.remove("active")}),a[0].classList.add("active"),s.forEach(function(e){e.classList.remove("active")}),s[0].classList.add("active")),v(o)<=300&&-200<=v(o)&&!t[1].classList.contains("active")&&!a[1].classList.contains("active")&&!s[1].classList.contains("active")&&(t.forEach(function(e){e.classList.remove("active")}),t[1].classList.add("active"),a.forEach(function(e){e.classList.remove("active")}),a[1].classList.add("active"),s.forEach(function(e){e.classList.remove("active")}),s[1].classList.add("active")),v(r)<=300&&-200<=v(r)&&!t[2].classList.contains("active")&&!a[2].classList.contains("active")&&!s[2].classList.contains("active")&&(t.forEach(function(e){e.classList.remove("active")}),t[2].classList.add("active"),a.forEach(function(e){e.classList.remove("active")}),a[2].classList.add("active"),s.forEach(function(e){e.classList.remove("active")}),s[2].classList.add("active")),v(l)<=300&&-200<=v(l)&&!s[3].classList.contains("active")&&(s.forEach(function(e){e.classList.remove("active")}),s[3].classList.add("active")),v(d)<=300&&-200<=v(d)&&!s[4].classList.contains("active")&&(s.forEach(function(e){e.classList.remove("active")}),s[4].classList.add("active")),v(u)<=300&&-200<=v(u)&&!t[3].classList.contains("active")&&!a[3].classList.contains("active")&&!s[5].classList.contains("active")&&(t.forEach(function(e){e.classList.remove("active")}),t[3].classList.add("active"),a.forEach(function(e){e.classList.remove("active")}),a[3].classList.add("active"),s.forEach(function(e){e.classList.remove("active")}),s[5].classList.add("active")),v(m)<=300&&-200<=v(m)&&!t[4].classList.contains("active")&&!a[4].classList.contains("active")&&!s[6].classList.contains("active")&&(t.forEach(function(e){e.classList.remove("active")}),t[4].classList.add("active"),a.forEach(function(e){e.classList.remove("active")}),a[4].classList.add("active"),s.forEach(function(e){e.classList.remove("active")}),s[6].classList.add("active"))},!1)}();var mySwiper=new Swiper(".swiper-container",{direction:"horizontal",loop:!0,speed:600,parallax:!0,spaceBetween:-30,effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},pagination:{el:".swiper-pagination",dynamicBullets:!0,clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),swiperSlide=document.querySelectorAll(".swiper-slide");function openFullScreenSwiper(e){var t=!0,i=document.querySelector(".swiper-container"),a=document.getElementById("fullscreen-swiper");a.innerHTML=i.innerHTML,a.innerHTML+="<div id='fullscreen-swiper-close'></div>",a.style.display="block",fadeIn(a);var c=document.getElementById("fullscreen-swiper-backdrop");c.style.display="block",fadeIn(c);var s=new Swiper("#fullscreen-swiper",{direction:"horizontal",loop:!0,initialSlide:e-1,speed:600,parallax:!0,spaceBetween:10,effect:"coverflow",grabCursor:!0,centeredSlides:!0,paginationClickable:!0,slidesPerView:1,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},pagination:{el:".swiper-pagination",dynamicBullets:!0,clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});function n(){t=!1,fadeOut(a),fadeOut(c),setTimeout(function(){s.destroy(),a.style.display="none",c.style.display="none"},400)}s.update(),document.getElementById("fullscreen-swiper-close").addEventListener("click",n),window.addEventListener("scroll",function(e){window.lastScrollTime=(new Date).getTime(),!!t&&window.lastScrollTime&&(new Date).getTime()<window.lastScrollTime+500&&n()})}Array.from(swiperSlide).forEach(function(e){e.addEventListener("click",function(){openFullScreenSwiper(e.id)})});
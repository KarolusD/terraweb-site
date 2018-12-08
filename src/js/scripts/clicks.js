(function allClicks(){

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
                window.lastScrollTime = new Date().getTime()

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
        }

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

}());

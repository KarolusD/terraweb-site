(function allClicks(){

    function allButtonsClicks() {
    
        let allClickableElements = document.querySelectorAll('.czym-sie-zajmujemy, .oferta, .kontakt, .tworzenie-stron-www, .identyfikacja-wizualna, .uslugi-dodatkowe');
    
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

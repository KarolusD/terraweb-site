(function headerFixed() {

    let siteHeader = document.querySelector('.site-header');

    window.addEventListener('scroll', function() {

        let currentScrollPos = document.documentElement.scrollTop;
        
        if(currentScrollPos > 30) {
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
            let navItems = Array.from(nav.getElementsByTagName('a'));
            
            // pagination
            let pag = document.getElementById('pagination')
            let pagItems = Array.from(pag.getElementsByTagName("a"));

            if (getTopElemPos(section01) <= 300 && getTopElemPos(section01) >= -200 && !navItems[0].classList.contains('active') && !pagItems[0].classList.contains('active')) {
                navItems.forEach(element => {
                    element.classList.remove("active");
                });
                navItems[0].classList.add('active');
                

                pagItems.forEach(element => {
                  element.classList.remove("active");
                });
                pagItems[0].classList.add("active");
            }  
            
            if (getTopElemPos(section02) <= 300 && getTopElemPos(section02) >= -200 && !navItems[1].classList.contains('active') && !pagItems[1].classList.contains('active')) {
                navItems.forEach(element => {
                  element.classList.remove("active");
                });
                navItems[1].classList.add('active');

                pagItems.forEach(element => {
                  element.classList.remove("active");
                });
                pagItems[1].classList.add("active");
            }

            if (getTopElemPos(section03) <= 300 && getTopElemPos(section03) >= -200 && !navItems[2].classList.contains("active") && !pagItems[2].classList.contains("active")) {
                navItems.forEach(element => {
                  element.classList.remove("active");
                });
                navItems[2].classList.add("active");

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

            if (getTopElemPos(section06) <= 300 && getTopElemPos(section06) >= -200 && !navItems[3].classList.contains("active") && !pagItems[5].classList.contains("active")) {
                navItems.forEach(element => {
                  element.classList.remove("active");
                });
                navItems[3].classList.add("active");

                pagItems.forEach(element => {
                  element.classList.remove("active");
                });
                pagItems[5].classList.add("active");
            }

            if (getTopElemPos(section07) <= 300 && getTopElemPos(section07) >= -200 && !navItems[4].classList.contains("active") && !pagItems[6].classList.contains("active")) {
                navItems.forEach(element => {
                    element.classList.remove("active");
                });
                navItems[4].classList.add("active");

                pagItems.forEach(element => {
                  element.classList.remove("active");
                });
                pagItems[6].classList.add("active");
            }
            
        }
        changeActiveNavItem();
        
    }, false);
    
}());








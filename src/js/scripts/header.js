(function headerFixed() {

    let siteHeader = document.querySelector('.site-header');

    window.addEventListener('scroll', function() {

        let currentScrollPos = document.documentElement.scrollTop || document.body.scrollTop ;
      
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

        function paginationDetection(){
            // pagination
            let pag = document.getElementById('pagination')
            let pagItems = Array.from(pag.getElementsByTagName("a"));

            // navigation
            let nav = document.getElementById('nav');
            let navItems = Array.from(nav.getElementsByTagName('a'));

            // navigation inside hamburger menu
            let nav2 = document.getElementById('nav2');
            let nav2Items = Array.from(nav2.getElementsByTagName('a'));

        

       for (let i = 1;i <=7 ; i++){
        let section = eval(`section0${i}`);
           if (getTopElemPos(section) <= 300
                && getTopElemPos(section) >= -200 
                && !pagItems[i-1].classList.contains("active")) {
            //pagination highlight
               pagItems.forEach(element => {
                   element.classList.remove("active");
               });
               pagItems[i - 1].classList.add("active");

               //menu links highlight
               //menu config
               //pagination number => menu section higlighted
               let menuArr = {
                   0: 0,
                   1: 1,
                   2: 2,
                   3: 2,
                   4: 2,
                   5: 3,
                   6: 4
               };
               let menuIndex = menuArr[i - 1];
               navItems.forEach(element => {
                   element.classList.remove("active");
               });
               navItems[menuIndex].classList.add("active");

               nav2Items.forEach(element => {
                   element.classList.remove("active");
               });
               nav2Items[menuIndex].classList.add("active");
             }
        
       }
    }
        paginationDetection();
        
        function getTopElemPos(el) {
            let topPos = el.getBoundingClientRect().top;
            return topPos;
        }
        
    
        function changeActiveNavItem() {

            // navigation
            let nav = document.getElementById('nav');
            let navItems = Array.from(nav.getElementsByTagName('a'));

            // navigation inside hamburger menu
            let nav2 = document.getElementById('nav2');
            let nav2Items = Array.from(nav2.getElementsByTagName('a'));
            
            // pagination
            let pag = document.getElementById('pagination')
            let pagItems = Array.from(pag.getElementsByTagName("a"));

            if (getTopElemPos(section01) <= 300 
            && getTopElemPos(section01) >= -200 
            && !navItems[0].classList.contains("active") 
            && !nav2Items[0].classList.contains("active") 
            && !pagItems[0].classList.contains("active")) {

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
            
            if (getTopElemPos(section02) <= 300 
            && getTopElemPos(section02) >= -200 
            && !navItems[1].classList.contains("active") 
            && !nav2Items[1].classList.contains("active") 
            && !pagItems[1].classList.contains("active")) {

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

            if (getTopElemPos(section03) <= 300 
            && getTopElemPos(section03) >= -200 
            && !navItems[2].classList.contains("active") 
            && !nav2Items[2].classList.contains("active") 
            && !pagItems[2].classList.contains("active")) {

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

            if (getTopElemPos(section04) <= 300 
            && getTopElemPos(section04) >= -200 
            && !pagItems[3].classList.contains("active")) {
                
                pagItems.forEach(element => {
                    element.classList.remove('active');
                });
                pagItems[3].classList.add("active");
            }

            if (getTopElemPos(section05) <= 300 
            && getTopElemPos(section05) >= -200 
            && !pagItems[4].classList.contains("active")) {
                
                pagItems.forEach(element => {
                    element.classList.remove('active');
                });
                pagItems[4].classList.add("active");

              navItems[2].classList.add("active");
              navItems[2].classList.add("active");

              nav2Items[3].classList.remove("active");
              nav2Items[3].classList.remove("active");
            }
          console.log(getTopElemPos(section06));
            if (getTopElemPos(section06) <= 310 
            && getTopElemPos(section06) >= -100 
            && !navItems[3].classList.contains("active") 
            && !nav2Items[3].classList.contains("active") 
            && !pagItems[5].classList.contains("active")) {
              console.log("in if");
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

            if (getTopElemPos(section07) <= 300 
            && getTopElemPos(section07) >= -200 
            && !navItems[4].classList.contains("active") 
            && !nav2Items[4].classList.contains("active") 
            && !pagItems[6].classList.contains("active")) {

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
        //changeActiveNavItem();
        
    }, false);
    
}());








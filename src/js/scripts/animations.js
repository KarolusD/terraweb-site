<<<<<<< HEAD
function fadeIn(el) {
    el.style.opacity = 0;

    let last = +new Date();
    let tick = function () {
        el.style.opacity = +el.style.opacity + (new Date() - last) / 400;
        last = +new Date();

        if (+el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
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
            (window.requestAnimationFrame && requestAnimationFrame(tick)) ||
                setTimeout(tick, 16);
        }
    };

    tick();
}

// Scrolling to Section 

=======
function fadeIn(el) {
    el.style.opacity = 0;

    let last = +new Date();
    let tick = function () {
        el.style.opacity = +el.style.opacity + (new Date() - last) / 400;
        last = +new Date();

        if (+el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
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
            (window.requestAnimationFrame && requestAnimationFrame(tick)) ||
                setTimeout(tick, 16);
        }
    };

    tick();
}

// Scrolling to Section 

>>>>>>> 61b72e3f24234bc8e9146633c822f9b5b6e9c2d4

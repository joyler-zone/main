"use strict";
window.onload = function () {
    window.setTimeout(fadeout, 500);
    var prevScrollpos = window.scrollY;
    var titleBar = document.getElementById("title-bar");
    var bsCollapse = new bootstrap.Collapse(titleBar, {
        toggle: false
    });
    let hidden = false;
    window.onscroll = function() {
        var currentScrollPos = window.scrollY;
        if (Math.abs(prevScrollpos - currentScrollPos) > 50) {
            if (prevScrollpos > currentScrollPos) {
                if (hidden) {
                    bsCollapse.show();
                    console.log("SHOW");
                    hidden = false;
                }
            } else if (!hidden) {
                bsCollapse.hide();
                console.log("HIDE");
                hidden = true;
            }
            prevScrollpos = currentScrollPos;
        }
        //console.log("scroll: "+currentScrollPos);
    }
}
function fadeout() {
    document.querySelector('.preloader').style.opacity = '0';
    document.querySelector('.preloader').style.display = 'none';
}

let navbarToggler = document.querySelector(".navbar-toggler");
var navbarCollapse = document.querySelector(".navbar-collapse");
document.querySelectorAll(".nav-link").forEach(e => e.addEventListener("click", () => {
    navbarToggler.classList.remove("active");
    navbarCollapse.classList.remove('show')
}));
navbarToggler.addEventListener('click', function () {
    navbarToggler.classList.toggle("active");
});
new WOW({
    mobile:false,
    /*offset: -1080 - mobile*/
}).init();

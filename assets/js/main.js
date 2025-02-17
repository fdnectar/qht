
(function () {
    "use strict";

    function toggleScrolled() {
        const selectBody = document.querySelector('body');
        const selectHeader = document.querySelector('#header');
        if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
        window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    }
    
    document.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);

    // function aosInit() {
    //     AOS.init({
    //         duration: 600,
    //         easing: 'ease-in-out',
    //         once: true,
    //         mirror: false
    //     });
    // }
    // window.addEventListener('load', aosInit);
})



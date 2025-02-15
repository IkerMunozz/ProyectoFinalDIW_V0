document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.header__menu-toggle');
    const nav = document.querySelector('.header__nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        const isClickInsideNav = nav.contains(event.target);
        const isClickInsideToggle = menuToggle.contains(event.target);
        
        if (!isClickInsideNav && !isClickInsideToggle && nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    });
});





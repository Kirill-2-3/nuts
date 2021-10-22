const body = document.body;
const html = document.html;

const intro = document.getElementById('intro');
const header = document.getElementById('header');
const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
const menuAnim = document.getElementById('menuAnim');

/* Fix header */

window.addEventListener('scroll', function() {
    let elementHeight = intro.offsetHeight;
    let scrollTop = window.pageYOffset;

    if (scrollTop > elementHeight) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }

});

window.addEventListener('load', function() {
    let elementHeight = intro.offsetHeight;
    let scrollTop = window.pageYOffset;

    if (scrollTop > elementHeight) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }

});

window.addEventListener('resize', function() {
    let elementHeight = intro.offsetHeight;
    let scrollTop = window.pageYOffset;

    if (scrollTop > elementHeight) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }

});


/* Slick scroll */

let scrollElems = document.querySelectorAll('[data-scroll]');

for(let scrollElem of scrollElems) {

    scrollElem.addEventListener('click', function(e) {
    e.preventDefault();

    let scrollAtr = this.getAttribute('data-scroll');
    let scrollCurrent = document.getElementById(scrollAtr);
    let elementPos = scrollCurrent.getBoundingClientRect().top;

    window.scrollBy({
        top: elementPos - 200,
        behavior: 'smooth'
    })

    nav.classList.remove("show");
    burger.classList.remove("active");
    menuAnim.classList.remove("show");
    body.classList.remove("not-scroll");

    });

}


/* Burger */

burger.addEventListener('click', function(e) {
    e.preventDefault();

    burger.classList.toggle('active');
    nav.classList.toggle('show');
    header.classList.toggle('show');
    menuAnim.classList.toggle('show');
    body.classList.toggle('not-scroll');

});
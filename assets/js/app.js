const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksLi = document.querySelectorAll('.nav-links li');
const year = document.querySelector('.year');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

navLinksLi.forEach((li) => {
    li.addEventListener('click', () => {
        navLinksLi.forEach((li) => {
            li.classList.remove('active');
        });
        li.classList.add('active');
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

year.innerHTML = new Date().getFullYear();

const typed = new Typed('#hero-titles', {
    strings: ['Love to learn new stuffs... ❤️', 'Typed JS is awesome!'],
    typeSpeed: 40,
    loop: true,
    loopCount: Infinity,
    backSpeed: 40,
});

//AOS

AOS.init();
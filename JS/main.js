const navToggle = document.querySelector('#navToggle');
const nav = document.querySelector('nav');
const navIcon = document.querySelectorAll('.navIcon');
const hamburger = document.querySelector('#hamburger');

// hamburger

navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    navIcon.forEach(icon => {
        icon.classList.toggle('hidden');
    });
});

// hamburger-resize of window after open before closing

window.addEventListener("resize", () => {
    if(document.body.clientWidth > 720) {
    nav.classList.remove('open');
    navIcon.forEach(icon => {
        icon.classList.add('hidden')
    });

    hamburger.classList.remove('hidden');

    }});
const menu = document.querySelector('#menu');
const nav = document.querySelector('nav');
const navIcon = document.querySelectorAll('.navIcon');


// mobile menu icon

menu.addEventListener('click', () => {
    nav.classList.toggle('open');
    navIcon.forEach(icon => {
        icon.classList.toggle('hidden');
    });
});



const hamburger = document.querySelector('#hamburger');
const showNav = document.querySelector('.nav--container');
const close = document.querySelector('#close');

hamburger.addEventListener('click', ()=> {
    showNav.style.transform = 'translate(0, 0)';
});

close.addEventListener('click', ()=> {
    showNav.style.transform = 'translate(100%, 0px)';
});
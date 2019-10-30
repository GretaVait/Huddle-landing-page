const intro = document.querySelector('#intro');
const features = document.querySelector('#features');
const footer = document.querySelector('footer');

function fadeIn(section) {
    if (window.pageYOffset >= section.offsetTop - 350) {
        section.style.transform = 'translate(0px, 0px)';
        section.style.opacity = '1';
    }
}

window.addEventListener('load', ()=> {
    fadeIn(intro);
    
});

window.addEventListener('scroll', ()=> {
    fadeIn(features);
    fadeIn(footer);
});

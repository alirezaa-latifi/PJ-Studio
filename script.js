"use strict";
console.log('connected');


const hamburgerBtn = document.querySelector('.responsive-menu__label');
const checkboxBtn = document.querySelector('.responsive-menu__checkbox');
const overlayEl = document.querySelector('.overlay');
const bodyEl = document.querySelector('body');


hamburgerBtn.addEventListener('click', () => {
    overlayEl.classList.toggle('hidden');
    bodyEl.classList.toggle('no-scroll');
});


overlayEl.addEventListener('click', function() {
    checkboxBtn.click();
    overlayEl.classList.add('hidden')
    
});



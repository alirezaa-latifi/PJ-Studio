"use strict";
console.log('connected');

//  Responsive Menue
const hamburgerBtn = document.querySelector('.responsive-menu__label');
const checkboxBtn = document.querySelector('.responsive-menu__checkbox');
const overlayEl = document.querySelector('.overlay');
const bodyEl = document.querySelector('body');


hamburgerBtn.addEventListener('click', () => {
    overlayEl.classList.toggle('hidden');
    bodyEl.classList.toggle('no-scroll');
});


overlayEl.addEventListener('click', function () {
    checkboxBtn.click();
    bodyEl.classList.toggle('no-scroll');
    overlayEl.classList.add('hidden')

});

// Active process modifier
const processItemEls = document.querySelectorAll('.item--process');
processItemEls.forEach( el => {
    el.addEventListener('click', function(){
        processItemEls.forEach( el => {
            el.classList.remove('item--active');
        });
        el.classList.toggle('item--active')
    });
});


// Active offer modifier
const offerItemEls = document.querySelectorAll('.offer__item');
offerItemEls.forEach( el => {
    el.addEventListener('click', function(){
        offerItemEls.forEach( el => {
            el.classList.remove('offer__item--active');
        });
        el.classList.toggle('offer__item--active')
    });
});
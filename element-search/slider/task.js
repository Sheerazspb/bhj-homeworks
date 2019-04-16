let slides = document.querySelectorAll('.slider__item');
let preveous = document.querySelector('.slider__arrow_prev');
let next = document.querySelector('.slider__arrow_next');

let totalSlides = 0;

next.onclick = function () {
    totalSlides++;
    for (let slide of Array.from(slides)) {
        slide.className = 'slider__item';
    }
    if (totalSlides >= slides.length) {
        totalSlides = 0;
    }
    slides[totalSlides].className = 'slider__item slider__item_active';
};

preveous.onclick = function () {
    totalSlides--;
    for (let slide of Array.from(slides)) {
        slide.className = 'slider__item';
    }
    if (totalSlides < 0) {
        totalSlides = slides.length - 1;
    }
    slides[totalSlides].className = 'slider__item slider__item_active';
};

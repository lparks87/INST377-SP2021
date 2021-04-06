/* Put your javascript in here */
/* label the images, just for convenience, to visually track them */

let slidePosition = 0;
const slides = document.getElementsByClassName('carousel_items');
const totalSlides = slides.length;

/* console.log(totalSlides); */

document.
 getElementById('carousel_button_prev')
 .addEventListener("click", function(){
    moveToPrevSlide();
})

document.
 getElementById('carousel_button_next')
 .addEventListener("click", function(){
    moveToNextSlide();
})

function moveToPrevSlide() {
    if(slidePosition == 0) {
        slidePosition = totalSlides - 1;
    }
    else {
        slidePosition--;
    }
    updateSlidePosition();
}

function moveToNextSlide() {
    if(slidePosition == totalSlides - 1) {
        slidePosition = 0;
    }
    else {
        slidePosition++;
    }
    updateSlidePosition();
}

function updateSlidePosition() {
    for(let slide of slides) {
        slide.classList.remove('carousel_items--visible');
        slide.classList.add('carousel_items--hidden');
    }
    slides[slidePosition].classList.add('carousel_items--visible');
}

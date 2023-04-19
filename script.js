const nav = document.querySelector('nav');
const toggle_btn = document.getElementById('toggle-btn');
const content = document.querySelector('section');

// Event listener to the 'toggle_btn' element that listens for a click event. 
// When the button is clicked, toggle the 'hide' class on the 'nav' element and the 'expand' class on the 'content' element.
toggle_btn.onclick = function() {
    nav.classList.toggle('hide');
    content.classList.toggle('expand');
};

//Hero Image Slideshow https://www.youtube.com/watch?v=DpHi9Ruu8R4&t=183s//
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
//Hero Image Slideshow https://www.youtube.com/watch?v=DpHi9Ruu8R4&t=183s//



//Tutorial Slider https://www.youtube.com/watch?v=OQZNAMjC6Vg&list=LL&index=13&t=642s//
const productContainers = [...document.querySelectorAll('.tutorial-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
//Tutorial Slider https://www.youtube.com/watch?v=OQZNAMjC6Vg&list=LL&index=13&t=642s//
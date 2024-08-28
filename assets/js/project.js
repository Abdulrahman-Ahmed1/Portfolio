let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const carousel = document.querySelector('.carousel');
    const cards = document.querySelectorAll('.project-card');
    
    if (n > cards.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = cards.length; }

    carousel.style.transform = `translateX(-${(slideIndex - 1) * (100 / cards.length)}%)`;
}

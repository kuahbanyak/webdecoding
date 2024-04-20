let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
    slides[currentSlide].className = 'slide left';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide center';
    slides[(currentSlide + 1) % slides.length].className = 'slide right';
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds
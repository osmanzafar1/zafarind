let currentSlide = 0;
const totalSlides = 5;

function updateCarousel() {
    const slidesContainer = document.getElementById('carousel-slides');
    const dots = document.querySelectorAll('.carousel-dot');
    
    // Move slides
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update dots
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function carouselNext() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function carouselPrev() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

// Initialize dots
document.addEventListener('DOMContentLoaded', function() {
    const dotsContainer = document.getElementById('carousel-dots');
    
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('button');
        dot.className = 'carousel-dot';
        if (i === 0) dot.classList.add('active');
        dot.onclick = () => goToSlide(i);
        dotsContainer.appendChild(dot);
    }
});
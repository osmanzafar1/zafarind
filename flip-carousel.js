let flipCurrentIndex = 2; // Start with middle card
const totalFlipCards = 5;

function getCardPosition(index, currentIndex) {
    const diff = (index - currentIndex + totalFlipCards) % totalFlipCards;
    
    if (diff === 0) {
        return { z: 0, x: 0, rotate: 0, scale: 1, opacity: 1 };
    } else if (diff === 1) {
        return { z: -100, x: 200, rotate: -15, scale: 0.9, opacity: 0.7 };
    } else if (diff === totalFlipCards - 1) {
        return { z: -100, x: -200, rotate: 15, scale: 0.9, opacity: 0.7 };
    } else if (diff === 2) {
        return { z: -200, x: 400, rotate: -20, scale: 0.8, opacity: 0.4 };
    } else {
        return { z: -200, x: -400, rotate: 20, scale: 0.8, opacity: 0.4 };
    }
}

function updateFlipCarousel() {
    const cards = document.querySelectorAll('.flip-card');
    const dots = document.querySelectorAll('.flip-dot');
    
    cards.forEach((card, index) => {
        const pos = getCardPosition(index, flipCurrentIndex);
        card.style.transform = `translateX(${pos.x}px) translateZ(${pos.z}px) rotateY(${pos.rotate}deg) scale(${pos.scale})`;
        card.style.opacity = pos.opacity;
        card.style.zIndex = index === flipCurrentIndex ? 10 : 5 - Math.abs(index - flipCurrentIndex);
        
        // Make only non-active cards clickable
        if (index === flipCurrentIndex) {
            card.style.cursor = 'default';
        } else {
            card.style.cursor = 'pointer';
        }
    });
    
    // Update dots
    dots.forEach((dot, index) => {
        if (index === flipCurrentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function flipNext() {
    flipCurrentIndex = (flipCurrentIndex + 1) % totalFlipCards;
    updateFlipCarousel();
}

function flipPrev() {
    flipCurrentIndex = (flipCurrentIndex - 1 + totalFlipCards) % totalFlipCards;
    updateFlipCarousel();
}

function goToFlipSlide(index) {
    flipCurrentIndex = index;
    updateFlipCarousel();
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Create dots
    const dotsContainer = document.getElementById('flip-dots');
    for (let i = 0; i < totalFlipCards; i++) {
        const dot = document.createElement('button');
        dot.className = 'flip-dot';
        if (i === flipCurrentIndex) dot.classList.add('active');
        dot.onclick = () => goToFlipSlide(i);
        dotsContainer.appendChild(dot);
    }
    
    // Add click handlers to cards
    const cards = document.querySelectorAll('.flip-card');
    cards.forEach((card, index) => {
        card.onclick = () => {
            if (index !== flipCurrentIndex) {
                goToFlipSlide(index);
            }
        };
    });
    
    // Initial update
    updateFlipCarousel();
});
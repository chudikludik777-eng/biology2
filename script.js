// Счетчик текущего слайда
let currentSlide = 1;

// Обновляем номер слайда при скролле
window.addEventListener('scroll', function() {
    const slides = document.querySelectorAll('.slide');
    
    slides.forEach((slide, index) => {
        const slideTop = slide.offsetTop;
        const slideBottom = slideTop + slide.offsetHeight;
        const scrollPos = window.scrollY + 100;
        
        if (scrollPos >= slideTop && scrollPos < slideBottom) {
            currentSlide = index + 1;
            document.getElementById('current-slide').innerText = currentSlide;
        }
    });
});

// Навигация с клавиатуры
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowDown') {
        window.scrollBy(0, window.innerHeight);
    }
    if (e.key === 'ArrowUp') {
        window.scrollBy(0, -window.innerHeight);
    }
});

// Клик на боксы
const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('click', function() {
        this.style.backgroundColor = '#e74c3c';
        setTimeout(() => {
            this.style.backgroundColor = '#3498db';
        }, 300);
    });
});


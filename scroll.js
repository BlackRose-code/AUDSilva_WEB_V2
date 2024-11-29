// Scroll Progress Bar
function updateScrollProgress() {
    const scrollProgress = document.querySelector('.scroll-progress');
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.pageYOffset / totalHeight) * 100;
    scrollProgress.style.width = `${progress}%`;
}

// Scroll to Top Button
function toggleScrollToTop() {
    const scrollToTop = document.querySelector('.scroll-to-top');
    if (window.pageYOffset > 500) {
        scrollToTop.classList.add('visible');
    } else {
        scrollToTop.classList.remove('visible');
    }
}

// Scroll Animation for Sections
function revealOnScroll() {
    const sections = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - revealPoint) {
            section.classList.add('visible');
        }
    });
}

// Smooth Scroll to Top
document.querySelector('.scroll-to-top').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Event Listeners
window.addEventListener('scroll', () => {
    updateScrollProgress();
    toggleScrollToTop();
    revealOnScroll();
});

// Initial call to reveal sections that are already in view
revealOnScroll();

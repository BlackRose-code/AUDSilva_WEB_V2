// Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Certificates Data
const certificateItems = [
    {
        title: 'Cybersecurity Certification',
        description: 'Advanced certification in cybersecurity and system protection.',
        image: 'assets/cert1.jpg',
        tags: ['Security', 'Networking', 'Compliance']
    },
    {
        title: 'Web Development Certificate',
        description: 'Professional certification in modern web development.',
        image: 'assets/cert2.jpg',
        tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
        title: 'Music Production Certificate',
        description: 'Professional certification in digital music production.',
        image: 'assets/cert3.jpg',
        tags: ['Music', 'Production', 'Digital Audio']
    }
];

// Populate Certificates Section
const certificatesGrid = document.querySelector('.certificates-grid');
certificateItems.forEach(cert => {
    const certElement = document.createElement('div');
    certElement.className = 'certificate-item';
    certElement.innerHTML = `
        <div class="certificate-content">
            <img src="${cert.image}" alt="${cert.title}">
            <div class="certificate-info">
                <h3>${cert.title}</h3>
                <p>${cert.description}</p>
                <div class="tags">
                    ${cert.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
    certificatesGrid.appendChild(certElement);
});

// Contact Form
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Dynamic year in footer
document.querySelector('footer p').innerHTML = `&copy; ${new Date().getFullYear()} AUDSilva. All rights reserved.`;

// Add scroll-based navbar background
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 25, 47, 0.95)';
    } else {
        navbar.style.background = 'transparent';
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Image Slider
const initImageSlider = () => {
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    let autoSlideInterval;

    const showSlide = (index) => {
        sliderContainer.style.transform = `translateX(-${index * 33.333}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
        currentSlide = index;
    };

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    };

    const prevSlide = () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    };

    const startAutoSlide = () => {
        stopAutoSlide();
        autoSlideInterval = setInterval(nextSlide, 3000);
    };

    const stopAutoSlide = () => {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
        }
    };

    // Touch handling
    let touchStartX = 0;
    let touchEndX = 0;

    sliderContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        stopAutoSlide();
    });

    sliderContainer.addEventListener('touchmove', (e) => {
        touchEndX = e.touches[0].clientX;
    });

    sliderContainer.addEventListener('touchend', () => {
        const difference = touchStartX - touchEndX;
        if (Math.abs(difference) > 50) {
            if (difference > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
        startAutoSlide();
    });

    // Event Listeners
    prevBtn.addEventListener('click', () => {
        prevSlide();
        startAutoSlide();
    });

    nextBtn.addEventListener('click', () => {
        nextSlide();
        startAutoSlide();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            startAutoSlide();
        });
    });

    // Start auto-sliding
    startAutoSlide();
};

// Initialize slider when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initImageSlider();
});

document.addEventListener('DOMContentLoaded', function() {
    // Navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            navToggle.classList.toggle('toggle-active');
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                if (navLinks.classList.contains('nav-active')) {
                    navLinks.classList.remove('nav-active');
                    navToggle.classList.remove('toggle-active');
                }
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.25
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach((element) => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let currentPlayer = null;
    let currentButton = null;

    const initializePlayers = () => {
        const buttons = document.querySelectorAll('.play-button');
        
        buttons.forEach((button, index) => {
            const trackUrl = button.dataset.trackUrl;
            const playerId = `player${index + 1}`;
            
            // Initialize SoundCloud Widget
            const iframe = document.createElement('iframe');
            iframe.src = `https://w.soundcloud.com/player/?url=${trackUrl}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false`;
            iframe.width = '100%';
            iframe.height = '166';
            iframe.frameBorder = 'no';
            iframe.allow = 'autoplay';
            
            const playerContainer = document.getElementById(playerId);
            playerContainer.appendChild(iframe);
            
            const player = SC.Widget(iframe);
            
            button.addEventListener('click', () => {
                if (currentPlayer && currentPlayer !== player) {
                    currentPlayer.pause();
                    if (currentButton) {
                        currentButton.innerHTML = '<i class="fas fa-play"></i>';
                        currentButton.classList.remove('playing');
                    }
                }
                
                player.isPaused((isPaused) => {
                    if (isPaused) {
                        player.play();
                        button.innerHTML = '<i class="fas fa-pause"></i>';
                        button.classList.add('playing');
                        currentPlayer = player;
                        currentButton = button;
                    } else {
                        player.pause();
                        button.innerHTML = '<i class="fas fa-play"></i>';
                        button.classList.remove('playing');
                    }
                });
            });
            
            // Update button when track ends
            player.bind(SC.Widget.Events.FINISH, () => {
                button.innerHTML = '<i class="fas fa-play"></i>';
                button.classList.remove('playing');
            });
        });
    };

    // Initialize after SoundCloud API is loaded
    if (window.SC) {
        initializePlayers();
    } else {
        window.addEventListener('load', initializePlayers);
    }
});

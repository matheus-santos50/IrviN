/* ===================================
   HORROR BAND WEBSITE - JAVASCRIPT
   VHS 80s Interactive Effects
   ================================== */

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all interactive features
    initMobileMenu();
    initSmoothScrolling();
    initScrollAnimations();
    initVHSEffects();
    initGlitchEffects();
    initFormHandling();
    initAudioControls();
    initGalleryLightbox();
    
    console.log('🎸 Horror Band Website Loaded - VHS Mode Activated');
});

/* ===================================
   MOBILE NAVIGATION
   ================================== */

   function initMobileMenu() {
    const mobileToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (mobileToggle && navMenu) {
        // Toggle mobile menu
        mobileToggle.addEventListener('click', function(e) {
            e.stopPropagation(); // evita que o clique borre ao clicar no botão
            mobileToggle.classList.toggle('active');
            navMenu.classList.toggle('active');

            if (navMenu.classList.contains('active')) {
                addGlitchEffect(navMenu, 300); // efeito VHS ao abrir
            }
        });

        // Close menu when clicking nav links
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileToggle.contains(e.target) && !navMenu.contains(e.target)) {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

/* ===================================
   SMOOTH SCROLLING
   ================================== */

function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Add VHS static effect during scroll
                addStaticEffect(500);
                
                // Smooth scroll to target
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Add glitch effect to target section
                setTimeout(() => {
                    addGlitchEffect(targetSection, 200);
                }, 500);
            }
        });
    });
}

/* ===================================
   SCROLL ANIMATIONS
   ================================== */

function initScrollAnimations() {
    // Create intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                
                // Add special effects for different sections
                if (entry.target.classList.contains('section-title')) {
                    setTimeout(() => {
                        addGlitchEffect(entry.target, 150);
                    }, 400);
                }
                
                if (entry.target.classList.contains('album-card') || 
                    entry.target.classList.contains('member-card') ||
                    entry.target.classList.contains('tour-date')) {
                    setTimeout(() => {
                        addStaticEffect(100);
                    }, Math.random() * 300);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll(`
        .section-title,
        .bio-paragraph,
        .album-card,
        .member-card,
        .tour-date,
        .gallery-item,
        .contact-item
    `);
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });
}

/* ===================================
   VHS EFFECTS
   ================================== */

function initVHSEffects() {
    const vhsBackground = document.getElementById('vhsBackground');
    
    if (vhsBackground) {
        // Random VHS glitch intervals
        setInterval(() => {
            if (Math.random() < 0.1) { // 10% chance every interval
                addVHSGlitch();
            }
        }, 2000);
        
        // Intensify effects on user interaction
        document.addEventListener('click', function() {
            addVHSGlitch();
            addStaticEffect(200);
        });
        
        // Add tracking lines effect
        createTrackingLines();
    }
}

function addVHSGlitch() {
    const vhsBackground = document.getElementById('vhsBackground');
    if (vhsBackground) {
        vhsBackground.style.filter = 'hue-rotate(90deg) saturate(2)';
        vhsBackground.style.transform = 'translate(' + (Math.random() * 4 - 2) + 'px, ' + (Math.random() * 4 - 2) + 'px)';
        
        setTimeout(() => {
            vhsBackground.style.filter = '';
            vhsBackground.style.transform = '';
        }, 100);
    }
}

function addStaticEffect(duration = 300) {
    const staticOverlay = document.querySelector('.static-overlay');
    if (staticOverlay) {
        staticOverlay.style.opacity = '0.8';
        staticOverlay.style.animation = 'staticFlicker 0.05s infinite';
        
        setTimeout(() => {
            staticOverlay.style.opacity = '';
            staticOverlay.style.animation = '';
        }, duration);
    }
}

function createTrackingLines() {
    const trackingLine = document.createElement('div');
    trackingLine.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
        z-index: 9999;
        pointer-events: none;
        animation: trackingMove 3s infinite linear;
    `;
    
    // Add tracking line animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes trackingMove {
            0% { transform: translateY(-2px); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(trackingLine);
}

/* ===================================
   GLITCH EFFECTS
   ================================== */

function initGlitchEffects() {
    // Add glitch effect to hero title on load
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        setTimeout(() => {
            addGlitchEffect(heroTitle, 500);
        }, 1000);
    }
    
    // Add glitch effects to interactive elements
    const interactiveElements = document.querySelectorAll(`
        .cta-button,
        .ticket-button,
        .streaming-link,
        .social-link,
        .nav-link
    `);
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            if (Math.random() < 0.3) { // 30% chance
                addGlitchEffect(this, 150);
            }
        });
    });
}

function addGlitchEffect(element, duration = 200) {
    if (!element) return;
    
    const originalTransform = element.style.transform;
    const originalFilter = element.style.filter;
    
    // Create glitch animation
    const glitchFrames = [
        { transform: 'translate(0)', filter: 'hue-rotate(0deg)' },
        { transform: 'translate(-2px, 2px)', filter: 'hue-rotate(90deg)' },
        { transform: 'translate(2px, -2px)', filter: 'hue-rotate(180deg)' },
        { transform: 'translate(-1px, -1px)', filter: 'hue-rotate(270deg)' },
        { transform: 'translate(1px, 1px)', filter: 'hue-rotate(360deg)' },
        { transform: 'translate(0)', filter: 'hue-rotate(0deg)' }
    ];
    
    const animation = element.animate(glitchFrames, {
        duration: duration,
        easing: 'steps(5, end)'
    });
    
    animation.onfinish = () => {
        element.style.transform = originalTransform;
        element.style.filter = originalFilter;
    };
}

/* ===================================
   FORM HANDLING
   ================================== */

function initFormHandling() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add VHS effect during form submission
            addStaticEffect(1000);
            addGlitchEffect(contactForm, 300);
            
            // Simulate form submission
            const submitButton = contactForm.querySelector('.form-submit');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'ENVIANDO...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                submitButton.textContent = 'MENSAGEM ENVIADA!';
                submitButton.style.background = '#00ff00';
                
                setTimeout(() => {
                    submitButton.textContent = originalText;
                    submitButton.style.background = '';
                    submitButton.disabled = false;
                    contactForm.reset();
                }, 2000);
            }, 1500);
        });
        
        // Add glitch effects to form inputs on focus
        const formInputs = contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('focus', function() {
                addGlitchEffect(this, 100);
            });
        });
    }
}

/* ===================================
   AUDIO CONTROLS
   ================================== */

function initAudioControls() {
    const playButtons = document.querySelectorAll('.play-button');
    
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add VHS effects when "playing" music
            addStaticEffect(500);
            addGlitchEffect(this.closest('.album-cover'), 300);
            
            // Simulate audio playback
            const isPlaying = this.textContent === '⏸';
            
            if (isPlaying) {
                this.textContent = '▶';
                this.style.background = '#ff0000';
            } else {
                this.textContent = '⏸';
                this.style.background = '#00ff00';
                
                // Auto-stop after 3 seconds (demo)
                setTimeout(() => {
                    this.textContent = '▶';
                    this.style.background = '#ff0000';
                }, 3000);
            }
        });
    });
}

/* ===================================
   GALLERY LIGHTBOX
   ================================== */

function initGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('.gallery-image');
            const caption = this.querySelector('.gallery-caption');
            
            if (img) {
                createLightbox(img.src, caption ? caption.textContent : '');
            }
        });
    });
}

function createLightbox(imageSrc, caption) {
    // Create lightbox overlay
    const lightbox = document.createElement('div');
    lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        cursor: pointer;
        animation: fadeInUp 0.3s ease-out;
    `;
    
    // Create image container
    const imageContainer = document.createElement('div');
    imageContainer.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        text-align: center;
    `;
    
    // Create image
    const image = document.createElement('img');
    image.src = imageSrc;
    image.style.cssText = `
        max-width: 100%;
        max-height: 80vh;
        filter: grayscale(100%) contrast(1.2);
        border: 2px solid #333;
    `;
    
    // Create caption
    if (caption) {
        const captionElement = document.createElement('p');
        captionElement.textContent = caption;
        captionElement.style.cssText = `
            color: #ffffff;
            margin-top: 1rem;
            font-family: 'Metal Mania', cursive;
        `;
        imageContainer.appendChild(captionElement);
    }
    
    imageContainer.appendChild(image);
    lightbox.appendChild(imageContainer);
    document.body.appendChild(lightbox);
    
    // Add VHS effects to lightbox
    setTimeout(() => {
        addGlitchEffect(image, 200);
        addStaticEffect(300);
    }, 100);
    
    // Close lightbox on click
    lightbox.addEventListener('click', function() {
        addStaticEffect(200);
        lightbox.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(lightbox);
        }, 300);
    });
    
    // Close on escape key
    const escapeHandler = function(e) {
        if (e.key === 'Escape') {
            lightbox.click();
            document.removeEventListener('keydown', escapeHandler);
        }
    };
    document.addEventListener('keydown', escapeHandler);
}

/* ===================================
   SCROLL EFFECTS
   ================================== */

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.main-header');
    const scrolled = window.pageYOffset;
    
    if (header) {
        if (scrolled > 100) {
            header.style.background = 'rgba(0, 0, 0, 0.95)';
            header.style.backdropFilter = 'blur(15px)';
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.9)';
            header.style.backdropFilter = 'blur(10px)';
        }
    }
    
    // Add random VHS effects during scroll
    if (Math.random() < 0.05) { // 5% chance
        addStaticEffect(100);
    }
});

/* ===================================
   EASTER EGGS & SPECIAL EFFECTS
   ================================== */

// Konami Code Easter Egg
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.code);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        activateHorrorMode();
        konamiCode = [];
    }
});

function activateHorrorMode() {
    // Intense VHS effects
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            addVHSGlitch();
            addStaticEffect(200);
        }, i * 100);
    }
    
    // Change all text to horror mode temporarily
    const allText = document.querySelectorAll('h1, h2, h3, p, a, button');
    allText.forEach(element => {
        addGlitchEffect(element, 300);
    });
    
    // Show easter egg message
    setTimeout(() => {
        alert('🎸 HORROR MODE ACTIVATED! 🎸\nThe spirits of the 80s have been awakened...');
    }, 1000);
}

// Random ambient effects
setInterval(() => {
    if (Math.random() < 0.02) { // 2% chance every 5 seconds
        const randomElement = document.querySelector(
            Math.random() < 0.5 ? '.section-title' : '.hero-title'
        );
        if (randomElement) {
            addGlitchEffect(randomElement, 100);
        }
    }
}, 5000);

/* ===================================
   UTILITY FUNCTIONS
   ================================== */

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Performance optimized scroll handler
const optimizedScrollHandler = throttle(function() {
    // Scroll-based effects here
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScrollHandler);

/* ===================================
   ACCESSIBILITY ENHANCEMENTS
   ================================== */

// Respect user's motion preferences
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable intensive animations for users who prefer reduced motion
    document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    
    // Override glitch effects
    window.addGlitchEffect = function() {
        // No-op for reduced motion
    };
    
    window.addStaticEffect = function() {
        // No-op for reduced motion
    };
}

// Keyboard navigation enhancements
document.addEventListener('keydown', function(e) {
    // Enhanced focus visibility
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// Add focus styles for keyboard navigation
const style = document.createElement('style');
style.textContent = `
    .keyboard-navigation *:focus {
        outline: 2px solid #ff0000 !important;
        outline-offset: 2px !important;
    }
`;
document.head.appendChild(style);

console.log('🎸 All interactive effects initialized - Ready to rock! 🎸');

const player = document.getElementById("albumPlayer");
const playButton = document.querySelector(".play-button");

function togglePlay() {
    if (player.paused) {
        player.play();
        playButton.textContent = "⏸"; // troca para pause
    } else {
        player.pause();
        playButton.textContent = "▶"; // volta para play
    }
}


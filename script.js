document.addEventListener('DOMContentLoaded', () => {
    // Initialize particles.js
    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('Particles.js loaded');
    });

    // Hero animations
    const heroLogo = document.getElementById('hero-logo');
    const heroTitle = document.querySelector('#hero h1');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButton = document.querySelector('.hero-button');

    // Add visible class to elements with a slight delay
    setTimeout(() => {
        heroLogo.classList.add('visible');
    }, 500);

    setTimeout(() => {
        heroTitle.classList.add('visible');
    }, 1000);

    setTimeout(() => {
        heroSubtitle.classList.add('visible');
        // Add visible class to each subtitle line with a slight delay
        const subtitleLines = heroSubtitle.querySelectorAll('p');
        subtitleLines.forEach((line, index) => {
            setTimeout(() => {
                line.classList.add('visible');
            }, index * 300);
        });
    }, 1500);

    setTimeout(() => {
        heroButton.classList.add('visible');
    }, 2000);

    // Scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Other potential JS functionalities can be added below ---
    // Example: Dynamic background effect for Hero
    // Example: Advanced product card interactions

}); 
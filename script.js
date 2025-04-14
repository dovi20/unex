document.addEventListener('DOMContentLoaded', () => {

    // --- Initial Hero Animations Trigger ---
    const heroElements = document.querySelectorAll('#hero-logo, #hero h1, .hero-button, #hero-image');
    // Use setTimeout to ensure styles are applied and transition can occur
    setTimeout(() => {
        heroElements.forEach(el => {
            el.classList.add('visible');
        });
    }, 100); // Small delay

    // --- Intersection Observer for Scroll Animations (Sections other than Hero) ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll:not(#hero *)'); // Select elements NOT inside hero

    if (animatedElements.length > 0) {
        const observerOptions = {
            root: null, // relative to document viewport
            rootMargin: '0px',
            threshold: 0.1 // trigger when 10% of the element is visible
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible'); // Add 'visible' class to trigger CSS animation/transition
                    // Optional: Unobserve after animation triggered once
                    observer.unobserve(entry.target);
                }
            });
        };

        const intersectionObserver = new IntersectionObserver(observerCallback, observerOptions);

        animatedElements.forEach(el => {
            intersectionObserver.observe(el);
        });
    }

    // --- Smooth Scrolling for Anchor Links ---
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const hrefAttribute = this.getAttribute('href');
            // Ensure it's a valid ID selector and not just "#"
            if (hrefAttribute && hrefAttribute.length > 1 && hrefAttribute.startsWith('#')) {
                const targetElement = document.querySelector(hrefAttribute);
                if (targetElement) {
                    e.preventDefault(); // Prevent default anchor jump
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // --- Other potential JS functionalities can be added below ---
    // Example: Dynamic background effect for Hero
    // Example: Advanced product card interactions

}); 
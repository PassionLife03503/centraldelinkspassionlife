document.addEventListener('DOMContentLoaded', () => {
    // Add interactions here if needed

    const links = document.querySelectorAll('.link-card');

    // Hover sound effect or subtle micro-animations
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            // Placeholder for hover logic
        });
    });

    // Handle smooth reveal on scroll (if the page was longer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    links.forEach(link => {
        // observer.observe(link);
    });

    console.log('Íntima Passion / PassionLife Mini-site Loaded Successfully.');
});

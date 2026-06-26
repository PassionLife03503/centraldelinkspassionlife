document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.link-card');

    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            // Reserved for future micro-interactions.
        });
    });

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

    console.log('Íntima Passion mini-site loaded successfully.');
});

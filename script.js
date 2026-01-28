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

    // Random WhatsApp Distribution
    const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
    const whatsappNumbers = [
        '5535999128746',
        '5535997630023',
        '5535998130548'
    ];
    const message = encodeURIComponent('Olá gostaria de tirar minhas dúvidas');

    whatsappButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const randomNumber = whatsappNumbers[Math.floor(Math.random() * whatsappNumbers.length)];
            const whatsappUrl = `https://wa.me/${randomNumber}?text=${message}`;
            window.open(whatsappUrl, '_blank');
        });
    });

    console.log('Íntima Passion / PassionLife Mini-site Loaded Successfully.');
});

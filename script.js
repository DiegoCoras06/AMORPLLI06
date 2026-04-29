document.addEventListener('DOMContentLoaded', function() {

    // =======================================
    // == ANIMACIONES AL HACER SCROLL (Intersection Observer)
    // =======================================
    const sections = document.querySelectorAll('.fade-in-section');

    const options = {
        root: null, // observa el viewport
        rootMargin: '0px',
        threshold: 0.15 // se activa cuando el 15% del elemento es visible
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            // Cuando el elemento es visible, añade la clase 'is-visible'
            entry.target.classList.add('is-visible');
            // Y deja de observarlo para no repetir la animación
            observer.unobserve(entry.target);
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

});
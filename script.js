// Fonction pour ajouter la classe visible lors du défilement
function revealOnScroll() {
    const fadeElements = document.querySelectorAll('.fade-in');

    fadeElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight - 50) {
            element.classList.add('visible');
        }
    });
}

// Appelle la fonction revealOnScroll lors du défilement
window.addEventListener('scroll', revealOnScroll);

// Animation pour l'en-tête
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    header.style.transition = 'transform 0.6s ease, background-color 0.6s ease';
    header.style.transform = 'scale(1.1)';
    header.style.backgroundColor = '#0056b3';

    setTimeout(() => {
        header.style.transform = 'scale(1)';
        header.style.backgroundColor = '#007bff';
    }, 600);

    // Ajoute la classe fade-in aux sections
    const sections = document.querySelectorAll('.contact-info, .skills, .experience, .education, .interests, .languages');
    sections.forEach(section => section.classList.add('fade-in'));
   
    // Appelle une fois pour afficher les sections visibles dès le chargement
    revealOnScroll();
});

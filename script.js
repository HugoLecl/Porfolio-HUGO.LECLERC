// Affichage d'un message de bienvenue lorsque la page se charge
document.addEventListener('DOMContentLoaded', function () {
    const welcomeMessage = 'Bienvenue sur mon site ! 😊';
    alert(welcomeMessage); // Affiche un message d'alerte avec un message de bienvenue
});

// Gestion du menu mobile (pour la navigation sur les petits écrans)
const navbarToggle = document.querySelector('.navbar-toggle'); // Bouton de menu
const navbarLinks = document.querySelector('.nav-links'); // Liste des liens de la navbar

if (navbarToggle) {
    navbarToggle.addEventListener('click', () => {
        // Toggle entre "ouvrir" et "fermer" le menu
        navbarLinks.classList.toggle('active');
    });
}

// Ajout d'un effet de survol sur les boutons (légèrement plus large et changement de couleur)
const buttons = document.querySelectorAll('button, a.button');
buttons.forEach(button => {
    button.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
        this.style.backgroundColor = '#EF476F'; // Changement de couleur au survol
    });
    
    button.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
        this.style.backgroundColor = '#0097B2'; // Retour à la couleur initiale
    });
});
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Fonction qui vérifie quelle section est dans la vue et applique les classes correspondantes
document.addEventListener("scroll", function() {
    // Récupérer toutes les sections
    const sections = document.querySelectorAll('.section');
    let activeSection = null;

    // Vérifier quelle section est visible dans la fenêtre
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            activeSection = section;
        }
    });

    // Appliquer le flou aux autres sections et enlever le flou de la section active
    sections.forEach(section => {
        if (section !== activeSection) {
            section.classList.add('blur'); // Ajouter le flou
            section.classList.remove('active'); // Retirer l'effet de netteté
        } else {
            section.classList.remove('blur'); // Enlever le flou
            section.classList.add('active'); // Appliquer la netteté
        }
    });
});


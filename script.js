// Fonction pour activer le défilement fluide (smooth scrolling)
document.querySelectorAll('.navigation a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Highlight the active section in navigation on scroll
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('main section');
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60; // Ajustement de l'offset
        const sectionHeight = section.offsetHeight;

        const navLink = document.querySelector(`.navigation a[href="#${section.id}"]`);
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
});

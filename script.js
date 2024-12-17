// Fonction pour smooth scrolling
document.querySelectorAll('.navigation a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight the active section in navigation on scroll
document.addEventListener('scroll', () => {
    let sections = document.querySelectorAll('main section');
    let scrollY = window.pageYOffset;

    sections.forEach(section => {
        let sectionTop = section.offsetTop - 50; // Offset pour ajuster la sensibilité
        let sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            let id = section.getAttribute('id');
            document.querySelector('.navigation a[href="#' + id + '"]').classList.add('active');
        } else {
            let id = section.getAttribute('id');
            document.querySelector('.navigation a[href="#' + id + '"]').classList.remove('active');
        }
    });
});

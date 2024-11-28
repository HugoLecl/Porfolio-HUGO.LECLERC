# Porfolio-HUGO.LECLERC
Création Site CV

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV de Hugo Leclerc</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
    <div class="header">
        <h1 style="text-align: center;">Hugo Leclerc</h1>
    </div>

    <!-- Insertion d'image de profil -->
    <div class="profile-picture" style="text-align: center;">
        <img src="profile.jpg" alt="Photo de Hugo Leclerc" width="150" height="150">
    </div>

    <div class="contact-info">
        <h2 style="text-align: center;">Contact</h2>
        <p>Email : <a href="mailto:hugosommerard@gmail.com">hugosommerard@gmail.com</a></p>
        <p>Téléphone : 07 88 34 53 15</p>
        <p>Permis : B1</p>
    </div>

    <div class="skills">
        <h2 style="text-align: center;">Compétences</h2>
        <ul>
            <li>Word</li>
            <li>Canva</li>
            <li>Cap Cut</li>
            <li>Inshot</li>
        </ul>
    </div>

    <!-- Section Bénévolat -->
    <div class="volunteering">
        <h2 style="text-align: center;">Bénévolat</h2>
        <ul>
            <li>Cours de tennis pour des jeunes de 6 à 8 ans</li>
            <li>Participation aux Restos du Cœur à Taverny en 2020</li>
        </ul>
    </div>

    <div class="experience">
        <h2 style="text-align: center;">Expériences Professionnelles</h2>
        <h3>Stage - Adidas</h3>
        <p>Herblay, 2021 (2 mois) - Vendeur</p>
        <ul>
            <li>Responsabilités et réalisations en tant que vendeur chez Adidas</li>
        </ul>
       
        <h3>Alternance - Decathlon</h3>
        <p>Groslay, depuis presque 2 ans - Vendeur polyvalent</p>
        <ul>
            <li>Expérience variée en tant que vendeur polyvalent chez Decathlon</li>
        </ul>
    </div>

    <div class="education">
        <h2 style="text-align: center;">Formation</h2>
        <h3>DEUST - Îleps</h3>
        <p>Cergy Préfecture, 2024</p>
        <p>Description : Diplôme universitaire en spécialisation (spécialisation à préciser)</p>

        <h3>Baccalauréat - Lycée Louis Armand</h3>
        <p>Eaubonne, 2019</p>
        <p>Description : Mention ou spécialisation obtenue au lycée Louis Armand</p>
    </div>

    <div class="interests">
        <h2 style="text-align: center;">Centres d'Intérêt</h2>
        <ul>
            <li>Tennis</li>
            <li>Musculation</li>
            <li>Running</li>
            <li>Musique</li>
            <li>Voyages</li>
        </ul>
    </div>

    <div class="languages">
        <h2 style="text-align: center;">Langues</h2>
        <ul>
            <li>Français (natif)</li>
            <li>Anglais (notions)</li>
        </ul>
    </div>

    <!-- Section "Ma personnalité" -->
    <div class="personality">
        <h2 style="text-align: center;">Ma personnalité</h2>
        <p>Calme et inventif, je suis ambitieux et aime me challenger. J’aime trouver des idées créatives, résoudre des problèmes, et me surpasser par rapport à l’année précédente.</p>
    </div>
    /* Style de base */
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f2f5;
}

.container {
    width: 60%;
    margin: 40px auto;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}

.container:hover {
    transform: scale(1.02);
}

.header {
    text-align: center;
    padding: 20px;
    background-color: #007bff;
    color: white;
    border-radius: 8px 8px 0 0;
}

.header h1 {
    margin: 0;
    font-size: 2em;
}

.header p {
    font-size: 1.2em;
    font-weight: 300;
}

h2 {
    color: #007bff;
    font-size: 1.5em;
    border-bottom: 2px solid #007bff;
    padding-bottom: 5px;
    margin-top: 25px;
}

.contact-info, .skills, .experience, .education, .interests, .languages {
    margin-bottom: 20px;
}

ul {
    list-style-type: none;
    padding: 0;
}

ul li {
    margin-bottom: 5px;
    padding: 8px;
    background-color: #f4f8fb;
    border-radius: 5px;
    transition: background-color 0.3s;
}

ul li:hover {
    background-color: #e0f0ff;
}

.skills ul, .languages ul {
    display: flex;
    flex-wrap: wrap;
}

.skills ul li, .languages ul li {
    margin-right: 10px;
    padding: 5px 12px;
    background-color: #e0f0ff;
    border-radius: 15px;
    color: #333;
}

.skills ul li:hover, .languages ul li:hover {
    background-color: #b3d8ff;
}

a {
    color: #007bff;
    text-decoration: none;
    transition: color 0.3s;
}

a:hover {
    color: #0056b3;
}

.footer {
    text-align: center;
    margin-top: 30px;
    font-size: 0.9em;
    color: #888;
    border-top: 1px solid #ddd;
    padding-top: 10px;
}
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

    <div class="footer">
        <p style="text-align: center;">© 2024 Hugo Leclerc - CV généré avec HTML et CSS</p>
    </div>
</div>

</body>
</html>

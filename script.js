// Affichage d'un message de bienvenue lorsque la page se charge
document.addEventListener('DOMContentLoaded', function () {
    const welcomeMessage = 'Bienvenue sur mon site ! 😊';
    alert(welcomeMessage); 
});


const buttons = document.querySelectorAll('button, a.button');
buttons.forEach(button => {
    button.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    button.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".blur-content");

    sections.forEach(section => {
        section.addEventListener("mouseover", () => {
            sections.forEach(s => {
                if (s !== section) {
                    s.classList.add("blur");
                }
            });
        });

        section.addEventListener("mouseout", () => {
            sections.forEach(s => {
                s.classList.remove("blur");
            });
        });
    });
});





// Fonction pour animer le défilement du texte dans un textarea
function animateText(textArea) {
    let text = textArea.value; // Récupère le texte contenu dans le textarea
    let to = text.length; // Définit la longueur totale du texte
    let from = 0; // Valeur de départ de l'animation

    animate({
        duration: 20000, // Durée totale de l'animation en millisecondes
        timing: bounce, // Fonction de timing pour contrôler la progression de l'animation
        draw: function (progress) {
            let result = to * progress + from; // Calcule la valeur actuelle du texte
            textArea.value = text.slice(0, Math.ceil(result)); // Met à jour le contenu du textarea
            textArea.scrollTop = textArea.scrollHeight; // Fait défiler le textarea vers le bas
        },
    });
}

// Fonction de timing personnalisée pour l'animation
function bounce(timeFraction) {
    for (let a = 0, b = 1; ; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
            return (
                -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) +
                Math.pow(b, 2)
            );
        }
    }
}

// Appelle la fonction animateText lorsque la page est entièrement chargée
window.onload = function () {
    animateText(document.getElementById("textExample2"));
};




// Función para generar la lluvia de corazones flotantes de fondo
function createHearts() {
    const container = document.getElementById('hearts-container');
    const heartSymbols = ["❤️", "💖", "🤍", "✨"]; // Símbolos de amor y destellos

    for (let i = 0; i < 30; i++) { // Cantidad de corazones
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Propiedades aleatorias para cada corazón
        heart.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + 'vw'; // Posición horizontal aleatoria
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's'; // Velocidad aleatoria (2-5 seg)
        heart.style.fontSize = (Math.random() * 10 + 15) + 'px'; // Tamaño aleatorio (15-25px)
        heart.style.opacity = Math.random() * 0.5 + 0.3; // Transparencia aleatoria
        
        container.appendChild(heart);

        // Eliminar el corazón cuando termina la animación para no saturar la memoria
        setTimeout(() => {
            heart.remove();
        }, 5000); // 5 segundos, que es la duración máxima de caída
    }
}

// Iniciar la lluvia de corazones y repetir cada cierto tiempo
createHearts();
setInterval(createHearts, 2500); // Genera nuevos corazones cada 2.5 seg

// --- 1. Inicialização das Partículas ---
// Certifique-se de que o script do particles.js está carregado no HTML
if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": ["#bd93f9", "#ff79c6"] },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5 },
            "size": { "value": 3 },
            "line_linked": { "enable": true, "distance": 150, "color": "#6272a4", "opacity": 0.4, "width": 1 },
            "move": { "enable": true, "speed": 2 }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { "onhover": { "enable": true, "mode": "grab" }, "resize": true }
        },
        "retina_detect": true
    });
}

// --- 2. Lógica de Filtro da Galeria ---
function filterSelection(category) {
    const cards = document.querySelectorAll(".art-card");
    const btns = document.querySelectorAll(".filter-buttons button");

    // Remove classe ativa de todos os botões e adiciona ao clicado
    btns.forEach(btn => {
        btn.classList.remove("active");
        // Verifica se o texto do botão ou o parâmetro bate
        if (btn.getAttribute('onclick').includes(category)) {
            btn.classList.add("active");
        }
    });

    cards.forEach(card => {
        // Se for 'all', mostra tudo. Caso contrário, filtra pela classe
        if (category === "all") {
            card.style.display = "block";
        } else {
            if (card.classList.contains(category)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        }
    });
}

// Inicializa mostrando tudo
filterSelection('all');

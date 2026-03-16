function loadParticles() {
    if (!document.getElementById('particles-js')) return;

    const isMobile = window.innerWidth < 768;
    
    particlesJS('particles-js', {
        "particles": {
            "number": { 
                "value": isMobile ? 30 : 80, 
                "density": { "enable": true, "value_area": 800 } 
            },
            "color": { "value": "#bd93f9" },
            "opacity": { "value": 0.5 },
            "size": { "value": 3 },
            "line_linked": { "enable": true, "distance": 150, "color": "#6272a4", "opacity": 0.4 },
            "move": { "enable": true, "speed": 1.5 }
        },
        "interactivity": {
            "detect_on": "window", 
            "events": {
                "onhover": { "enable": !isMobile, "mode": "grab" },
                "onclick": { "enable": true, "mode": "push" }
            }
        },
        "retina_detect": true
    });
}

// Filtro
function filterSelection(category) {
    const cards = document.querySelectorAll(".art-card");
    const btns = document.querySelectorAll(".filter-buttons button");

    cards.forEach(card => {
        card.style.display = (category === "all" || card.classList.contains(category)) ? "block" : "none";
    });

    btns.forEach(btn => {
        btn.classList.remove("active");
        if(btn.getAttribute('onclick').includes(category)) btn.classList.add("active");
    });
}

// Inicializar ao carregar a página
window.onload = () => {
    loadParticles();
};

// Recarregar se mudar o tamanho da tela (PC -> Celular)
window.onresize = () => {
    loadParticles();
};

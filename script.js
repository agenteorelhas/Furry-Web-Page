// Configuração de Partículas Adaptável
function loadParticles() {
    const isMobile = window.innerWidth < 768;
    
    particlesJS('particles-js', {
        "particles": {
            "number": { 
                "value": isMobile ? 30 : 80, // Menos partículas no celular para não travar
                "density": { "enable": true, "value_area": 800 } 
            },
            "color": { "value": "#bd93f9" },
            "opacity": { "value": 0.5 },
            "size": { "value": 3 },
            "line_linked": { 
                "enable": true, 
                "distance": 150, 
                "color": "#6272a4", 
                "opacity": 0.4, 
                "width": 1 
            },
            "move": { "enable": true, "speed": 2 }
        },
        "interactivity": {
            "events": {
                "onhover": { "enable": !isMobile }, // Desativa hover no celular (não tem mouse)
                "onclick": { "enable": true, "mode": "push" }
            }
        }
    });
}

// Filtro da Galeria
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

// Iniciar
loadParticles();

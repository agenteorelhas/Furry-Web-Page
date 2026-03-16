// --- 1. Configuração de Partículas Adaptável ---
function loadParticles() {
    // Verifica se o elemento existe na página antes de carregar para evitar erros no console
    if (!document.getElementById('particles-js')) return;

    const isMobile = window.innerWidth < 768;
    
    particlesJS('particles-js', {
        "particles": {
            "number": { 
                "value": isMobile ? 25 : 70, // Ajuste leve para melhor performance
                "density": { "enable": true, "value_area": 800 } 
            },
            "color": { "value": "#bd93f9" }, // Roxo Dracula
            "opacity": { "value": 0.5 },
            "size": { "value": 3 },
            "line_linked": { 
                "enable": true, 
                "distance": 150, 
                "color": "#6272a4", 
                "opacity": 0.4, 
                "width": 1 
            },
            "move": { 
                "enable": true, 
                "speed": 1.5, // Velocidade levemente reduzida para elegância
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": { 
                    "enable": !isMobile, // Desativado no mobile pois causa bugs de clique
                    "mode": "grab" 
                },
                "onclick": { 
                    "enable": true, 
                    "mode": "push" 
                },
                "resize": true
            },
            "modes": {
                "grab": { "distance": 140, "line_linked": { "opacity": 1 } },
                "push": { "particles_nb": 4 }
            }
        },
        "retina_detect": true
    });
}

// --- 2. Filtro da Galeria ---
function filterSelection(category) {
    const cards = document.querySelectorAll(".art-card");
    const btns = document.querySelectorAll(".filter-buttons button");

    // Adiciona uma pequena transição visual ao trocar as categorias
    cards.forEach(card => {
        card.style.opacity = "0"; // Começa escondendo para suavizar
        
        setTimeout(() => {
            if (category === "all" || card.classList.contains(category)) {
                card.style.display = "block";
                setTimeout(() => card.style.opacity = "1", 50);
            } else {
                card.style.display = "none";
            }
        }, 200);
    });

    // Atualiza o estado visual dos botões
    btns.forEach(btn => {
        btn.classList.remove("active");
        // Verifica se o texto do atributo bate com a categoria selecionada
        if(btn.getAttribute('onclick').includes(`'${category}'`)) {
            btn.classList.add("active");
        }
    });
}

// --- 3. Efeito do Cabeçalho (Sticky Header) ---
// Faz o cabeçalho encolher e ficar mais opaco ao rolar a página
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 5%';

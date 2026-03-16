/**
 * ===================================================================
 * 1. CONFIGURAÇÃO DO PARTICLES.JS (Tema Dracula: Roxo e Rosa)
 * ===================================================================
 */
if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
        "particles": {
            "number": { 
                "value": 100, // Quantidade de partículas
                "density": { "enable": true, "value_area": 800 } 
            },
            "color": { 
                "value": ["#bd93f9", "#ff79c6"] // Alterna entre Roxo e Rosa Dracula
            },
            "shape": { "type": "circle" },
            "opacity": { 
                "value": 0.6, 
                "random": true, 
                "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false } 
            },
            "size": { 
                "value": 3, 
                "random": true, 
                "anim": { "enable": true, "speed": 2, "size_min": 0.1, "sync": false } 
            },
            "line_linked": { 
                "enable": true, 
                "distance": 150, 
                "color": "#6272a4", // Cor dos traços (Comentário Dracula)
                "opacity": 0.3, 
                "width": 1 
            },
            "move": { 
                "enable": true, 
                "speed": 1.5, // Velocidade do movimento
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
                "onhover": { "enable": true, "mode": "grab" }, // Efeito ao passar o mouse
                "onclick": { "enable": true, "mode": "push" }, // Adiciona partículas ao clicar
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

/**
 * ===================================================================
 * 2. LÓGICA DE FILTRAGEM DA GALERIA
 * ===================================================================
 */
function filterSelection(category) {
    const cards = document.getElementsByClassName("art-card");
    
    // Mostra tudo se a categoria for 'all', senão filtra
    for (let i = 0; i < cards.length; i++) {
        if (category === "all" || cards[i].classList.contains(category)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

/**
 * ===================================================================
 * 3. LÓGICA DO SKELETON SCREEN (Carregamento de Imagem)
 * ===================================================================
 */
function imageLoaded(img) {
    // Encontra o skeleton que está logo antes da imagem
    const skeleton = img.previousElementSibling;
    
    // Esconde o skeleton
    if (skeleton && skeleton.classList.contains('skeleton')) {
        skeleton.style.display = 'none';
    }
    
    // Adiciona a classe que faz a imagem aparecer com Fade-in
    img.classList.add('img-loaded');
}

/**
 * ===================================================================
 * 4. LÓGICA DO MODAL DE IMAGEM (Zoom)
 * ===================================================================
 */
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("imgFull");
const captionText = document.getElementById("caption");

// Função para abrir o modal ao clicar na imagem
document.querySelectorAll('.art-card img').forEach(img => {
    img.addEventListener('click', function() {
        if (modal && modalImg) {
            modal.style.display = "block";
            modalImg.src = this.src; // Pega a fonte da imagem clicada
            captionText.innerHTML = this.alt; // Pega o texto alt da imagem clicada
        }
    });
});

/**
 * ===================================================================
 * 5. LÓGICA DE FECHAMENTO DO MODAL (X e Fundo)
 * ===================================================================
 */
// Unificado para ouvir cliques na janela inteira
window.addEventListener('click', function(event) {
    const modal = document.getElementById("imageModal");
    // Verifica se clicou no fundo do modal OU no elemento com a classe 'close' (X)
    if (event.target == modal || event.target.classList.contains('close')) {
        modal.style.display = "none";
    }
});

/**
 * ===================================================================
 * 6. LÓGICA DOS BOTÕES DE COMMISSION (WhatsApp)
 * ===================================================================
 */
document.querySelectorAll('.btn-order').forEach(button => {
    button.addEventListener('click', function() {
        // Pega o nome do plano (Sketch, Full Color, etc) que está no h3 acima do botão
        const tipoServico = this.parentElement.querySelector('h3').innerText;
        const meuNumero = "5511999999999"; // <--- SUBSTITUA PELO SEU NÚMERO (com DDD)
        
        const texto = `Olá! Vi seu portfólio e gostaria de fazer um pedido de commission do tipo: ${tipoServico}`;
        const url = `https://wa.me/${meuNumero}?text=${encodeURIComponent(texto)}`;
        
        // Abre o WhatsApp em uma nova aba
        window.open(url, '_blank');
    });
});

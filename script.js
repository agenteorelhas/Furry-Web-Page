/**
 * ===================================================================
 * 1. CONFIGURAÇÃO DO PARTICLES.JS (Tema Dracula: Roxo e Rosa)
 * ===================================================================
 */
if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
        "particles": {
            "number": { 
                "value": 100,
                "density": { "enable": true, "value_area": 800 } 
            },
            "color": { 
                "value": ["#bd93f9", "#ff79c6"] 
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
                "color": "#6272a4", 
                "opacity": 0.3, 
                "width": 1 
            },
            "move": { 
                "enable": true, 
                "speed": 1.5,
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
                "onhover": { "enable": true, "mode": "grab" },
                "onclick": { "enable": true, "mode": "push" }, 
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
 * 2. LÓGICA DE FILTRAGEM DA GALERIA E BRILHO NEON
 * ===================================================================
 */
function filterSelection(category) {
    const cards = document.getElementsByClassName("art-card");
    
    // 1. Lógica de Filtragem dos Cards
    for (let i = 0; i < cards.length; i++) {
        if (category === "all" || cards[i].classList.contains(category)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }

    // 2. Lógica do Brilho Neon (Botão Ativo)
    const buttons = document.querySelectorAll('.filter-buttons button');
    buttons.forEach(btn => {
        btn.classList.remove('active'); // Remove o brilho de todos primeiro
        
        // Verifica se o atributo onclick do botão contém a categoria selecionada
        const clickAttr = btn.getAttribute('onclick');
        if (clickAttr && clickAttr.includes(`'${category}'`)) {
            btn.classList.add('active');
        }
    });
}

/**
 * ===================================================================
 * 3. LÓGICA DO SKELETON SCREEN (Carregamento de Imagem)
 * ===================================================================
 */
function imageLoaded(img) {
    const skeleton = img.previousElementSibling;
    if (skeleton && skeleton.classList.contains('skeleton')) {
        skeleton.style.display = 'none';
    }
    img.classList.add('img-loaded');
}

/**
 * ===================================================================
 * 4. LÓGICA DO MODAL DE IMAGEM (Zoom e Fechamento)
 * ===================================================================
 */
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("imgFull");
const captionText = document.getElementById("caption");

// Abre o modal
document.querySelectorAll('.art-card img').forEach(img => {
    img.addEventListener('click', function() {
        if (modal && modalImg) {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    });
});

// Fecha o modal (clicando no 'X' ou fora da imagem)
window.addEventListener('click', function(event) {
    if (modal && (event.target == modal || event.target.classList.contains('close'))) {
        modal.style.display = "none";
    }
});

/**
 * ===================================================================
 * 5. LÓGICA DOS BOTÕES DE COMMISSION (WhatsApp)
 * ===================================================================
 */
document.querySelectorAll('.btn-order').forEach(button => {
    button.addEventListener('click', function() {
        const h3 = this.parentElement.querySelector('h3');
        if (h3) {
            const tipoServico = h3.innerText;
            const meuNumero = "5511999999999"; // <--- COLOQUE SEU NÚMERO AQUI
            
            const texto = `Olá! Vi seu portfólio e gostaria de fazer um pedido de commission do tipo: ${tipoServico}`;
            const url = `https://wa.me/${meuNumero}?text=${encodeURIComponent(texto)}`;
            
            window.open(url, '_blank');
        }
    });
});

/**
 * 1. Lógica de Filtragem da Galeria
 */
function filterSelection(category) {
    const cards = document.getElementsByClassName("art-card");
    for (let i = 0; i < cards.length; i++) {
        if (category === "all" || cards[i].classList.contains(category)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

/**
 * 2. Lógica do Modal de Imagem
 */
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("imgFull");
const captionText = document.getElementById("caption");

document.querySelectorAll('.art-card img').forEach(img => {
    img.addEventListener('click', function() {
        if (modal && modalImg) {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    });
});

window.addEventListener('click', function(event) {
    if (event.target == modal || event.target.classList.contains('close')) {
        modal.style.display = "none";
    }
});

/**
 * 3. Lógica de Carregamento (Skeleton Screen)
 */
function imageLoaded(img) {
    const skeleton = img.previousElementSibling;
    if (skeleton && skeleton.classList.contains('skeleton')) {
        skeleton.style.display = 'none';
    }
    img.classList.add('img-loaded');
}

/**
 * 4. Lógica dos Botões de Commission (WhatsApp)
 */
document.querySelectorAll('.btn-order').forEach(button => {
    button.addEventListener('click', function() {
        const tipoServico = this.parentElement.querySelector('h3').innerText;
        const meuNumero = "5511999999999"; // <--- COLOQUE SEU NÚMERO AQUI
        const texto = `Olá! Vi seu portfólio e gostaria de fazer um pedido de: ${tipoServico}`;
        const url = `https://wa.me/${meuNumero}?text=${encodeURIComponent(texto)}`;
        window.open(url, '_blank');
    });
});

/**
 * 5. Configuração Particles.js (Tema Dracula)
 */
if (typeof particlesJS === 'function') {
    particlesJS('particles-js', {
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#bd93f9" }, // Roxo Dracula
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5, "random": false },
            "size": { "value": 3, "random": true },
            "line_linked": { 
                "enable": true, 
                "distance": 150, 
                "color": "#6272a4", // Comentário Dracula
                "opacity": 0.4, 
                "width": 1 
            },
            "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out" }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" } }
        },
        "retina_detect": true
    });
}

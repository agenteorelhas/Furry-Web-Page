// 1. Partículas
if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
        "particles": {
            "number": { "value": 80 },
            "color": { "value": "#bd93f9" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5 },
            "size": { "value": 3 },
            "line_linked": { "enable": true, "distance": 150, "color": "#bd93f9", "opacity": 0.2, "width": 1 },
            "move": { "enable": true, "speed": 2 }
        },
        "interactivity": {
            "events": { "onhover": { "enable": true, "mode": "repulse" } }
        }
    });
}

// 2. Filtro da Galeria
function filterSelection(category) {
    const cards = document.querySelectorAll(".art-card");
    cards.forEach(card => {
        if (category === "all" || card.classList.contains(category)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// 3. Carregamento de Imagem
function imageLoaded(img) {
    const skeleton = img.previousElementSibling;
    if (skeleton) skeleton.style.display = 'none';
    img.classList.add('img-loaded');
}

// 4. Modal e WhatsApp
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("imgFull");

document.querySelectorAll('.art-card img').forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

window.onclick = (event) => {
    if (event.target == modal || event.target.classList.contains('close')) {
        modal.style.display = "none";
    }
};

document.querySelectorAll('.btn-order').forEach(btn => {
    btn.onclick = function() {
        const servico = this.parentElement.querySelector('h3').innerText;
        window.open(`https://wa.me/5511999999999?text=Olá! Gostaria de um: ${servico}`, '_blank');
    };
});

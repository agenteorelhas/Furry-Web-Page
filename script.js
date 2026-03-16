/**
 * Lógica de Filtragem da Galeria
 */
function filterSelection(category) {
    const cards = document.getElementsByClassName("art-card");
    
    for (let card of cards) {
        if (category === "all" || card.classList.contains(category)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
}

/**
 * Lógica do Modal de Imagem
 */
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("imgFull");
const captionText = document.getElementById("caption");
const span = document.querySelector(".close"); // Use querySelector para ser mais direto

// Função para abrir o modal
document.querySelectorAll('.art-card img').forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

// Fecha o modal ao clicar no 'X'
if (span) {
    span.onclick = function() {
        modal.style.display = "none";
    }
}

// Fecha o modal ao clicar fora da imagem
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

/**
 * Lógica de Carregamento (Skeleton Screen)
 */
function imageLoaded(img) {
    const skeleton = img.previousElementSibling;
    
    if (skeleton && skeleton.classList.contains('skeleton')) {
        skeleton.style.display = 'none';
    }
    
    // Dispara a animação de Fade-in definida no CSS
    img.classList.add('img-loaded');
}

/**
 * Lógica dos Botões de Commission
 */
document.querySelectorAll('.btn-order').forEach(button => {
    button.onclick = function() {
        const item = this.parentElement.querySelector('h3').innerText;
        const mensagem = encodeURIComponent(`Olá! Gostaria de encomendar uma commission do tipo: ${item}`);
        
        // Substitua 'SEUNUMERO' pelo seu número real com DDD (ex: 5511999999999)
        window.open(`https://wa.me/5511999999999?text=${mensagem}`, '_blank');
    };
});

function filterSelection(category) {
    const cards = document.getElementsByClassName("art-card");
    
    // Se a categoria for 'all', mostra tudo. Caso contrário, filtra.
    for (let i = 0; i < cards.length; i++) {
        if (category === "all") {
            cards[i].style.display = "block";
        } else {
            // Verifica se o card tem a classe da categoria (ex: 'canines')
            if (cards[i].classList.contains(category)) {
                cards[i].style.display = "block";
            } else {
                cards[i].style.display = "none";
            }
        }
    }
}

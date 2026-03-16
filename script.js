/**
 * 1. Lógica de Filtragem da Galeria
 * Filtra os cards por categoria (canines, felines, rabbits, etc.)
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
 * Abre a imagem em tela cheia e gerencia o fechamento
 */
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("imgFull");
const captionText = document.getElementById("caption");

// Função para abrir o modal ao clicar na imagem
document.querySelectorAll('.art-card img').forEach(img => {
    img.addEventListener('click', function() {
        if (modal && modalImg) {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    });
});

// Fecha o modal ao clicar fora da imagem ou no botão 'X' (fechar)
window.addEventListener('click', function(event) {
    const modal = document.getElementById("imageModal");
    // Verifica se clicou no fundo do modal ou no elemento com a classe 'close'
    if (event.target == modal || event.target.classList.contains('close')) {
        modal.style.display = "none";
    }
});

/**
 * 3. Lógica de Carregamento (Skeleton Screen)
 * Remove o esqueleto e aplica o fade-in quando a imagem carrega
 */
function imageLoaded(img) {
    const skeleton = img.previousElementSibling;
    
    if (skeleton && skeleton.classList.contains('skeleton')) {
        skeleton.style.display = 'none';
    }
    
    // Adiciona a classe que dispara a animação CSS
    img.classList.add('img-loaded');
}

/**
 * 4. Lógica dos Botões de Commission (WhatsApp)
 * Envia uma mensagem personalizada baseada no plano escolhido
 */
document.querySelectorAll('.btn-order').forEach(button => {
    button.addEventListener('click', function() {
        const tipoServico = this.parentElement.querySelector('h3').innerText;
        const meuNumero = "5511999999999"; // <--- COLOQUE SEU NÚMERO AQUI (com DDD)
        
        const texto = `Olá! Vi seu portfólio e gostaria de fazer um pedido de: ${tipoServico}`;
        const url = `https://wa.me/${meuNumero}?text=${encodeURIComponent(texto)}`;
        
        window.open(

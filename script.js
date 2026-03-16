// Partículas (Sem erros)
if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
        "particles": {
            "number": { 
                "value": window.innerWidth < 768 ? 30 : 80, // Menos partículas no celular
                "density": { "enable": true, "value_area": 800 } 
            },
            "color": { "value": ["#bd93f9", "#ff79c6"] },
            "opacity": { "value": 0.5 },
            "size": { "value": 3 },
            "line_linked": { "enable": true, "distance": 150, "color": "#6272a4", "opacity": 0.3 },
            "move": { "enable": true, "speed": 1.5 }
        },
        "interactivity": {
            "events": { "onhover": { "enable": window.innerWidth > 768 } } // Desativa hover no toque do celular
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

// WhatsApp Link
document.querySelectorAll('.btn-order').forEach(button => {
    button.addEventListener('click', function() {
        const servico = this.parentElement.querySelector('h3').innerText;
        const meuNumero = "5511999999999"; // <--- Coloque seu número aqui
        const texto = encodeURIComponent(`Olá Guilherme! Gostaria de pedir uma commission do tipo: ${servico}`);
        window.open(`https://wa.me/${meuNumero}?text=${texto}`, '_blank');
    });
});

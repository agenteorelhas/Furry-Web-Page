// Partículas Background
if (document.getElementById('particles-js')) {
    particlesJS('particles-js', {
        "particles": {
            "number": { "value": 80 },
            "color": { "value": ["#bd93f9", "#ff79c6"] },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5 },
            "size": { "value": 3 },
            "line_linked": { "enable": true, "distance": 150, "color": "#6272a4", "opacity": 0.4 },
            "move": { "enable": true, "speed": 1.5 }
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

/* Cores Tema Dracula */
:root {
    --bg-color: #282a36;
    --current-line: #44475a;
    --foreground: #f8f8f2;
    --comment: #6272a4;
    --purple: #bd93f9;
    --pink: #ff79c6;
}

body {
    background-color: var(--bg-color);
    color: var(--foreground);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
}

header {
    background-color: var(--current-line);
    padding: 1rem 2rem;
    border-bottom: 2px solid var(--purple);
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
}

nav a {
    color: var(--purple);
    text-decoration: none;
    font-weight: bold;
    transition: 0.3s;
}

nav a:hover {
    color: var(--pink);
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
}

.art-card {
    background: var(--current-line);
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease;
    border: 1px solid transparent;
}

.art-card:hover {
    transform: translateY(-5px);
    border-color: var(--pink);
}

.art-card img {
    width: 100%;
    height: auto;
    display: block;
}

.art-card p {
    padding: 10px;
    text-align: center;
}

function filterSelection(category) {
    const cards = document.getElementsByClassName("art-card");
    
    if (category === "all") {
        for (let card of cards) {
            card.style.display = "block";
        }
        return;
    }

    for (let card of cards) {
        if (card.classList.contains(category)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
}

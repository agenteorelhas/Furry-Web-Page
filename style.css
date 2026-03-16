:root {
    --bg-color: #282a36;
    --current-line: #44475a;
    --foreground: #f8f8f2;
    --comment: #6272a4;
    --purple: #bd93f9;
    --pink: #ff79c6;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: var(--bg-color);
    color: var(--foreground);
    font-family: 'Segoe UI', sans-serif;
    overflow-x: hidden;
}

#particles-js {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: -1;
}

/* --- Header Responsivo --- */
header {
    background: rgba(40, 42, 54, 0.85);
    backdrop-filter: blur(10px);
    padding: 15px 5%;
    border-bottom: 2px solid var(--purple);
    position: sticky;
    top: 0;
    z-index: 1000;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    flex-wrap: wrap; /* Permite quebrar linha no celular */
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
}

.logo span { color: var(--purple); }

nav ul {
    display: flex;
    gap: 20px;
    list-style: none;
}

nav ul a {
    color: var(--foreground);
    text-decoration: none;
    font-weight: 600;
    transition: 0.3s;
}

nav ul a:hover { color: var(--pink); }

/* --- Galeria Grid --- */
section {
    padding: 60px 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.section-title {
    text-align: center;
    margin-bottom: 40px;
    color: var(--pink);
}

.grid-container {
    display: grid;
    /* Ajuste dinâmico: min 280px, max 1 fração do espaço */
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
}

.art-card {
    background: var(--current-line);
    border-radius: 12px;
    padding: 15px;
    text-align: center;
    transition: 0.3s;
    overflow: hidden;
}

.art-card img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 8px;
    transition: 0.5s;
}

.art-card:hover img { transform: scale(1.1); }

/* --- Commissions Responsivo --- */
.price-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap; /* Garante que os cards empilhem no celular */
}

.price-card {
    background: var(--current-line);
    border: 2px solid var(--purple);
    padding: 30px 20px;
    border-radius: 15px;
    width: 300px;
    text-align: center;
    position: relative;
}

.price-card.featured { border-color: var(--pink); }

.badge {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--pink);
    color: var(--bg-color);
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: bold;
}

/* --- Ajustes para Celular (Media Query) --- */
@media (max-width: 768px) {
    nav {
        flex-direction: column; /* Logo em cima, menu embaixo */
        gap: 10px;
    }

    .logo { font-size: 1.2rem; }

    nav ul {
        gap: 15px;
        font-size: 0.9rem;
    }

    .section-title { font-size: 1.5rem; }

    .price-card {
        width: 100%; /* Card ocupa largura total no celular */
    }
}

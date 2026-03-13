function mostrarPagina(id){

let paginas = document.querySelectorAll(".pagina");

paginas.forEach(p => p.classList.remove("active"));

document.getElementById(id).classList.add("active");

}

mostrarPagina("home");



function curtir(botao){

let span = botao.querySelector("span");

let numero = Number(span.innerText);

numero++;

span.innerText = numero;

}



function postar(){

let texto = document.getElementById("postText").value;

if(texto=="") return;

let feed = document.getElementById("feed");

let post = document.createElement("div");

post.className="post";

post.innerHTML = `
<p>${texto}</p>
<button onclick="likePost(this)">❤️ 0</button>
`;

feed.prepend(post);

document.getElementById("postText").value="";

}



function likePost(btn){

let numero = btn.innerText.split(" ")[1];

numero++;

btn.innerText="❤️ "+numero;

}



let humor=0;

function trocarHumor(){

let avatar = document.getElementById("avatarImg");

if(humor==0){

avatar.style.transform="rotate(10deg)";
humor=1;

}else{

avatar.style.transform="rotate(0deg)";
humor=0;

}

}

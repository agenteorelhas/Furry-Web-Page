function scrollGaleria(){

document.getElementById("galeria")
.scrollIntoView({behavior:"smooth"});

}



function curtir(botao){

let span = botao.querySelector("span");

let valor = Number(span.innerText);

valor++;

span.innerText = valor;

}



let humor = 0;

function trocarHumor(){

let avatar = document.getElementById("avatarImg");

if(humor==0){

avatar.style.transform="rotate(10deg) scale(1.1)";
humor=1;

}else{

avatar.style.transform="rotate(0deg) scale(1)";
humor=0;

}

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

function curtir(){

alert("❤️ Você curtiu esse personagem!");

}



let humor = 0;

function trocarAvatar(){

let avatar = document.getElementById("avatarImg");

if(humor == 0){

avatar.style.transform = "rotate(10deg)";
alert("Avatar feliz 🐾");

humor = 1;

}else{

avatar.style.transform = "rotate(0deg)";
alert("Avatar neutro");

humor = 0;

}

}



function postar(){

let texto = document.getElementById("postText").value;

if(texto == "") return;

let feed = document.getElementById("feed");

let post = document.createElement("div");

post.className = "post";

post.innerText = texto;

feed.prepend(post);

document.getElementById("postText").value = "";

}

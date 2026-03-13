function favoritar(btn){

btn.innerText="⭐ Favoritado";

}



let search = document.getElementById("search");

search.addEventListener("keyup", function(){

let valor = search.value.toLowerCase();

let artes = document.querySelectorAll(".art");

artes.forEach(function(art){

let nome = art.dataset.name;

if(nome.includes(valor)){

art.style.display="block";

}else{

art.style.display="none";

}

});

});

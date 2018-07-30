if(typeof localStorage.nome == "undefined"){
	localStorage.nome = prompt("Qual seu nome?");
}
document.getElementById("info").innerHTML = "Seja Bem Vindo: "+localStorage.nome;
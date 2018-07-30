var cont = 0;
function acao(){
	document.write("Mensagem : "+cont+"<br>")
	cont += 1;
}
setInterval(acao, 2000);
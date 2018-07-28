function validar() {

	var valor = document.getElementById("numero").value;

	if(valor.length < 6) {
		alert("Sua senha contem menos de 6 caracteres");
		return false;
	} else {
		alert("Sua senha foi aceita!");
		return true;
	}

}
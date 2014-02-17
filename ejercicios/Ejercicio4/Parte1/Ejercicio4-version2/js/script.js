if (window.attachEvent)
	window.attachEvent('load', iniciar);
else
	window.addEventListener('load', iniciar, false);
	
function iniciar() {
	console.log("iniciar");
	
	document.getElementById("boton1").onclick = botonPulsado;
	document.getElementById("boton2").onclick = botonPulsado;
}

function botonPulsado(event) {
	var div = document.getElementById("miDiv");

	if (this.id == "boton1")
		div.className = "clase1";
	else
		div.className = "clase2";
}

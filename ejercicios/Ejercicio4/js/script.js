if (window.attachEvent)
	window.attachEvent('load', iniciar);
else
	window.addEventListener('load', iniciar, false);
	
function iniciar() {
	console.log("iniciar");
}

function boton1Pulsado() {
	var div = document.getElementById("miDiv");
	div.className = "clase1";
}

function boton2Pulsado() {
	var div = document.getElementById("miDiv");
	div.className = "clase2";
}
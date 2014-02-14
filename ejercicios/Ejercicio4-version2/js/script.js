if (window.attachEvent)
	window.attachEvent('load', iniciar);
else
	window.addEventListener('load', iniciar, false);
	
function iniciar() {
	console.log("iniciar");
}
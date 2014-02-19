if (window.attachEvent)
	window.attachEvent('load', iniciar);
else
	window.addEventListener('load', iniciar, false);
	
function iniciar() {
	console.log("iniciar");
	
	obtenerAnchos();
	
	if (window.attachEvent)
		window.attachEvent('resize', obtenerAnchos);
	else
		window.addEventListener('resize', obtenerAnchos, false);
		
	if (window.attachEvent)
		window.attachEvent('fontResize', obtenerAnchos);
	else
		window.addEventListener('fontResize', obtenerAnchos, false);
}

function obtenerAnchos() {
	// Ancho 1em
	var _1em = document.getElementById('muestra_1em').offsetWidth;
	console.log("1em = " + _1em + "px");
	
	document.getElementById('1em_px').innerHTML = _1em;
	document.getElementById('2em_px').innerHTML = _1em * 2;
	document.getElementById('3em_px').innerHTML = _1em * 3;
	document.getElementById('4em_px').innerHTML = _1em * 4;
	
	// Ancho pantalla
	var ancho = document.body.offsetWidth;
	document.getElementById('ancho_px').innerHTML = px(ancho);
	document.getElementById('ancho_em').innerHTML = ems(ancho, _1em);
	
	// Alto pantalla
	var alto = document.body.offsetHeight;
	document.getElementById('alto_px').innerHTML = px(alto);
	document.getElementById('alto_em').innerHTML = ems(alto, _1em);
}

function px(px) {
	return px + "px";
}

function ems(px, _1em) {
	var em = Math.floor(px / _1em);
	return em + "em";
}


/* Redimensión de texto */

function init()  {
	var iBase = TextResizeDetector.addEventListener(onFontResize,null);
}
	
//id of element to check for and insert control
TextResizeDetector.TARGET_ELEMENT_ID = 'muestra_1em';
	
//function to call once TextResizeDetector has init'd
TextResizeDetector.USER_INIT_FUNC = init;
		
function onFontResize(e, args) {
	obtenerAnchos();
}
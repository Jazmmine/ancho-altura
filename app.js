window.addEventListener("load", function() {
	var boton = document.getElementById("calcular");
	boton.addEventListener("click", function() {
		var altura = parseInt(document.getElementById("altura").value);
		var ancho = parseInt(document.getElementById("ancho").value);
		myFunction(altura,ancho);
	});

	function myFunction(altura,ancho) {
		document.getElementById("tamanio").style.height = altura + "px";
		document.getElementById("tamanio").style.width = ancho + "px";
	}
	
});
var tiempoParaActualizarDato = 2;
var numFoto =1;

//elementos
var sectionAbout = document.getElementById("about");
var titulo = document.getElementById("dato_titulo");
var parrafo = document.getElementById("dato_parrafo");


console.log("correcto");

traerDatos();

function traerDatos(){
	console.log("dentro de la funcion");
	const xhttp = new XMLHttpRequest();
	xhttp.open('GET', 'basededatos.json', true);
	xhttp.send();
	xhttp.onreadystatechange = function()
	{
		console.log("a");
		if(this.readystate == 4 && this.status == 200){
			console.log("ready");
			console.log(this.responseText);
		}

	}
}




function cambiarFondo(element){
	console.log("CMBIAR FONDO");
	var ruta = "Imagenes/Fondos/Fondo" + numFoto +".jpg";
	element.style.backgroundImage= "url('"+ruta+"')" ;
	//console.log(ruta);
	numFoto++;
	if(numFoto == 6)
		numFoto = 0;
}

function cambiarTexto(element, lista){
	console.log(element.innerHTML);
	element.innerHTML = lista[numFoto];
	console.log("Changed to " + element.innerHTML);
}

function actualizarDato(){
	cambiarTexto(titulo, datosTitulos);
	cambiarTexto(parrafo, datosParrafos);
}

setInterval(function(){
	//cambiarFondo(sectionAbout);
	//actualizarDato();
}, 1000*tiempoParaActualizarDato);
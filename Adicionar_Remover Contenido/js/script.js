$(document).on('ready', cargado);

function cargado(){
	$('#boton_tabla_1').on('click', clickTabla1);
	$('#boton_tabla_2').on('click', clickTabla2);
	$('#boton_tabla_3').on('click', clickTabla3);
	$('#boton_clase_1').on('click', clickClase1);
	$('#boton_clase_2').on('click', clickClase2);
	$('#boton_html').on('click', clickHTML);
	$('#boton_cadena_1').on('click', clickCadena1);
	$('#boton_cadena_2').on('click', clickCadena2);
	$('#boton_cadena_3').on('click', clickCadena3);
}

function clickCadena1(){
	$('#cadena').prepend('Nueva Cadena__');
	//HTML//
	//$('#cadena').prepend('<h3>Nuevo Titulo</h3>');
}

function clickCadena2(){
	//$('#cadena').append('Nueva Cadena__');
	//HTML//
	$('#cadena').append('<li>Nuevo Elemento</li>');
}

function clickCadena3(){
	
	$('#cadena').text('NUEVO TEXTO');
}


function clickTabla1(){
	var x = $('#tablaNumeros').attr('border');
	alert(x);
}

function clickTabla2(){
	$('#tablaNumeros').attr('border', '2');
}

function clickTabla3(){
	$('#tablaNumeros').removeAttr('border');
}

function clickClase1(){
	$('p').addClass('nuevaClase');
}

function clickClase2(){
	$('p').removeClass('nuevaClase');
}

function clickHTML(){
	$('#nuevoHTML').html('<ul><li>Item1</li><li>Item2</li><li>Item3</li></ul>');
}

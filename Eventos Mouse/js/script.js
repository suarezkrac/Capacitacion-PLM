$(document).on('ready', cargado);

function cargado(){
	/*$('#box_1').on('mouseover', mouseOverBox);
	$('#box_1').on('mouseout', mouseOutBox);*/

	$('#box_1').hover(estadoSobre, estadoFuera);
	$('#box_2').on('mousemove', mouseMoveBox);

	$('#box_3').on('mouseup', mouseUpBox);
	$('#box_3').on('mousedown', mouseDownBox);

	$('#box_4').on('dblclick', dobleClickBox);

	$('#input_nombre').on('focus', focusInput);
	$('#input_nombre').on('blur', blurInput);

}

function focusInput(){
	$('#input_nombre').val(" ");
}

function blurInput(){
	var x = $('#input_nombre').val();
	if(x==" "){
		$('#input_nombre').val("Digite su nombre");	
	}
}

function dobleClickBox(){
	alert('Has hecho doble click en el div');
}

function mouseUpBox(){
	$('#box_3').css('background', 'red');
}

function mouseDownBox(){
	$('#box_3').css('background', 'blue');
}

function mouseMoveBox (event){
	$('#x').text('Coordenada x ='+event.clientX);
	$('#y').text('Coordenada Y ='+event.clientY);
}


function estadoSobre(){
	$('#box_1').css('background', 'blue');
}

function estadoFuera(){
	$('#box_1').css('background', 'red');
}
/*
function mouseOverBox(){
	$('#box_1').css('background', 'blue');
}

function mouseOutBox(){
	$('#box_1').css('background', 'red');
}
*/
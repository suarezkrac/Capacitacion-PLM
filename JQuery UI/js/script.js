$(document).on('ready', cargado);

function cargado(){

	$('#box_1').draggable();

	$('#box_2').droppable({over: function(){
		$('#box_2').css('background', 'yellow');
	}});

	$('#box_3').resizable();

	$('#Ciudades').selectable();

	$('#Paises').sortable();

	$('#acordeon').accordion();

	var posibilidades = ["Juan", "Pedro", "Pepe", "Sandra"];

	$('#nombres').autocomplete({source: posibilidades});

	$('.boton_ui').button();

	$('#calendario').datepicker({dateFormat: "yy-mm-dd"});

	$('#dialogo').dialog();

	var porcentaje_progreso = 40;
	var porcentaje_slide = 30;

	$('#barra').progressbar({value: porcentaje_progreso});
	$('#slide').slider({value: porcentaje_slide});

	$('#pestana').tabs();

	$('#aplicar').on('click', AplicarEfecto);
}

function AplicarEfecto(){
	var x = $('#efectos').val();
	$('#box_effect').effect(x, 5000);
}
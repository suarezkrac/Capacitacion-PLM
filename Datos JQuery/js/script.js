$(document).on('ready', cargado);

function cargado(){
	$('a').click(function(){
		var pagina = $(this).attr('href');
		$('#salida').load(pagina);
		return false;
	});

	$('#enviar').click(function(){
		
		var x = $('#campoNumero').val();

		$.post("php/calculadora.php",{ numerovariable : x},function(datos){
			$('#resultado').html('<p>'+datos+'</p>');
		});

		return false;

	});

	$('#enviar_2').click(function(){
		
		var x = $('#numeroano').val();

		$.ajax({
			async: true,
			type: "POST",
			dataType: "html",
			contentType: "application/x-www-form-urlencoded",
			url: 'php/ano.php',
			data: 'ano_actual='+x,
			beforeSend: inicioEnvio,
			success: llegada,
			timeout: 4000,
			error: problema
		});

		return false;

	});
}

function inicioEnvio(){
	$('#resultado_2').html('<b>Cargando.....</b>');
}
function llegada(datos){
	$('#resultado_2').html('<b>'+datos+'</b>');
}
function problema(){
	$('#resultado_2').html('<b>Lo sentimos no hay conexion en el momento</b>');
}


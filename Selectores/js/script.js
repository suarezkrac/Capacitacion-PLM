/*//función anonima (function)

//

//forma antigua 
$(document).ready(function(){
	$("#box").
});*/

//forma nueva 2.x

$(document).on('ready', cargado);
function cargado (){
	$('#box').on('click', clickbox);
	$('p.job').css('background', 'yellow');

	$('p:eq(1)').css('background', 'gray');

	$('tr:eq(0)').css('background', 'gray');
	$('tr:eq(1)').css('background', 'white');
	$('tr:eq(2)').css('background', 'red');

	var count = $('div#box3 li:not(ul>li)').size();

	$('p.contador').text('El numero de paises listados son:'+count);

	$("[href$='.pdf']").css('background', 'white');

	$('ul>li').addClass('convertirestilo');

}

function clickbox(){
	$('#box').hide();
}


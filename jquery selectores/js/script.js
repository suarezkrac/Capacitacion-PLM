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
	$('p.job').css('background', 'yellow')
}

function clickbox(){
	$('#box').hide();
}


$(document).on('ready', cargado);

function cargado(){
	$('#show_box_1').on('click', clickShow);
	$('#hide_box_1').on('click', clickHide);

	$('#fadeIn_box_2').on('click', clickFadeIn);
	$('#fadeOut_box_2').on('click', clickFadeOut);

	$('#fadeto1').on('click', clickFadeTo1);
	$('#fadeto2').on('click', clickFadeTo2);

	$('#toggle_box').on('click', clickToggle);

	$('#slide_1').on('click', clickSlideUp);
	$('#slide_2').on('click', clickSlideDown);

	$('#slide_toggle_box').on('click', clickSlideToggle);

	$('#animate_button').on('click', clickAnimate);

	
	
}
function clickAnimate(){
	var JSON = {width: "500px", height: "500px"};
	$('#box_7').animate(JSON,3000);
}



function clickSlideToggle(){
	$('#box_6').slideToggle('slow');
}

function clickSlideUp(){
	$('#box_5').slideUp('slow');
}

function clickSlideDown(){
	$('#box_5').slideDown('slow');
}

function clickToggle(){
	$('#box_4').toggle('slow');
}

function clickFadeTo1(){
	$('#box_3').fadeTo('slow', 0.2);
}
function clickFadeTo2(){
	$('#box_3').fadeTo('slow', 0.8);
}

function clickFadeIn(){
	$('#box_2').fadeIn('slow');
}
function clickFadeOut(){
	$('#box_2').fadeOut('slow');
}
function clickShow(){
	$('#box_1').show('slow');
}
function clickHide(){
	$('#box_1').hide(3000);
}


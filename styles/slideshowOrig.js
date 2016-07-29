/*global $ */
$('document').ready(function () {
	'use strict';
	$("#slideContainer").css({
		'display': 'block',
		'border': '1px solid black',
		'box-shadow': '5px 5px 10px #999'
	});

	var selected = false;
	
	$('#btn_1').addClass('show');
	
	$('#btn_2').click(function () {
		$('div#btnContainer button').each(function(){
			window.console.dir(this);
			$(this).addClass('hide');
		});
		$('#btn_1').removeClass('show');
		$('#btn_1').addClass('hide');
		$('#btn_2').removeClass('hide');
		$('#btn_2').addClass('show');
		$('#slide_1').slideUp(500, 'swing');
		$('#slide_2').fadeIn(500, 'swing');
		window.console.dir(this);
//		$(this).css({'color':'green',
//						'background-color':'lightgray'});
	});

	function toggleFinished() {

		console.log("Slide Toggle has been completed on" + this.id);
	}

}); //End Document Ready
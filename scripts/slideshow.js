/*global $, getCurrPrevButtonIds */
$('document').ready(function () {
	'use strict';
	$("#slideContainer").css({
		'display': 'block',
		'border': '1px solid black',
		'box-shadow': '5px 5px 10px #999'
	});

	var prevBtn = '#btn_1',
		 currBtn = '',
		 prevSlide = '#slide_1',
		 currSlide = '';

	$(prevBtn).addClass('show');
	$('div#slideContainer img').each(function(){
			window.console.dir(this);
			$(this).css({'display':'none'});
		});
	$('#slide_1').css({'display':'block'});
	
	$('div#btnContainer button').on('click', function(evt) {
		var num = 0;
		currBtn = '#' + evt.target.id;
		if (currBtn.indexOf('_') !== -1) {
			num = (currBtn.indexOf('_') + 1);
		}
		currSlide = '#slide_' + currBtn.slice(num);
//		window.console.dir(currSlide);
//		dir(currSlide);
//		window.console.dir(prevSlide);
		$('div#btnContainer button').each(function(){
			window.console.dir(this);
			$(this).addClass('hide');
		});
		
		$(prevBtn).removeClass('show'); 
		$(prevBtn).addClass('hide'); 
		$(currBtn).removeClass('hide');
		$(currBtn).addClass('show');
		$(prevSlide).slideUp(500, 'swing');
		$(currSlide).fadeIn(500, 'swing');
		prevBtn = currBtn;
		prevSlide = currSlide;
	});
}); //End Document Ready

function dir(arg) {
	window.console.dir(arg);
}
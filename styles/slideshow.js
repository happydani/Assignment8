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
	

//	$('div#btnContainer button').on('click', function(evt) {
//		console.log(evt.target.id);
//		currBtn = '#' + evt.target.id;	
		
	//	prevBtn = currBtn;	// assign current to prev button
//	});
	
	$('div#btnContainer button').on('click', function(evt) {
		var num = 0;
		currBtn = '#' + evt.target.id;
		if (currBtn.indexOf('_') !== -1) {
			num = (currBtn.indexOf('_') + 1);
		}
		currSlide = '#slide_' + currBtn.slice(num);
window.console.dir(currSlide);
window.console.dir(prevSlide);
		$('div#btnContainer button').each(function(){
window.console.dir(this);
			$(this).addClass('hide');
		});
		$('div#slideContainer img').each(function(){
window.console.dir(this);
			$(this).addClass('hide');
		});
		$(prevBtn).removeClass('show'); // may not be needed?
		$(prevBtn).addClass('hide'); // may not be needed?
		$(currBtn).removeClass('hide');
		$(currBtn).addClass('show');
		$(prevSlide).slideUp(500, 'swing');
		$(currSlide).fadeIn(500, 'swing');
		prevBtn = currBtn;
		prevSlide = currSlide;
	});

	

	function updateShowHideStatus() {
		
	}
	
	
	function showCurrHidePrev() {
		
	}
//	getCurrPrevButtonIds();
	updateShowHideStatus();
	showCurrHidePrev();
}); //End Document Ready
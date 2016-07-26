/*global $, calculate, enter */
$('document').ready(function () {
	'use strict';
	$("#calc").css({
		'width': '235px',
		'margin-top': '20px',
		'border': '3px groove #99bbdd',
		'border-radius': '10px',
		'box-shadow': '2px 2px 5px 2px rgba(0,0,0,0.1)',
		'background-color': '#999999',
		'padding': '15px',
		'color': '#105146',
		'font-size': '20px'
	});
	$("#container input, #equal").css({
		'height': '44px',
		'width': '44px',
		'border': '2px groove #99bbdd',
		'border-radius': '5px',
		'box-shadow': '2px 2px 2px 1px rgba(0,0,0,0.2)',
		'backgroundColor': '#aacccc',
		'font-style': 'italic',
		'margin': '15px 5px'
	});
	$("#result").css({
		'height': '44px',
		'width': '203px',
		'border': '2px groove #99bbdd',
		'margin-bottom': '20px',
		'border-radius': '5px',
		'box-shadow': '2px 2px 2px 1px rgba(0,0,0,0.3)',
		'backgroundColor': '#d0f9f2',
		'margin': '5px',
		'padding-left': '15px'
	});

	var result = $('#result');

	function init() {

		$("#container input").on('click', function (event) {
			window.console.dir(this.value);
			if (this.value === '=') {
				calculate();
			} else {
				enter(this.value);
			}
		});
	}

	function enter(val) {
		var str = '';
		str = result.val() + val;
		result.val(str);
	}

	function calculate() {
		result.val(eval(result.val()));
	}

	init();

}); //End Document Ready
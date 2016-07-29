// JavaScript Document

$(function () {
	// all list hidden except first one
	$('li.drawer ul:not(:first)').hide();
	$('h3.handle').click(function () {
		// prev asks us to read the previous DOM element which is h3
		$('li.drawer ul:visible').slideUp().prev().removeClass('open');
		// next asks us to read the next DOM element which is ul			
		$(this).addClass('open').next().slideDown();
	});
});
// JavaScript Document
$(function(){
	var tabContent=$('.tabs>div');
	tabContent.hide().filter(':first').show();
	$('.tabs ul.tabNav a').click(function(){
		tabContent.hide();
		tabContent.filter(this.hash).show(); /* this takes the value of the # (whether one, two, three or four in our example)*/
	$('.tabs ul.tabNav a').removeClass('selected');		
	$(this).addClass('selected');
	return false; /* prevents the normal anchor behavior from working which means if the window is shortened, the anchor doesn't move the text to the bottom of the page */
	}); 
});
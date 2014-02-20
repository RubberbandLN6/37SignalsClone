$(document).ready(function() {
	$('#basecamp').hover(function() {
		$('.headings').hide();
		$('#basecamp-heading').show();
		$('#arrowl').show();
	},function(){
		$('#basecamp-heading').hide();
		$('#intro').show();
		$('#arrowl').hide();
	});
});
$(document).ready(function() {
	$('#highrise').hover(function() {
		$('.headings').hide();
		$('#basecamp-heading').show();
		$('#up-arrow').show();
	},function(){
		$('#basecamp-heading').hide();
		$('#intro').show();
		$('#up-arrow').hide();
	});
});
$(document).ready(function() {
	$('#campfire').hover(function() {
		$('.headings').hide();
		$('#basecamp-heading').show();
		$('#right-arrow').show();
	},function(){
		$('#basecamp-heading').hide()
		$('#intro').show();
		$('#right-arrow').hide();
	});
});

$(document).ready(function() {
	$('#basecamp').hover(function() {
		$('.headings').hide();
		$('#basecamp-heading').show();
		$('#left-arrow').show();
	},function(){
		$('#basecamp-heading').hide();
		$('#intro').show();
		$('#left-arrow').hide();
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

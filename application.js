$(document).ready(function() {
	$('#basecamp').hover(function() {
		$('#leftarrow').show();
	});

	$('#basecamp').mouseout(function() {
		$('#leftarrow').hide();
	});
});

$('.person').on('click', function(e) {
	$(this)
		.find('.toggled-info')
		.slideToggle('slow', () => {
			console.log('yeey');
		});
	e.stopPropagation();
});

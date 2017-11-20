function isScrolledIntoView(elem) {
	let docViewTop = $(window).scrollTop();
	let docViewBottom = docViewTop + $(window).height();
	const offset = 0.8;
	let elemTop = $(elem).offset().top;
	let elemBottom = (elemTop + $(elem).height()) * offset;

	return elemBottom <= docViewBottom;
}

$(document).ready(function() {
	$('.diet-plan').each(function() {
		if (!isScrolledIntoView($(this))) {
			$(this).addClass('hidden');
		}
	});

	$(document).on('scroll', function() {
		$('.hidden').each(function() {
			if (isScrolledIntoView($(this))) {
				$(this)
					.removeClass('hidden')
					.css({ display: 'none' })
					.show('slide', 'slow');
			}
		});
	});
});

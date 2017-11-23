$(document).ready(function() {
	const api = 'http://food2fork.com/api/search?key=6c5622f67dc2f89829d51346d38a7201&count=10&q=';
	let searchText = '';
	let html = '';

	$('#search').on('keydown', e => {
		if (e.keyCode === 13) {
			$('#submit').click();
			return false;
		}
	});

	$('#submit').on('click', () => {
		html = '';

		searchText = $('#search').val();
		url = api + searchText;

		$.ajax({
			url,
			type: 'GET',
			dataType: 'json',
			success: response => {
				response.recipes.map(val => {
					var keys = Object.keys(val);

					html +=
						"<a class='search-links' target ='_blank' href='http://food2fork.com/view/" +
						val.recipe_id +
						"'>" +
						"<div class = 'result well'>";

					keys.map(key => {
						if (key === 'title') {
							html +=
								'<strong>' +
								val[key] +
								'</strong> ' +
								'<div><img class="recipe-images" src=' +
								val['image_url'] +
								' /></div>';
						}
					});
					html += '</div></a>';
				});

				$('.results').html(html);
			},
		});
	});
});

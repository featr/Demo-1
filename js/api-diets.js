$(document).ready(function() {
	const api = 'http://food2fork.com/api/search?key=6c5622f67dc2f89829d51346d38a7201&count=10&q=';
	let searchText = '';
	let html = '';

	const clear = () => {
		html = '';
	};

	$('#search').on('keydown', e => {
		if (e.keyCode === 13) {
			$('#searchForm').submit(() => {
				$('#submit').click();
				return false;
			});
		}
	});

	$('#submit').on('click', () => {
		clear();

		searchText = $('#search').val();
		url = api + searchText;

		$.ajax({
			url: url,
			type: 'GET',
			dataType: 'json',
			success: response => {
				response.recipes.map(val => {
					var keys = Object.keys(val);
					console.log('this is keys' + keys);
					html +=
						"<a class='search-links' target ='_blank' href='http://food2fork.com/view/" +
						val.recipe_id +
						"'>" +
						"<div class = 'result well'>";

					keys.map(key => {
						if (key === 'title') {
							html += '<strong>' + val[key] + '</strong> ' + '<br>';
						}
					});
					html += '</div></a><br>';
				});

				$('.results').html(html);
			},
		});
	});
});

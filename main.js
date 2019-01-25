$('#form').on('submit', function(event) {

	$('#results').html('Loading...');

	$('#results').addClass("loader");


	var input = $('#input').val().trim();


	let url = `https://www.reddit.com/r/${input}.json`;


	let promise = $.ajax ({
		type: 'GET',
		url: url
	});

	promise.then(function(threads){
		console.log(threads);
		let html = "";

		threads.data.children.forEach(function(thread){
			html += `
				<div class="post">
					<h3>${thread.data.title}</h3>
					Score: ${thread.data.score} | 
					Author: ${thread.data.author}
				</div>
			`;
		});

		$('#results').html(html).removeClass("loader");

	}, function(){

		console.log('error');

	});

return false;

})
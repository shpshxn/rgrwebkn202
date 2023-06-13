$(document).ready(function() {
	$('.news-details').on('click', function() {
		var newsBox = $(this).closest('.news-box');
		var newsTitle = newsBox.find('.news-title').text();
		var newsImage = newsBox.find('.news-image').html();
		var newsDescription = newsBox.find('p').text();
		
		// $('#news-title').text(newsTitle);
		// $('#news-image').html(newsImage);
		// $('#news-description').text(newsDescription);

		localStorage.setItem("news-title", newsTitle);
		localStorage.setItem("news-image", newsImage);
		localStorage.setItem("news-description", newsDescription);
	
		window.location.href = 'news_template.html';

	});
});
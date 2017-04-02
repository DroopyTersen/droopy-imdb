var request = require("request-promise-native");
var cheerio = require("cheerio");

var baseUrl = "http://www.imdb.com/title/";
var defaultSelector = "span[itemprop='ratingValue']"
var getRating = exports.getRating = function(imdbId, selector) {
	selector = selector || defaultSelector;
	var url = baseUrl + imdbId;
	return request.get(url).then(resp => {
		var $ = cheerio.load(resp);
		var rating = $(selector).text().trim();
		return rating;
	})
}
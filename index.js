var request = require("request-promise-native");
var cheerio = require("cheerio");

var baseUrl = "http://www.imdb.com/title/";

var getRating = exports.getRating = function(imdbId) {
	var url = baseUrl + imdbId;
	return request.get(url).then(resp => {
		var $ = cheerio.load(resp);
		var rating = $("span[itemprop='ratingValue']").text().trim();
		return rating;
	})
}
getRating("tt0172495");
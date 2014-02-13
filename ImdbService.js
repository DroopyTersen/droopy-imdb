var HttpService = require("droopy-http"),
	q = require("q"),
	cheerio = require("cheerio");

var ImdbService = function() {
	this.baseUrl = "http://www.imdb.com/title/";
};

ImdbService.prototype = new HttpService();

ImdbService.prototype.getRating = function(imdbId) {
	var deferred = q.defer();
	this.get(this.baseUrl + imdbId).then(function(html){
		var $ = cheerio.load(html);
		var rating = $(".star-box-giga-star").text().trim();
		deferred.resolve(rating);
	});
	return deferred.promise;
};

module.exports = ImdbService;
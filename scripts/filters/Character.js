
angular.module("movies").filter("character", function() {
	
	return function(text) {
		return angular.isString(text) && text.length > 0 ? (", como " + text) : "";
	};
	
});

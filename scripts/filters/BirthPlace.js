
angular.module("movies").filter("birthPlace", function() {
	
	return function(text) {
		return text || "Sin información";
	};
	
});

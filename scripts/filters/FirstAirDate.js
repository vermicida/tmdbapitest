
angular.module("movies").filter("firstAirDate", function($filter) {
	
	return function(text) {
		return angular.isString(text) && text.length > 0 ? ("En emisión desde " + $filter("date")(text, "MMMM yyyy")) : "Sin datos";
	};
	
});

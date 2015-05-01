
angular.module("movies").filter("personalDate", function($filter) {
	
	return function(text) {
		return angular.isString(text) && text.length > 0 ? $filter("date")(text, "dd MMMM yyyy") : "Sin información";
	};
	
});

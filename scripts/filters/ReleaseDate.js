
angular.module("movies").filter("releaseDate", function($filter) {
	
	return function(text) {
		
		var message;
		
		if (angular.isString(text) && text.length > 0) {
			var date = new Date(text);
			message = (date > new Date() ? "Se estrena el " : "Se estrenó el ") + $filter("date")(date, "dd/MM/yyyy");
		}
		else {
			message = "Sin datos";
		}
		
		return message;
	};
	
});

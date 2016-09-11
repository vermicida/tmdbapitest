/** 'First Air Date' filter */
function firstAirDateFilter($filter) {
    return function(text) {
        return angular.isString(text) && text.length > 0
            ? ("En emisión desde " + $filter("date")(text, "MMMM yyyy"))
            : "Sin datos";
    };
}

/** 'First Air Date' filter DI */
firstAirDateFilter.$inject = ["$filter"];

/** Adds the 'First Air Date' filter definition to the Application Injector */
angular
    .module("tmdbapitest")
    .filter("firstAirDate", firstAirDateFilter);

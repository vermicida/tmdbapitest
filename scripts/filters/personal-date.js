/** 'Personal Date' filter */
function personalDateFilter($filter) {
    return function(text) {
        return angular.isString(text) && text.length > 0
            ? $filter("date")(text, "dd MMMM yyyy")
            : "Sin información";
    };
}

/** 'Personal Date' filter DI */
personalDateFilter.$inject = ["$filter"];

/** Adds the 'Personal Date' filter definition to the Application Injector */
angular
    .module("tmdbapitest")
    .filter("personalDate", personalDateFilter);

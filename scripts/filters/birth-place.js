/** 'Birth Place' filter */
function birthPlaceFilter() {
    return function(text) {
        return text || "Sin información";
    };
}

/** Adds the 'Birth Place' filter definition to the Application Injector */
angular
    .module("tmdbapitest")
    .filter("birthPlace", birthPlaceFilter);

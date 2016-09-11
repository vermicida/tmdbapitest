/** 'Character' filter */
function characterFilter() {
    return function(text) {
        return angular.isString(text) && text.length > 0
            ? (", como " + text)
            : "";
    };
}

/** Adds the 'Character' filter definition to the Application Injector */
angular
    .module("tmdbapitest")
    .filter("character", characterFilter);

/** 'Settings' constant class */
var settingsConstant = {
    theMovieDatabaseApiVersion: "3",
    theMovieDatabaseApiKey: "set-your-api-key-here"
};

/** Adds the 'Settings' constant definition to the Application Injector */
angular
    .module("tmdbapitest")
    .constant("settings", settingsConstant);

/** 'Settings' constant class */
var settingsConstant = {
    theMovieDatabaseApiVersion: "3",
    theMovieDatabaseApiKey: "826b523c417cbb888744b13031d846c2"
};

/** Adds the 'Settings' constant definition to the Application Injector */
angular
    .module("tmdbapitest")
    .constant("settings", settingsConstant);

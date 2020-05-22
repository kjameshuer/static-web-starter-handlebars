const Handlebars = require("handlebars");
Handlebars.registerHelper('loud', function (aString) {
    return aString.toUpperCase()
})
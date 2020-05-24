const Handlebars = require("handlebars");
Handlebars.registerHelper('loud', function (aString) {
    return aString.toUpperCase()
})

Handlebars.registerHelper('hasChildren', function (value) {
    return value.hasOwnProperty('children');
});

var path = require("path");
var itemController = require("../controllers/itemController.js");

module.exports = function(app) {
    app.get("/collection", itemController.index);
}

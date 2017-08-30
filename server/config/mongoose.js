var mongoose = require("mongoose");
    fs       = require("fs");
    path     = require("path");
    Schema   = mongoose.Schema

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/ProjectCLdb");
var models_path = path.join(__dirname, "./../models");


fs.readdirSync(models_path).forEach(function(file) {
    if(file.indexOf(".js") >= 0) {
        require(models_path + "/" + file);
    }
});

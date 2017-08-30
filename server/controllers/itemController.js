var mongoose = require("mongoose");
var Item = mongoose.model("Item");

module.exports = {
    index: function(req, res) {
        Item.find({}, function(err, result) {
            if(err) {
                console.log("Server error - failed to find all items");
                res.json({ message: "Error - failed to find all items" })
            } else {
                console.log("Server - successfully found all items!");
                res.json({ message: "Successfully found all items!", result: result });
            }
        });
    },

    create: function(req, res) {
        newItem = new Item(req.body);
        newItem.itemText = req.body.itemText;
        newItem.description = req.body.description;
        newItem.save(function(err) {
            if(err) {
                console.log("Server error - failed to create new Item.");
                res.json({ message: "Error - failed to create new Item.", error: err.errors.itemText });
            } else {
                console.log("Server - successfully created a new Item!");
                res.json({ message: "Successfully created a new Item!" });
            }
        });
    },

    show: function(req, res) {
        Item.findOne({ _id: req.params.id })
        .populate("answers")
        .exec(function(err, result) {
            if(err) {
                console.log("Server error - failed to find the item.");
                res.json({ message: "Error - failed to find the item." });
            } else {
                console.log("Server - successfully found the item!");
                res.json({ message: "Successfully found the item!", result: result });
            }
        });
            // , function(err, result) {

        // });
    }

    // update: function(req, res) {
    //     Item.update({ _id: req.params.id }, { $set: {  }}, function(err) {
    //         if(err) {
    //             res.json({ message: "Error - failed to update the item." });
    //         } else {
    //             res.json({ message: "Successfully updated the item!" });
    //         }
    //     })
    // },

    // delete: function(req, res) {
    //     Item.remove({ _id: req.params.id }, function(err) {
    //         if(err) {
    //             res.json({ message: "Error" });
    //         } else {
    //             res.json({ message: "Success!" });
    //         }
    //     });
    // }
}

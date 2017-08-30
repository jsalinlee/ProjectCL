var mongoose = require("mongoose");

var ItemSchema = new mongoose.Schema( {
    label: { type: String, required: true },
    description: { type: String, required: true},
    details: { type: String },
    likes: { type: Number, required: true }
},
    { timestamps: true }
);

mongoose.model("Item", ItemSchema);

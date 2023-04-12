const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema is like a blueprint of how we want to store data
const reviewSchema = new Schema({
    workingStatus: String,
    review: String,
    diversity: Number,
    equity: Number,
    inclusion: Number
})

// Make and export a model using the schema
// Review (name of model, Capitalized and singular) + schema
// When the model is saved to a variable, this creates a class, which can be used to create instances
module.exports = mongoose.model("Review", reviewSchema);


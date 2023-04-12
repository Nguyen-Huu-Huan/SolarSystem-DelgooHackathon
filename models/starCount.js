const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema is like a blueprint of how we want to store data
const starCountSchema = new Schema({
    totalPossibleStars: Number,
    totalGivenStars: Number,
    validity: Boolean
    // Everytime a rating is saved, keep count, and only divide ((totalPossibleStars/ratedStars) * 100) when average is needed to ensure accuracy
})

// Make and export a model using the schema
// Review (name of model, Capitalized and singular) + schema
// When the model is saved to a variable, this creates a class, which can be used to create instances
// Note: in database, collection will be called "starcounts", Not "starCounts"!!!
module.exports = mongoose.model("StarCount", starCountSchema);


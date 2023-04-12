const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema is like a blueprint of how we want to store data
const postedJobSchema = new Schema({
    title: String, 
    location: String, 
    workingStyle: String, 
    employmentType: String, 
    skills: String, 
    experience: String, 
    generatedDescription: String,
    postedDate: String
})

module.exports = mongoose.model("PostedJob", postedJobSchema);


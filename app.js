const express = require("express");
const app = express();

//Interestingly, need this for jquery to work (urlencoded will not work for jquery)
const bodyParser = require("body-parser");
app.use(bodyParser.json())

const mongoose = require("mongoose");

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1/Simplified-Hackathon-2023");
    console.log("Database connected!")
}

// Importing model from review.js, and saving it to Review class variable
const Review = require("./models/review");
const StarCount = require("./models/starCount");
const PostedJob = require("./models/postedJob");


// Setting things up for openai API
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// View engine to ejs
app.set("view engine", "ejs");

// For static files
app.use(express.static(__dirname + '/public'));

// For ejs
const path = require("path");
const { data } = require("jquery");
app.set("views", path.join(__dirname, "views"))

// for parsing x-www-form-urlencoded
// By default, req.body is undefined, so need to populate it with body-parsing middleware express.urlencoded
app.use(express.urlencoded({ extended: true })); 

//instead of being the current working directory where we execute the file from, we want to use the directory name where "index.js" is located
app.get("/", (req, res) => {
    res.send("Hello!")
})

app.route("/jobs")
.get((req, res) => {
    res.render("job_description")
})
.post(async function (req, res) {
    const { title, employmentType, location, workingStyle, skills, experience } = req.body;
    //console.log(req.body)
    // Send data to openai API

    /* **Insert OPENAI KEY IN .env file for this to run**

    async function runCompletion(title, employmentType, location, workingStyle, experience, skills) {
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Create an unbiased job description based on the following: 
            ${title}, 
            ${employmentType}, 
            ${location}, 
            ${workingStyle},
            ${experience},
            ${skills}`,
            max_tokens: 5,
        });
        return completion.data.choices[0].text
    }
    //https://stackoverflow.com/questions/38884522/why-is-my-asynchronous-function-returning-promise-pending-instead-of-a-val
    const result = await runCompletion(title, employmentType, location, workingStyle, experience, skills);
    
    //console.log(result)
    //res.send({response: result})
    */
    // Hard coded result:
    const result = "We are looking for a talented Software Engineer from Sydney with 3+ years of experience in Object Oriented Languages like Java. This role is hybrid, and requires familiarity with Linux system. Applicants from all backgrounds are equally welcome to apply, as long as they possess industry experience and are motivated to help bring our startup to the next level."
    res.send({response: result})
})

app.route("/reviews")
.get(async (req, res) => {
    console.log("reached GET route!!!")
    // (1) Stars 
    // Find current stars and given stars
    // .find({}) returns everything in the form of an array
    const starsData = await StarCount.find({});
 
    // Initializing stars values, so that if there is no record in database, then average is 0
    let currentPossibleStars = 0;
    let currentGivenStars = 0;
    let averageRating = 0;
    let validity = false;

    let id="";

    const starsDataLength = starsData.length;

    // Check if array generated from database is empty; if not empty, take recorded data and find average rating
    if (starsDataLength != 0) {
        // Reasoning for using the index of "starsDataLength - 1" is explained below
        currentPossibleStars = starsData[starsDataLength - 1].totalPossibleStars;
        currentGivenStars = starsData[starsDataLength - 1].totalGivenStars;
        averageRating = (currentGivenStars / currentPossibleStars) * 100;
        validity = starsData[starsDataLength - 1].validity;
        id = starsData[starsDataLength - 1]._id;
        console.log("Validity issssssss" + validity)
    }

    // (2) Reviews
    // Find current reviews
    const allReviews = await Review.find({});

    let noOfReviews = allReviews.length;
    if (noOfReviews == 1) {
        noOfReviews += " review";
    }
    else {
        noOfReviews += " reviews"
    }


    // Passing in allReviews, averageRating and validity into ejs
    res.render("reviews.ejs", { allReviews, averageRating, validity, noOfReviews, id }) // need to style for validity, ideally do it backend via js in ejs....... if validity is true, innerhtml = ...
})

.post(async (req, res) => {
    console.log("reached POST route!!!")

    const {workingStatus, review, diversity, equity, inclusion} = req.body;
    
    // Save submitted data (random reviews) to database
    const reviewInstance = new Review(req.body);
    await reviewInstance.save();

    // Retrive star data from database
    const starsData = await StarCount.find({});

    // Initializing averageRating
    let averageRating = 0;

    const allReviews = await Review.find({});
    let noOfReviewsInteger = allReviews.length;
    let noOfReviews = allReviews.length;
    if (noOfReviews == 1) {
        noOfReviews += " review";
    }
    else {
        noOfReviews += " reviews"
    }

    let id = "";

    const starsDataLength = starsData.length;

    // Default of validity for new "chunks" is false
    let validity = false;

    // Check if document exists first
    // If not, create an instance with current values
    if (starsDataLength == 0) {
        
        const starsInstance = new StarCount({totalPossibleStars: 15, totalGivenStars: diversity + equity + inclusion, validity: false})
        await starsInstance.save();

        averageRating = ((diversity + equity + inclusion) / 15) * 100;
    }
    // Else, update instance
    else {
        // Take the last index number for the most updated "block" of data
        const currentPossibleStars = starsData[starsDataLength - 1].totalPossibleStars;
        const currentGivenStars = starsData[starsDataLength - 1].totalGivenStars;
        
        // Stars for each category is out of 5
        const updatedTotalPossibleStars = currentPossibleStars + 15;
        const updatedTotalGivenStars = currentGivenStars + diversity + equity + inclusion;

        averageRating = (updatedTotalGivenStars / updatedTotalPossibleStars) * 100;

        // To implement the fundamental concept of a blockchain being immutable, any data modification involves the creation of a new "block" (represented by a new instance here)

       

        // If rating goes above 80%, render badge as valid
        if (averageRating >= 80 && noOfReviewsInteger >= 10) {
            validity = true;
            // Need "await" for findByIdAndUpdate, else won't work
            const starsInstance = new StarCount({totalPossibleStars: updatedTotalPossibleStars, totalGivenStars: updatedTotalGivenStars, validity: true})
            await starsInstance.save();

            // Find id
            updatedStarsData = await StarCount.find({})
            id = updatedStarsData[updatedStarsData.length - 1]._id;


            //await StarCount.findByIdAndUpdate(id, {totalPossibleStars: updatedTotalPossibleStars, totalGivenStars: updatedTotalGivenStars, validity: true});
        } 
        // If rating drops below 80%, render badge as invalid
        // Also copy data and store it with a new id, with a default value of false for validity
        else {
            validity = false;
            const starsInstance = new StarCount({totalPossibleStars: updatedTotalPossibleStars, totalGivenStars: updatedTotalGivenStars, validity: false})
            await starsInstance.save();
        }
        console.log("averageRating" + averageRating + "noOfReviewsInteger" + noOfReviewsInteger + "validity" + validity)
        
    }
    

    const diversityPercentage = (diversity / 5) * 100;
    const equityPercentage = (equity / 5) * 100;
    const inclusionPercentage = (inclusion / 5) * 100;

    console.log("averageRating" + averageRating + "noOfReviewsInteger" + noOfReviewsInteger + "validity" + validity)
    
    // Pass in the following back to jquery to add to existing innerhtml from GET route 
    res.send({ workingStatus, review, diversityPercentage, equityPercentage, inclusionPercentage, averageRating, validity, noOfReviews, id })
})
.delete(async (req, res) => {
    // Clear all (randomly generated) data
    await StarCount.deleteMany({});
    await Review.deleteMany({});
    res.send();
})


app.route("/postedJobs")
.get(async (req, res) => {
    const postedJobs = await PostedJob.find({});
    res.render("posted_jobs.ejs", { postedJobs })
})
.post(async (req, res) => {
    console.log("POST route")
    // Record date
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    
    // Save data to database
    const postedJob = new PostedJob({...req.body, postedDate:currentDate}); // Spreading in object literals
    await postedJob.save();
    console.log(postedJob)
    res.redirect("/postedJobs")
})


app.route("/ajax")
.get((req, res) => {
    res.render("ajax", {quote: "AJAX is great!"})
})
.post((req, res) => {
    res.send({response: req.body.quote})
})

app.listen(3000, () => {
    console.log("Serving on port 3000")
})



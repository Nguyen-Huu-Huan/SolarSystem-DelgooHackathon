console.log("connected to reviews.js")


// Badge generation
const openButton = document.querySelector(".generate-button");
const closeButton = document.querySelector(".close-button");

if (openButton != null) {
    openButton.addEventListener("click", () => {
        document.querySelector("#badge-popup").style.display = "block";
        console.log("pressed")
    })
}

if (closeButton != null) {
    closeButton.addEventListener("click", () => {
        document.querySelector("#badge-popup").style.display = "none";
        console.log("pressed")
    })
}


// Stars
//document.querySelector(`.averageRating .stars-inner`).style.width = averageRating;


// Positive review button
$(() => {
    $("#positive").on("submit", e => {
        e.preventDefault();
        console.log("positive")
        // Random number (0-9)
        let randomNumber = Math.floor(Math.random() * 7);
        // Array of positive reviews
        const review1 = ["Current Employee (2yrs)" , "A great compay to work for! It is amazing to see that my team of around 20 workers come from at least 5 different backgrounds. No matter how experienced you are at your role, there is heaps of support available helping you to learn and succeed. Everyone is respectful and helpful to each other.", 4.5, 4.5, 4.5]
        const review2 = ["Current Employee (5yrs)", "I have been working here for a while for a reason! Out of previous places I've worked at, this is the best place by far, as everyone is provided with plenty of learning opportunities and support. Here, we embrace and celebrate different cultures through the acknowledgement of diverse holidays, allowing families to spend time together. We also have Employee Resource Groups, which are employee-led groups that bring people together with shared backgrounds or interests. ", 5, 4.5, 5];
        const review3 = ["Current Employee (3mos)", "Even though I have only been here for 3 months, this already feels like where I belong as everyone seems super nice, supportive, and respectful.", 4, 4.5, 4.5];
        const review4 = ["Current Employee (1mo)", "I recently joined this company and I'm blown away by their commitment to diversity, equity, and inclusion. From the very beginning of the hiring process, I could tell that they prioritize building a team that's representative of the communities they serve. Once I joined, I found a welcoming environment where everyone is respected and valued, regardless of their background or identity. The workplace offers regular training sessions on DEI topics and has a variety of employee resource groups that help build connections between employees. It's clear that they care deeply about creating an inclusive workplace culture, and I feel lucky to be a part of it.", 5, 5, 5];
        const review5 = ["Previous Employee (4yrs)", "I worked for this company for several years and was consistently impressed with the organization's commitment to diversity, equity, and inclusion. From the top down, there was a clear emphasis on creating a workplace culture where everyone felt valued and supported. There were a number of initiatives in place to promote diversity, including an employee resource group program, regular diversity training, and targeted recruitment strategies. I appreciated that the company not only talked about the importance of DEI, but also backed it up with concrete actions. It was a pleasure to work for an organization that truly cares about its employees and the broader community.", 4, 5, 4];
        const review6 = ["Previous Employee (3yrs)", "I had the pleasure of working for a company that truly embraced diversity, equity, and inclusion. From my very first day, I felt welcomed and supported regardless of my background. The company's commitment to building a diverse team was evident in their recruitment and retention practices, and there were regular opportunities for employees to engage in DEI training and education. It was inspiring to work for an organization that values and celebrates its employees' differences", 5, 4, 5]
        const review7 = ["Current Employee (3yrs)", "It's been 3 years now since I've started working here, and I continue to be impressed by their commitment to diversity, equity, and inclusion. The workplace is inclusive, respectful, and provides regular opportunities for education and growth. I'm grateful to be part of an organization that values and prioritizes its employees' well-being.", 4.5, 4, 4.5]
        const reviews = [review1, review2, review3, review4, review5, review6, review7];

        // Ajax http req object
        $.ajax({
            url: "/reviews",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({workingStatus: reviews[randomNumber][0], review: reviews[randomNumber][1], diversity: reviews[randomNumber][2], equity: reviews[randomNumber][3], inclusion: reviews[randomNumber][4]}),
            success: res => {
                $(".averageRating-stars-inner").css("width", `${res.averageRating}%`)
                $("#noOfReviews").html(`(${res.noOfReviews})`)
                $("#id").html(`id: ${res.id}`)

                $(".reviews").append(`
                <section class="reviewContainer">
                    <div class="reviewComment">
                        <span class="boldText">${res.workingStatus}</span>
                        <br>
                        ${res.review}
                    </div>
        
                    <div class="reviewRating">
                        Diversity
                        <div class="stars-outer">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <div class="stars-inner" style="width:${res.diversityPercentage}%">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                        Equity
                        <div class="stars-outer">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <div class="stars-inner" style="width:${res.equityPercentage}%">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                        Inclusion 
                        <div class="stars-outer">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <div class="stars-inner" style="width:${res.inclusionPercentage}%">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                    </div>
                </section>
                `)
                // Since res.validity is boolean, toggle(true) will show element, toggle(false) hides it
                $("#generateButtonContainer").toggle(res.validity)

            }
        })
    })
})

// Negative review button
$(() => {
    $("#negative").on("submit", e => {
        e.preventDefault();
        console.log("negative")
        // Random number (0-9)
        let randomNumber = Math.floor(Math.random() * 7);
        // Array of positive reviews
        const review1 = ["Current Employee (2yrs)" , "I have been working here for 3 years and I must confess this organization lacks commitment to DEI values. There is a lack of representation among leadership positions and a culture of exclusivity that undermines the value of the workplace's diverse employees. There is also a lack of meaningful engagement with the community on issues of social justice. The company's focus on productivity above all else has created an environment where employees do not feel supported or valued. It's a shame that this otherwise great company falls short in such an important area.", 0.5, 0.5, 0.5]
        const review2 = ["Current Employee (1yr)", "Working at this company for the past year has been a disheartening experience. The lack of diversity, equity, and inclusion is palpable in every aspect of the workplace. It's difficult to feel valued and supported when you don't see yourself represented in leadership positions, and the company's policies and practices consistently fail to promote a welcoming environment for all employees. It's disappointing that despite vocal feedback, the company continues to prioritize a homogenous workplace over the wellbeing and success of all of its employees. Planning to hop into another company ASAP", 0, 0, 0];
        const review3 = ["Current Employee (5mos)", "It's been 5 months, and I must say that I have witnessed firsthand the limited opportunities for growth and the disconnect between management and employees from marginalized backgrounds. It's hard to feel like I'm part of a team when I don't see myself reflected in the company's leadership or culture. It's disappointing that a company with such potential refuses to prioritize the inclusion and wellbeing of all of its employees. Will not be returning for the graduate program", 0, 0, 0];
        const review4 = ["Previous Employee (4yrs)", "Although I spent four years at this company, I ultimately left feeling undervalued and unheard as a person of color. While there were a few diversity initiatives, they felt more like tokens than genuine attempts at inclusion. The lack of representation in management and the company's refusal to address systemic issues left me feeling unsupported and demotivated. I hope the company recognizes the importance of diversity, equity, and inclusion and makes meaningful changes to create a truly inclusive workplace for all employees.", 0.5, 0, 0.5];
        const review5 = ["Previous Employee (2yrs)", "During my two years at this company, I felt increasingly isolated as a queer person of color. Despite voicing my concerns and suggesting solutions, leadership failed to prioritize diversity, equity, and inclusion. The company's efforts felt more performative than genuine, and I couldn't continue to work in an environment that ignored the voices and needs of marginalized employees. I hope the company takes the necessary steps to create a truly inclusive workplace and make all employees feel valued and supported.", 1, 1, 1];
        const review6 = ["Previous Employee (1yr)", "Not the best place that commits to DEI to be honest, but the money is good, and if you are lucky, you might land in a team of nice people ", 3, 2, 2]
        const review7 = ["Current Employee (1yr)", "My experience working for this company for a year has been none other than disappointing. The lack of diversity, equity, and inclusion made it difficult to feel like I belonged. It was clear that management did not prioritize the needs of marginalized employees, and the company's culture reflected this. I hope the company realizes that diversity and inclusion are not just buzzwords but necessary components for a successful and ethical workplace. Without a commitment to such important values, the company will continue to lose talented employees and fail to meet its full potential.", 1, 1.5, 0.5]
        const reviews = [review1, review2, review3, review4, review5, review6, review7];

        // Ajax http req object
        $.ajax({
            url: "/reviews",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({workingStatus: reviews[randomNumber][0], review: reviews[randomNumber][1], diversity: reviews[randomNumber][2], equity: reviews[randomNumber][3], inclusion: reviews[randomNumber][4]}),
            success: res => {
                $(".averageRating-stars-inner").css("width", `${res.averageRating}%`)
                $("#noOfReviews").html(`(${res.noOfReviews})`)
                $("#id").html(`id: ${res.id}`)
                $(".reviews").append(`
                <section class="reviewContainer">
                    <div class="reviewComment">
                        <span class="boldText">${res.workingStatus}</span>
                        <br>
                        ${res.review}
                    </div>
        
                    <div class="reviewRating">
                        Diversity
                        <div class="stars-outer">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                            <div class="stars-inner" style="width:${res.diversityPercentage}%">
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                        Equity
                        <div class="stars-outer">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                            <div class="stars-inner" style="width:${res.equityPercentage}%">
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                        Inclusion 
                        <div class="stars-outer">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                            <div class="stars-inner" style="width:${res.inclusionPercentage}%">
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                    </div>
                </section>
                `)
                // Since res.validity is boolean, toggle(true) will show element, toggle(false) hides it
                $("#generateButtonContainer").toggle(res.validity)


            }
        })        
    })
})


// Clear all button
$(() => {
    $("#clear").on("submit", e => {
        e.preventDefault();
        $.ajax({
            url: "/reviews",
            method: "DELETE",
            success: res => {
                // After clearing out the database successfully, remove all content on the frontend
                $(".averageRating-stars-inner").css("width", "0%");
                $(".reviews").html("");
                $("#noOfReviews").html("(0 reviews)")
                $("#generateButtonContainer").toggle(false)
            }
        })
    })
})

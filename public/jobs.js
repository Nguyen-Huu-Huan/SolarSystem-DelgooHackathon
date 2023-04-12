//https://github.com/yiisoft/yii2/issues/14620
$(() => {
    $("#jobDescriptionForm").on("submit", e => {
        e.preventDefault();
        const title = $("#title").val();
        const location = $("#location").val();
        const workingStyle = $("#workingStyle").val();
        const employmentType = $("#employmentType").val();
        const skills = $("#skills").val();
        const experience = $("#experience").val();
        // Ajax http req object
        $.ajax({
            url: "/jobs",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({title, location, workingStyle, employmentType, skills, experience}),
            success: res => {
                $("#generatedDescription").html(`${res.response}`)
            }
        })
    })
})

$(() => {
    $("#postForm").on("submit", e => {
        e.preventDefault();
        const title = $("#title").val();
        const location = $("#location").val();
        const workingStyle = $("#workingStyle").val();
        const employmentType = $("#employmentType").val();
        const skills = $("#skills").val();
        const experience = $("#experience").val();
        const generatedDescription = $("#generatedDescription").val();
        $.ajax({
            url: "/postedJobs",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({title, location, workingStyle, employmentType, skills, experience, generatedDescription}),
            success: res => {
                console.log("successfully posted！")
            }
        })


    })
})
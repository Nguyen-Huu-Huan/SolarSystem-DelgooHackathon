//https://github.com/yiisoft/yii2/issues/14620
$(() => {
    $("#changeQuote").on("submit", e => {
        e.preventDefault();
        let value = $("#value-name").val();
        // Ajax http req object
        $.ajax({
            url: "/ajax",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({quote: value}),
            success: res => {
                $("h1").html(`Quote: ${res.response}`)
                $("h2").html("2nd selector works!")
            }
        })
    })
})
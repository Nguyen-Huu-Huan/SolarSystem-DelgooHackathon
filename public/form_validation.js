
let generateButton = document.querySelector("#generateButton");


generateButton.addEventListener("click", (e) => {
    if (e != null) {
        let allFieldsCompleted = true;
        let valuesList = document.querySelectorAll(".required");

        // Reset * from previous click
        valuesList.forEach(element => {
            document.querySelector(`.${element.id}`).innerHTML = "";
        })

        // Reset warning from previous click
        document.querySelector("#warning").innerHTML = "";

        // Make sure all required fields are filled before submission, else show warning
        valuesList.forEach(element => {
            console.log(element);
            if (element.value == "" || element.value == "Please Select") {
                // Label required fields with *
                document.querySelector(`.${element.id}`).innerHTML = "*";
                allFieldsCompleted = false;
            } 
        })

        // Give warning at bottom if missing fields
        if (allFieldsCompleted == false) {
            document.querySelector("#warning").innerHTML = "All fields marked with an asterisk (*) are required";
            
            //Prevent submission of form
            e.preventDefault();
        } 
    }
})


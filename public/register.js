function validateform() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("myemail").value;
    var tel = document.getElementById("phonenum").value;
    var age = document.getElementById("myage").value;
    var gender = document.querySelector('input[name="mygender"]:checked');
    // var departureDate = document.getElementById("departuredate").value;
    // var returnDate = document.getElementById("returndate").value;
    var locations = document.querySelectorAll('input[name="locations"]:checked').length;
    var termsAndConditions = document.getElementById("termsandconditions").checked;
    
    let nameRegex = /^[a-zA-Z\s]+$/;
    let emailva = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var isValid = true;
   
    // Validate Name
    if (!nameRegex.test(name)) {
        document.getElementById("name_err").innerHTML = "**Name cannot be empty!";
        document.getElementById("name_err").style.color = "red";
        document.getElementById("name_err").style.fontSize = "15px";
        isValid = false;
    } else {
        alert("else");
        document.getElementById("name").innerHTML = "";
    }
    // Validate Email
    if(!emailva.test(email)){
        document.getElementById("email_err").innerText = "**Give the correct email address";
        document.getElementById("email_err").style.color = "red";
        document.getElementById("email_err").style.fontSize = "15px";
        isValid = false;
    } 
    else {
        document.getElementById("email_err").innerHTML = "";
    }

    // Validate Phone Number
    if (tel.length < 10 || isNaN(tel)) {
        document.getElementById("phone_err").innerHTML = "**Phone number must be at least 10 digits and should not include characters!";
        document.getElementById("phone_err").style.color = "red";
        document.getElementById("phone_err").style.fontSize = "15px";
        isValid = false;
    } else {
        document.getElementById("phone_err").innerHTML = "";
    }

    // Validate Age
    if (age.trim() == "" || isNaN(age)) {
        document.getElementById("age_err").innerHTML = "**Age must be a number!";
        document.getElementById("age_err").style.color = "red";
        document.getElementById("age_err").style.fontSize = "15px";
        isValid = false;
    } else {
        document.getElementById("age_err").innerHTML = "";
    }

    // Validate Gender
    if (!gender) {
        document.getElementById("gender_err").innerHTML = "**Please select a gender!";
        document.getElementById("gender_err").style.color = "red";
        document.getElementById("gender_err").style.fontSize = "15px";
        isValid = false;
    } else {
        document.getElementById("gender_err").innerHTML = "";
    }

    // Validate Departure Date
    // if (departureDate.trim() == "") {
    //     document.getElementById("departure_err").innerHTML = "Departure date cannot be empty!";
    //     document.getElementById("departure_err").style.color = "red";
    //     isValid = false;
    // } else {
    //     document.getElementById("departure_err").innerHTML = "";
    // }

    // Validate Return Date
    // if (returnDate.trim() == "") {
    //     document.getElementById("return_err").innerHTML = "Return date cannot be empty!";
    //     document.getElementById("return_err").style.color = "red";
    //     isValid = false;
    // } else {
    //     document.getElementById("return_err").innerHTML = "";
    // }

    // Validate Locations
    if (locations == 0) {
        document.getElementById("locations_err").innerHTML = "Please select at least one destination!";
        document.getElementById("locations_err").style.color = "red";
        document.getElementById("locations_err").style.fontSize = "15px";
        isValid = false;
    } else {
        document.getElementById("locations_err").innerHTML = "";
    }

    // Validate Terms and Conditions
    if (!termsAndConditions) {
        document.getElementById("terms_err").innerHTML = "Please accept the Terms & Conditions!";
        document.getElementById("terms_err").style.color = "red";
        document.getElementById("terms_err").style.fontSize = "15px";
        isValid = false;
    } else {
        document.getElementById("terms_err").innerHTML = "";
    }
    if(isValid){
        alert("Details submitted successfully");
        
    }
    if (!isValid) {
        event.preventDefault(); // Prevent form submission
      }
    return isValid;
}    
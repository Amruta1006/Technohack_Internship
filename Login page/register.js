function validateForm() {
    let name = document.forms["form"]["name"].value;
    let email = document.forms["form"]["email"].value;
    let pass1 = document.forms["form"]["pass1"].value;
    let pass2 = document.forms["form"]["pass2"].value;
    if (name == "") {
      alert("Name must be filled out");
    }
    else if (email == "") {
      alert("Email must be filled out");
    }
    else if (pass1 == "") {
      alert("Enter password");
  
    }
    else if (pass1.length < 6) {
      alert("password must be 6 length");
    }
    else if (pass1 != pass2) {
      alert("Please enter same password.");
    }
  }
  
function validateform() {
    let email = document.forms["lform"]["email"].value;
    let pass = document.forms["lform"]["password"].value;
    if (email == "") {
      alert("Email must be filled out");
      return false;
    }
    else if(pass==""){
      alert("Please enter  password");
      return false;
    }
    else if(pass.length<6){
      alert("Password must be 6 length")
    }
  }
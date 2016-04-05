// Removing the Default Bubble
var forms = document.getElementsByTagName('form');
  for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener('invalid', function(e) {
        e.preventDefault();
        //Possibly implement your own here.
      }, true);
  }

/*----------- Sign Up Form ----------------*/

// First Name Validation
function validFname() {  
  var x = document.getElementById("fname").value;
  var errfname = document.getElementById("errfname");

    if (x.length === 0 || x === "") {
      /* Changing CSS Properties from Javascript */
      // Using style
      errfname.style.display = "block";
      document.getElementById('fname').style.borderColor = "#ff0000";
      document.getElementById('errfname').innerHTML = '! Please fill out this field.';
      return false;

    } else if (x.length < 2) {  
      errfname.style.display = "block";
      document.getElementById('fname').style.borderColor = "#ff0000";
      document.getElementById('errfname').innerHTML = '* First name cannot be less than 2 characters.';
      return false;

    } else if (/[^a-zA-Z\-]/.test(x)) {  
      errfname.style.display = "block";
      document.getElementById('fname').style.borderColor = "#ff0000";
      document.getElementById('errfname').innerHTML='* First name must contain only alphabet characters and hypehns(-)';
      return false;

    } else { 
      errfname.style.display = "none";
      document.getElementById('fname').style.borderColor = "";
      document.getElementById('errfname').innerHTML = ""; 
      return true;
    }
} 

// Last name validation
function validLname() {

  var y = document.getElementById("lname").value;
  var errlname = document.getElementById("errlname");

  if (y.length === 0 || y === "") {
    errlname.style.display = "block";
    document.getElementById('lname').style.borderColor = "#ff0000";
    document.getElementById('errlname').innerHTML = '! Please fill out this field.';
  return false;
    
  } else if (/[^a-zA-Z\-]/.test(y)) {  
    errlname.style.display = "block";
    document.getElementById('lname').style.borderColor = "#ff0000";
    document.getElementById('errlname').innerHTML = '* Last name must contain only alphabet characters and hyphens(-).';
    return false;
  
  } else {
    errlname.style.display = "none";
    document.getElementById('lname').style.borderColor = "";
    document.getElementById('errlname').innerHTML = "";
    return true;
  }
}

// Validation email
function validEmail() {

  var z = document.getElementById("email").value;
  var erremail = document.getElementById("erremail");

  if (z.length === 0 || z === "") {
    erremail.style.display = "block";
    document.getElementById('email').style.borderColor = "#ff0000";
    document.getElementById('erremail').innerHTML = '! Please fill out this field.';
  return false;
  
  } else if (!/^[a-z0-9._]*\@[a-z]*\.[a-z]{2,3}$/.test(z)) {  
    erremail.style.display = "block";
    document.getElementById('email').style.borderColor = "#ff0000";
    document.getElementById('erremail').innerHTML = '* Please match the requested format. e.g. example@email.com';
    return false;
  
  } else {
    erremail.style.display = "none";
    document.getElementById('email').style.borderColor = "";
    document.getElementById('erremail').innerHTML = "";
    return true;
  }
}

// Validation password
function validPassword() {

  var password = document.getElementById("pwd").value;
  var errpwd = document.getElementById("errpwd");

  if (password.length === 0 || password === "") {
    errpwd.style.display = "block";
    document.getElementById('pwd').style.borderColor = "#ff0000";
    document.getElementById('errpwd').innerHTML = '! Please fill out this field.';
  return false;
  
  } else if (!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) {  
    errpwd.style.display = "block";
    document.getElementById('pwd').style.borderColor = "#ff0000";
    document.getElementById('errpwd').innerHTML = '* Password must contain at least one number, one special character, one uppercase and one lowercase letter, and at least 8 or more characters';
    return false;
  
  } else {
    errpwd.style.display = "none";
    document.getElementById('pwd').style.borderColor = "";
    document.getElementById('errpwd').innerHTML = "";
    return true;
  }
}


function createAccount() {
  var errsubmit = document.getElementById("errsubmit");

  if (!validFname() || !validLname() || !validEmail() || !validPassword()) {    
    errsubmit.style.display = "block";
    document.getElementById('errsubmit').innerHTML = 'Fields marked with an asterisk (*) are required. ';
    return false;
  } else {
    errsubmit.style.display = "none";
    return true;
  } 
}
// Removing the Default Bubble
var forms = document.getElementsByTagName('form');
  for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener('invalid', function(e) {
        e.preventDefault();
        //Possibly implement your own here.
      }, true);
  }

/*----------- Sign In Form ----------------*/

// Validation email
function validSigninEmail() {

  var signemail = document.getElementById("signin_email").value;
  var erremail = document.getElementById("erremail");

  if (signemail.length === 0 || signemail === "") {
    erremail.style.display = "block";
    document.getElementById('signin_email').style.borderColor = "#ff0000";
    document.getElementById('erremail').innerHTML = '! Please fill out this field.';
  return false;

  } else if (!/^[a-z0-9._]*\@[a-z]*\.[a-z]{2,3}$/.test(signemail)) {  
    erremail.style.display = "block";
    document.getElementById('signin_email').style.borderColor = "#ff0000";
    document.getElementById('erremail').innerHTML = '* Please match the requested format. e.g. example@email.com';
    return false;
  
  } else {
    erremail.style.display = "none";
    document.getElementById('signin_email').style.borderColor = "";
    document.getElementById('erremail').innerHTML = "";
    return true;
  }
}

// Validation password
function validSigninPassword() {

  var loginpassword = document.getElementById("signin_pwd").value;
  var errpwd = document.getElementById("errpwd");

  if (loginpassword.length === 0 || loginpassword === "") {
    errpwd.style.display = "block";
    document.getElementById('signin_pwd').style.borderColor = "#ff0000";
    document.getElementById('errpwd').innerHTML = '! Please fill out this field.';
  return false;
  
  } else {
    errpwd.style.display = "none";
    document.getElementById('signin_pwd').style.borderColor = "";
    document.getElementById('errpwd').innerHTML = "";
    return true;
  }
}


function checkLoginForm() {
  var errsubmit = document.getElementById("errsubmit");

  if (!validSigninEmail() || !validSigninPassword()) {    
    errsubmit.style.display = "block";
    document.getElementById('errsubmit').innerHTML = 'Email address and Password are required.';
    return false;
  } else {
    errsubmit.style.display = "none";
    return true;
  }
}

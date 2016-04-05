/* MyAccount Form Validation */

$.validator.setDefaults ({
    submitHandler: function() {
      form.submit();
    }
});

  $().ready(function() {

    $.validator.addMethod("regx1", function(value, element, regexpr) {          
        return regexpr.test(value);
    }, "* Please match the requested format. e.g. example@email.com");
   
    // validate myAccountForm on keyup and submit
    $("#myAccountForm").validate({
      rules: {
        fname: {
          required: true,
          minlength: 2
        }, 
        lname: "required",
        email: {
          required: true,
          regx1: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/
        }
      },
      messages: {
        fname: {
          required: "! Please fill out this field."
        },
        lname: "! Please fill out this field.",
        email: {
          required: "! Please fill out this field."
        }
      }
    
    });
    
  });  
 

// Password Validation

$().ready(function() {

    $.validator.addMethod("regx2", function(value, element, regexpr) {          
        return regexpr.test(value);
    }, "* Password must contain at least one number, one special character, one uppercase and one lowercase letter, and at least 8 or more characters.");
   
    // validate passwordForm on keyup and submit
    $("#passwordForm").validate({
      rules: {
        pwd: "required",
        password1: {
          required: true,
          regx2: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*/,
          minlength: 8
        }, 
        password2: {
          required: true,
          minlength: 8,
          equalTo: "#password1"
        }
      },
      messages: {
        pwd: "! Please fill out this field.",
        password1: {
          required: "! Please fill out this field."
        },
        password2: {
          required: "! Please fill out this field.",
          equalTo: "* These passwords don\'t match. Try again?'"
        }
      }
    
    });
    
  });

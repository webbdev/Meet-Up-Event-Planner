/* Create_Event Form Validation */

$.validator.setDefaults ({
    submitHandler: function() {
      form.submit();
    }
});

  $().ready(function() {

    $.validator.addMethod("regx", function(value, element, regexpr) {          
        return regexpr.test(value);
    }, "* Please match the requested format, e.g. +1 777 777 7777.");
   
    // validate createEventForm form on keyup and submit
    $("#createEventForm").validate({
      rules: {
        event_title: "required",
        event_type: "required",
        event_host: "required",
        event_phone: {
          required: true,
          regx: /^\+(?:[0-9] ?){6,14}[0-9]$/,
          minlength: 12,
          maxlength: 20 
        },
        geocomplete: "required",
        event_start: "required",
        event_end: "required",
        event_guests: "required",
      },
      messages: {
        event_title: "! Please fill out this field.",
        event_type: "! Please fill out this field.",
        event_title: "! Please fill out this field.",
        event_host: {
          required: "! Please fill out this field."
        },
        geocomplete: "! Please fill out this field.",
        event_start: "! Please fill out this field.",
        event_end: "! Please fill out this field.",
        event_guests: "! Please fill out this field."
      },

      // the errorPlacement has to take the table layout into account
      errorPlacement: function(error, element) {
        if (element.is(".form-control dd"))
          error.appendTo(element.next().next().next);
        else
          error.appendTo(element.parent().next());
      } 

    });
    
  });


// Start Time Validation
function validStartTime() {
  var errstart = document.getElementById("errstart");
  var zstart = document.getElementById("event_start").value;
  document.getElementById("view_start").innerHTML = zstart;
}

// End Time Validation
function validEndTime() {
  var errend = document.getElementById("errend");
  var zend = document.getElementById("event_end").value;
  document.getElementById("view_end").innerHTML = zend;
}

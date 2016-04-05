$(function(){
        
  $("#geocomplete").geocomplete()
    .bind("geocode:result", function(event, result){
      $.log(" " + result.formatted_address);
    }) 
    .bind("geocode:error", function(event, status){
      $.log("ERROR: " + status);
    }) 
    .bind("geocode:multiple", function(event, results){
      $.log("Multiple: " + results.length + " results found");
    });
        
    $("#examples a").click(function(){
    $("#geocomplete").val($(this).text()).trigger("geocode");
    return false;
  });
        
});


$.log = function(message){
  var zlocation = document.getElementById("geocomplete").value;
  document.getElementById("view_location").innerHTML = zlocation;
};
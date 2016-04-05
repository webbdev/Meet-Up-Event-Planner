// Start Time
$(function () {
  $('#datetimepicker1').datetimepicker();
    $('#datetimepicker2').datetimepicker({
        viewMode: 'years'
    });
      
    $('#datetimepicker3').datetimepicker({
        viewMode: 'years',
        format: 'MM/YYYY'
    });
});

// End Time
$(function () {
  $('#datetimepicker4').datetimepicker();
    $('#datetimepicker5').datetimepicker({
        viewMode: 'years'
    });
      
    $('#datetimepicker6').datetimepicker({
        viewMode: 'years',
        format: 'MM/YYYY'
    });
});
  


$(function () {
  $('#datetimepicker7').datetimepicker();
  $('#datetimepicker8').datetimepicker({
      useCurrent: false
  });
  $("#datetimepicker7").on("dp.change", function (e) {
      $('#datetimepicker8').data("DateTimePicker").minDate(e.date);
  });
  $("#datetimepicker8").on("dp.change", function (e) {
      $('#datetimepicker7').data("DateTimePicker").maxDate(e.date);
  });
});  


var _gaq = _gaq || [];
 _gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
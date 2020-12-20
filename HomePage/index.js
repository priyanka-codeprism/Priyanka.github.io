// js for read more
$(".rmb").click(function(){

  $(this).text(function(i, v){
     return v === 'Show More' ? 'Show Less' : 'Show More'
  });
  });

// date picker
  $ ('#cale').click(function() {
    $(this).datepicker({ 
          autoclose: true, 
          todayHighlight: true,
          format: "dd M yyyy"
    }).datepicker('update', new Date());
  });
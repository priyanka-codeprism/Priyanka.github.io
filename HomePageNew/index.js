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


  $(document).ready(function() {
  var showChar = 200;
  var ellipsestext = "...";
  var moretext = "more";
  var lesstext = "less";
  $('.more').each(function() {
    var content = $(this).html();

    if(content.length > showChar) {

      var c = content.substr(0, showChar);
      var h = content.substr(showChar-1, content.length - showChar);

      var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

      $(this).html(html);
    }

  });

  $(".morelink").click(function(){
    if($(this).hasClass("less")) {
      $(this).removeClass("less");
      $(this).html(moretext);
    } else {
      $(this).addClass("less");
      $(this).html(lesstext);
    }
    $(this).parent().prev().toggle();
    $(this).prev().toggle();
    return false;
  });
});
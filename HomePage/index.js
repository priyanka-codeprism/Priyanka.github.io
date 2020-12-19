// js for read more
 var zero=0;
$(document).ready(function() {
    $("#toggle").click(function() {
      var elem = $("#toggle").text();
      if (elem == "Read More") {
        //Stuff to do when btn is in the read more state
        $("#toggle").text("Read Less");
        $("#text").slideDown();
      } else {
        //Stuff to do when btn is in the read less state
        $("#toggle").text("Read More");
        $("#text").slideUp();
      }
    });

    //navbar on scroll
   
    /*$(window).on('scroll',function() {
       $('#navbar').toggleClass('hide',$(window).scrollTop() > zero);
       zero=$(window).scrollTop();
    });*/
  });
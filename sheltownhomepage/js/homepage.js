$(document).ready(function() {
var showChar = 100;
  var ellipsestext = "...";
  var moretext = "more";
  var lesstext = "less";
  $('.more').each(function() {
    var content = $(this).html();
    if(content.length > showChar) {
      var c = content.substr(0, showChar);
      var h = content.substr(showChar, content.length - showChar);

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
 //display otp div
  $("#sendOtpbtn").click(function(e){
  	e.preventDefault();
     $("#otp").css("display", "block");			    
  });
  //hide signuppage1 modal and display signuppage2 modal;
  $("#verifytotpbtn").click(function(e){
  	e.preventDefault();
    $("#SignupModal").modal("hide");
	$("#SignupModal2").modal("show");		    
  });
  //hide signuppage1 modal and display login modal;
  $("#LoginModal").click(function(e){
  	e.preventDefault();
    $("#SignupModal").modal("hide");
	$("#LoginModal").modal("show");		    
  });

});//ready function end
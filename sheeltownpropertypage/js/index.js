
$('.cat-btn').click(function(){
  $('nav ul .cat-show').toggleClass("show");
  $('nav ul .first').toggleClass("rotate");
});
$('.bhk-btn').click(function(){
  $('nav ul .bhk-show').toggleClass("show1");
  $('nav ul .second').toggleClass("rotate");
});
$('.pg-btn').click(function(){
  $('nav ul .pg-show').toggleClass("show2");
  $('nav ul .third').toggleClass("rotate");
});
$('.floor-btn').click(function(){
  $('nav ul .floor-show').toggleClass("show3");
  $('nav ul .fourth').toggleClass("rotate");
});
$('.fur-btn').click(function(){
  $('nav ul .fur-show').toggleClass("show4");
  $('nav ul .fifth').toggleClass("rotate");
});
$('.pro-btn').click(function(){
  $('nav ul .pro-show').toggleClass("show5");
  $('nav ul .sixth').toggleClass("rotate");
});

$('nav ul li').click(function(){
  $(this).addCLass("active").siblings().removeClass("active");
});
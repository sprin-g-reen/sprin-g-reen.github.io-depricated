$('.c1').children('article').hide();
$("#crypto").hide();
$(document).ready(function(){
  $('.c1').children('article').hide();
  $("#crypto").hide();
  setTimeout(function(){
    //$('#loading').hide();
    //$('#UI').show();
  }, 4000)
})

//A function to toggle the cryptography module
$(".c1").children('h1').click(function(){
  $('.c1').children('article').slideToggle(1000);
  $('.c1').children('h1').children('i').toggleClass('fa fa-caret-down');
  $('.c1').children('h1').children('i').toggleClass('fa fa-caret-up');
})
$("#try_crypto").click(function(){
  $("#crypto").slideToggle(500);
  $('#try_crypto').children('i').toggleClass('fa fa-caret-down');
  $('#try_crypto').children('i').toggleClass('fa fa-caret-up');
})
$('.nav-toggle').click(function(){
  $('.toh').slideToggle(500);
})
function jqUpdateSize(){
  // Get the dimensions of the viewport
  var width = $(window).width();
  if (width < 980){
    $('.toh').hide(1000);
  }
  else{
    $('.toh').show(1000);
  }
  console.log(width)
};
$(document).ready(jqUpdateSize);    // When the page first loads
$(window).resize(jqUpdateSize);
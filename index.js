//$('body').children().hide();
//$('.load').hide();
//$('.about').show();
function checkSize() {
  var width = $(window).width();
  if (width > 600) {
    $('.nav-item').css('width', 'initial');
  }
  else {
    $('.nav-item').css('width', '50px');
  }
}
function CreateBlocks() {
  const heAd = document.querySelector('.head')
  for (var i = 0; i <= 100; i++){
    const blocks = document.createElement('div');
    blocks.classList.add('block');
    heAd.appendChild(blocks);
  }
}


function HideLoader() {
  anime({
    targets: '.load',
    rotateZ: 580,
    scale: 0,
    duration: 3000,
  })
}

function AnimateBlocks() {
  var browserWidth = $(window).width()/2;
  var browserHeight = $(window).height()/2;
  anime({
    targets: '.block',
    translateX: function(){return anime.random(-browserWidth, browserWidth);},
    translateY: function(){return anime.random(-browserHeight, browserHeight);},
    scale: function() {return anime.random(0.5, 2.0);},
    duration: 3000,
    delay: anime.stagger(10),
    complete: AnimateBlocks,
    }
  )
}


$(document).ready(function() {
  
  
  //The hiding and showing of the nav
  checkSize();
  $(window).on('input', function() {
    checkSize();
  })
  
  //Start The Animation OF The Head!
  AnimateBlocks();
  CreateBlocks();
  //the loading content hider
  /*setTimeout(function(){
    $('body').children().show(200);
    $('.load').hide(100);
  }, 3000);*/
  
  HideLoader();
  //setInterval(alert('Respected User, This Page Is Currently Under Construction. So There Might Be Few Mistakes. Please Ignore Them.'), 30000);
})

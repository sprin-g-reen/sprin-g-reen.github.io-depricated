var deg_rot = 1;
//$('body').children().hide();
//$('.load').hide();
$('.more-infor').hide();
function LoadingConfig(){
  var win_height = $(window).height();
  var win_width = $(window).width();
  $(window).resize(function(){
    win_height = $(window).height();
    win_width = $(window).width();
  })
  function createBlocks(){
    var lc = document.querySelector('.loading_container');
    for (var i = 0; i < 100; i++){
      var block = document.createElement('div')
      block.classList.add('lblock');
      block.innerHTML = 'LOADING';
      lc.appendChild(block);
    }
  }
  createBlocks();
  function animation(){
    anime({
      targets: '.lblock',
      skewY: [0, 360],
      skewX: [0, 360],
      duration: 3000,
      translateX: function(){
        return anime.random(-(win_width/2), (win_width/2))
      },
    translateY: function(){
      return anime.random(-(win_height/2), (win_height/2))
    },
    delay: anime.stagger(0),
    complete: animation
    })
  }
  animation();
  setTimeout(function(){
    anime({
      targets: '.loading_container',
      scale: [1, 0],
      duration: 1000,
      complete: function(){
        $('.loading_container').remove();
      }
    })
  }, 6000)
}
LoadingConfig();
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
$('.more-toggler').click(function(){
  $('.more-infor').slideToggle();
  anime({
    targets: '.fa-caret-down',
    rotate: 180 * deg_rot,
    duration: 2000
  })
  deg_rot ++;
})

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
  checkSize();
  $(window).on('input', function() {
    checkSize();
  })
  AnimateBlocks();
  CreateBlocks();
})

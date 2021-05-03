document.addEventListener('click', function(e)
{
  var pos = [e.clientX, e.clientY];
  var target = e.target;
  console.log(e)
  var repelEffect = document.createElement('div');
  repelEffect.classList.add('repel');
  target.append(repelEffect);
  repelEffect.style.top = pos[1] + 'px';
  repelEffect.style.left = pos[0] + 'px';
  repelEffect.style.animationName = 'repel';
  setTimeout(function()
  {
    target.removeChild(repelEffect);
  }, 2000);
  // repelEffect.classList.add('now');
}
)
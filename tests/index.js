function copyToClipboard(text) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val(text).select();
  document.execCommand("copy");
  $temp.remove();
}
function decoratePage(bool)
{
  if (!(bool))
  {
    return false
  }
  var search = window.location.search.replace('?', "").split('&');
  console.log(search);
  var bname = decodeURIComponent(search[0].split('=')[1]);
  var dob   = decodeURIComponent(search[1].split('=')[1]);
  $('.cname').text(bname);

  $('.container').hide();
  $('.party').show();
}
function CheckLink()
{
  try{
    var link = window.location;
    var search = link.search;
    if (search === "")
    {
      return false
    }
    else
    {
      // the estimated search will be:
      // ?name=Nams&dob=0000-00-00&i=yes/no&l1=link1.jpg&l2=link2.jpg
      var params = search.replace('?', "").split('&')
      var names  = [];
      for (param in params)
      {
        names.push(param.split('=')[1])
      }
      console.log("names: " + names)
      decoratePage(names)
    }
  }
  catch (error)
  {
    return error
  }
}
function generateLink(bool)
{
  if (bool === false)
  {
    return false
  }
  var name = encodeURIComponent($('.name').val());
  var dob  = encodeURIComponent($('.date').val());
  var i    = $('.user')[0].checked;
  if (i)
  {
    var link1 = encodeURIComponent($('#l1').val());
    var search = format("?name={}&dob={}&i={}&l1={}", [name, dob, "yes", link1])
  }
  else
  {
    var search = format("?name={}&dob={}&i={}", [name, dob, "yes"])
  }
  var newlink = window.location.href + search;
  $('#genlink').val(newlink);
  return search
}
$('input[type="checkbox"]').click(function(e)
{
  var target = e.target;
  var checked = target.checked;
  // console.log(target.classList[0], checked)
  if (target.classList[0] === "user")
  {
    if (checked === true)
    {
      $('.custom')[0].checked = false 
      $('.user')[0].checked = true
      $('.links').show();
    }
    else
    {
      $('.custom')[0].checked = true
      $('.user')[0].checked = false
      $('.links').hide();
    }
  }
  else if (target.classList[0] === "custom")
  {
    if (checked === true)
    {
      $('.custom')[0].checked = true
      $('.user')[0].checked = false
      $('.links').hide();
    }
    else
    {
      $('.custom')[0].checked = false
      $('.user')[0].checked = true
      $('.links').show();
    }
  }
})
$('input[value="Generate Link"]').click(function(e)
{
  $('.copy').toggle();
  generateLink(true);
})
$('input[value="View Page"]').click(function(e)
{
  window.location = generateLink(true);
})
$('.party').hide();
$('.custom')[0].checked = true
$('.links').hide();
$('.copy').hide();

decoratePage(generateLink(CheckLink()))
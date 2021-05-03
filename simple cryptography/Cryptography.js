const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', ' '];
const encode_keys = [];
let encode_dict = {};
let decode_dict = {};
for (var a = 6765; a < 190897; a+= 379)
{
  if (chars.length < encode_keys.length){break;}
  encode_keys.push(a);
}

for (var i = 0; i < chars.length; i+= 1)
{
  encode_dict[chars[i]] = encode_keys[i];
}
for (var i = 0; i < chars.length; i+= 1)
{
  decode_dict[encode_keys[i]] = chars[i];
}

function copyToClipboard(text) {
  if (window.clipboardData && window.clipboardData.setData) {
      // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
      prompt("Text Copied To Clipboard")
      console.log(text)
      return clipboardData.setData("Text", text);

  }
  else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
      var textarea = document.createElement("textarea");
      textarea.textContent = text;
      textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in Microsoft Edge.
      document.body.appendChild(textarea);
      textarea.select();
      try {
          return document.execCommand("copy");  // Security exception may be thrown by some browsers.
      }
      catch (ex) {
          console.warn("Copy to clipboard failed.", ex);
          return false;
      }
      finally {
          document.body.removeChild(textarea);
      }
  }
}


function encode(){
  //The key, text
  var key = $('#key').val();
  var text = $('#text').val();

  //the list of key, text
  var k_l = [];
  var t_l = [];

  //The text to return
  var t_r = '';

  //Append items to k_l and t_l
  for (var i = 0; i < text.length; i++)
  {
    t_l.push(text[i])
  }
  for (var i = 0; i < key.length; i++)
  {
    k_l.push(key[i])
  }
  //console.log(k_l);

  //The appending of the K_l with the key, until the t_l.len == k_len
  for (var i = 0; i < text.length; i++)
  {
    var x = i % key.length;
    if (k_l.length === t_l.length)
    {
      break;
    }
    k_l.push(k_l[x])
  }
  //console.log(k_l)

  //The appending of the adding of encoded keys
  for (var i = 0; i < text.length; i++)
  {
    t_r = t_r + String(encode_dict[t_l[i]] + encode_dict[k_l[i]]) + " "
  }
  $('#result').val(t_r);
}
function decode(){
  var key = $('#key').val();
  var text = $('#text').val();
  
  //the list of key, text
  var k_l = [];
  var t_l = [];

  //The text to return
  var t_r = '';

  //appending of key and text
  for (var i = 0; i < key.length; i++)
  {
    k_l.push(key[i])
  }

  for (var i = 0; i < text.trim().split(" ").length; i++)
  {
    t_l.push(text.trim().split(" ")[i]) 
  }

  //stop when the t_l.len == k_l.len
  for (var i = 0; i < t_l.length; i++)
  {
    if (k_l.length >= t_l.length)
    {
      break;
    }
    var x = i % key.length;
    k_l.push(k_l[i])
  }
  

  //The appending of the decodation
  for (var i = 0; i < t_l.length; i++)
  {
    if (t_r.length === t_l.length){break;}
    t_r = t_r + String(decode_dict[parseInt(t_l[i]) - parseInt(encode_dict[k_l[i]])])
  }
  
  $('#result').val(t_r);
}
function copy(){  
  var copyText = document.getElementById("result");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}
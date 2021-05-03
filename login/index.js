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

function encodeNow(key, text)
{
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
  return t_r;
}

function decodeNow(key, text){ 
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
  
  return t_r;
}

function acessGranted(key)
{
  function Data(){
      $.getJSON("database/data.json", function(data) {
        var jsondata = data;
        console.log(data)
        return jsondata
    });
  }
  const config = require("database/data.json");
  const fs     = require("fs");
  var   data   = Data();
  console.log(config, fs, data)
}

function checkPass(valu)
{
  var value = String(valu);
  // pwd = 1qaz2wsx3edc4rfvgb6yhn7ujm8ik,9ol.0p;/
  var encoded = "30206 28690 30206 54462 49914 48398 33238 37407 50293 32480 28690 23384 50672 37407 27174 33238 28690 29827 21110 31343 55599 43092 25279 60526 34375 26416 21110 25658 31722 51809 52567 43471 27932 48777 24142 58631 62421 46124 19973 28690 45745 62421 29827 35891 33238 34375 50293 46882 54083 38544 34375 43850 35891 43850 35512 37786 30964 41576 38544";
  var decoded = decodeNow(value, encoded);
  if (decoded.includes("undefined"))
  {
    var a = confirm('You Are Not Eligible To View This Page.');
    if (a)
    {
      window.location = "http://you.are-not.allowed"
    }
  }
  else
  {
    acessGranted(value)
  }
  document.getElementById('pass').remove();
}

$("#pass").on(
  'input',
  function(e)
  {
    var input_value = e.target.value
    if (input_value.length >= 38)
    {
      checkPass(input_value);
    }
  }
)
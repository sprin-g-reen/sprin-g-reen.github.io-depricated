/*
A script of the programmers who have used PYTHON and are now wsing JAVASCRIPT
This script has some of the built-in function in python as the javascript functions
that will make you feel easier with JAVASCRIPT.

CDN: https://cdn.jsdelivr.net/gh/Parvat-web-dev/Python-For-JS@1.001/pythonforjs.js

Just add:--

<scrpit src='https://cdn.jsdelivr.net/gh/Parvat-web-dev/Python-For-JS@1.001/pythonforjs.js'></script>

--In your page

Available Functions:
  1. str(value)
  2. int(value)
  3. sum(iretable_list)
  4. max(*args)
  5. min(*args)
  6. abs(number)
  7. len(array_or_string)
  8. format(text, format_specs)
  9. zip(Arrays)
  10. round(number)

--All functions are made just to resemble the functions in python
--some may or may not work in the same way as the python's function does
--so if you can please modify it and reply the modifications at: replyerrors.parvat@gmail.com
*/

function str(value){
  //A 'str' function that changes 
  //any value into string
  return String(value);
}

function int(value){
  //A 'int' function that changes
  //the string into integet
  return parseInt(value);
}

function sum(iretables_list){
  //returns the sum of the given items in the iterable
  var total = 0;
  var item;
  var iretable = iretables_list;
  for (item in iretables){
    total += iretables[item];
  }
  return total;
}


function max(){
  //A function that returns the maximum
  // valu of the inputed values
  var i;
  var maxim = -Infinity;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > maxim) {
      maxim = arguments[i];
    }
  }
  return maxim;
}

function min(){
  //A function that returns the minimum
  // valu of the inputed values
  var i;
  var minimum = +Infinity;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] < minimum) {
      minimum = arguments[i];
    }
  }
  return minimum;
}

function abs(number){
  //returns the absolute value of the given number
  return Math.abs(number);
}

function len(iretables){
  //Returns the lengeth of the iretable or the string given.
  return iretables.length;
}

function format(value, format_specs){
  //The format function that replaces the '{}' with its
  //respective element in the 'format_specs'.
  var fs = format_specs;
  var text = value;

  if (typeof(fs) !== 'object'){
    fs = Array(fs);
  };
  if (typeof(text) !== 'string'){
    text = String(text);
  };
  var splt_txt = text.split(" ");

  var rslt_txt = '';
  var num = 0;

  for (var x = 0; x < splt_txt.length; x++){
    var txt_to_add = splt_txt[x];
    if (splt_txt[x] === '{}'){
      txt_to_add = format_specs[num];
      num ++;
    };
    rslt_txt = rslt_txt + String(txt_to_add) + ' ';
  }
  return rslt_txt;
}

function zip(){
  //The function zip that joins the given arrays.
  //Thanks to 'ninjagecko' from Stackoverflow
  //For this function: link: https://stackoverflow.com/users/711085/ninjagecko
  //Function link: https://stackoverflow.com/questions/4856717/javascript-equivalent-of-pythons-zip-function
  var args = [].slice.call(arguments);
  var shortest = args.length==0 ? [] : args.reduce(function(a,b){
    return a.length<b.length ? a : b
  });

  return shortest.map(function(_,i){
    return args.map(function(array){return array[i]})
  });
}

function round(number){
  //Returns the nearest rounded number
  return Math.round(number);
}
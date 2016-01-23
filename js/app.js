var n = 1;
while (n < 101) {
  if (n%3===0 && n%5===0) {
  	$('div').append('<p>fizz buzz</p>');
  }
  else if (n%3===0) {
  	$('div').append('<p>fizz</p>');
  } else if (n%5===0) {
  	$('div').append('<p>buzz</p>'); 
  } else {
  	$('div').append('<p>'+n+'</p>');
  }
  n += 1;
}
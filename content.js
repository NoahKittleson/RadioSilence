// var element = document.getElementById("desktopNav");
// console.print(element);
// element.html('<p>Comment Section blocked by RadioSilence.</p>');
// alert("fuck");


// document.body.innerHTML = document.body.innerHTML.getElementById("bannerandheader").html('');
//
// var test = document.body.innerHTML;
// var element = test.getElementById("bannerandheader");
// element.html('');

var elem = document.getElementById("bannerandheader");
elem.parentNode.removeChild(elem);

fuckOFFid('watch-discussion');

var tick = 0
for (var i = 0; i < 60; i++) {
    setTimeout(function() {
      fuckOFFclass('fyre-widget');
      console.log(tick++ + " cycles");
    }, 1000 * i);
}


function fuckOFFid(fuckTHISone) {
  var elem = document.getElementById(fuckTHISone);
  if(!elem) return;
  var fuckingFUCKelem = document.createElement('p');
  var fuckingFUCKtextNODE = document.createTextNode('Comment section deleted by RadioSilence');
  fuckingFUCKelem.appendChild(fuckingFUCKtextNODE);
  elem.parentNode.appendChild(fuckingFUCKelem);
  elem.parentNode.removeChild(elem);
}

function fuckOFFclass(fuckTHISone) {
  var elems = document.getElementsByClassName("fyre-widget");
  if(!elems) return;
  var fuckingFUCKelem = document.createElement('p');
  var fuckingFUCKtextNODE = document.createTextNode('Comment section deleted by RadioSilence');
  fuckingFUCKelem.appendChild(fuckingFUCKtextNODE);
  console.log(elems);

  for(var i=0; i<elems.length; i++) {
    elems[i].parentNode.appendChild(fuckingFUCKelem);
    elems[i].parentNode.removeChild(elems[i])
  }
}

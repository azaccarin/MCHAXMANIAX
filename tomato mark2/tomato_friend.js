// tomato friend javascript

// Make the DIV element draggable:

var dragItem = document.getElementsByClassName("item");

var canvas = document.getElementById("frame");
var link = document.createElement('a');
    link.innerHTML = 'Save me !';


dragElement(dragItem[0]);
dragElement(dragItem[1]);
dragElement(dragItem[2]);
dragElement(dragItem[3]);
dragElement(dragItem[4]);
dragElement(dragItem[5]);
dragElement(dragItem[6]);
dragElement(dragItem[7]);
dragElement(dragItem[8]);
dragElement(dragItem[9]);
dragElement(dragItem[10]);
dragElement(dragItem[11]);
dragElement(dragItem[12]);

window.onload = function() {
  var canvas = document.getElementById("frame");
  var ctx = canvas.getContext("2d");
  var tom = document.getElementById("tomato");
  ctx.drawImage(tom, 10, 10);
}

function showme(num) {
  if (dragItem[num].style.display === "inline") {
    dragItem[num].style.display = "none";
  }
  else {
    dragItem[num].style.display = "inline";
  }
}

function shiftTab(tab) {
  let active = document.getElementsByClassName("menuItem");
  active[tab].style.display = "inline";
  var x = tab+1;
  x = x % 2;
  active[x].style.display = "none";
}

function dragElement(elmnt) {
    //  move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;


  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


link.addEventListener('click', function(ev) {
	link.href = canvas.toDataURL();
    link.download = "mypainting.png";
}, false);
document.body.appendChild(link);



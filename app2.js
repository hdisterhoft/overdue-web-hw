var elements = document.getElementsByClassName("column");

// Declare a "loop" variable
var i;

function four() {
    for (i = 0; i < elements.length; i++) {
      elements[i].style.flex = "25%"; 
    }
  }
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let index = 0;
  document.addEventListener("keydown", onKeyDownHandler)

  function onKeyDownHandler(e) {
    
    key = parseInt(e.detail || e.which);

    // value of keystroke === first index of code
    if (key === code[index]){
      // increase the index
      index++;
      if (index === code.length){
        alert("Hurray!");

        index = 0;
      }
    } else {
      debugger
      index = 0;
    }
  }
}

document.addEventListener("DOMContentLoaded", init)

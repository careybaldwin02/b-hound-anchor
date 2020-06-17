// Get the modal
var cModal = document.getElementById("covidModal");

// Get the button that opens the modal
var cBtn = document.getElementById("covidBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal
cBtn.onclick = function() {
  cModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  cModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == cModal) {
    cModal.style.display = "none";
  }
}
// Get the modal
var nModal = document.getElementById("natModal");

// Get the button that opens the modal
var nBtn = document.getElementById("natBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[4];

// When the user clicks on the button, open the modal
nBtn.onclick = function() {
  nModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  nModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == nModal) {
    nModal.style.display = "none";
  }
}
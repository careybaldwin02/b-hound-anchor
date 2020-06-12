// Get the modal
var sModal = document.getElementById("securityModal");

// Get the button that opens the modal
var sBtn = document.getElementById("securityBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[2];

// When the user clicks on the button, open the modal
sBtn.onclick = function() {
  sModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  sModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == sModal) {
    sModal.style.display = "none";
  }
}
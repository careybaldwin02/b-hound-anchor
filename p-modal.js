// Get the modal
var pModal = document.getElementById("policeModal");

// Get the button that opens the modal
var pBtn = document.getElementById("policeBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal
pBtn.onclick = function() {
  pModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  pModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == pModal) {
    pModal.style.display = "none";
  }
}
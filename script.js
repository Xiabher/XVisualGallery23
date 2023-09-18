// Get the modal element
var modal = document.getElementById("modal");

// Get the image and insert it inside the modal
var images = document.querySelectorAll(".gallery img");
var modalImg = document.getElementById("modal-img");

images.forEach(function (img) {
  img.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  });
});

// Close the modal when the user clicks outside of it
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
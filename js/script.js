// <----- Side Navigation ----->
function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
	document.getElementById("header").style.opacity = "0.6"
	document.getElementById("section-1").style.opacity = "0.6"
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("header").style.opacity = "1"
	document.getElementById("section-1").style.opacity = "1"
}

// <----- Slideshow ----->
var slideIndex = 1;
showSlides(slideIndex);

function moveSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
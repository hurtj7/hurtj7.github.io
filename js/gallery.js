// <----- Gallery ----->
function imgSelect(imgs) {
  var expandImg = document.getElementById("expanded-img");
	expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
}
// <----- Gallery ----->
function imgSelect(imgs) {
  var expandImg = document.getElementById("expanded-img");
	expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
  saveSelectedColour(imgs.getAttribute("src"));
}

function saveSelectedColour(colour) {
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem("selectedColour", colour);
  }
}

function retrieveSelectedColour() {
  if (typeof(Storage) !== "undefined") {
    var colour = localStorage.getItem("selectedColour");
    if (colour !== null) {
      var expandImg = document.getElementById("expanded-img");
      expandImg.src = colour;
      expandImg.parentElement.style.display = "block";
    }
  }
}
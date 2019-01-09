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
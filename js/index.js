let navbar = document.getElementById("navbar");

function openMobileNavbar() {
	navbar.classList.add("opened");
	navbarToggle.setAttribute("aria-label", "Close navigation menu.");
}

function closeMobileNavbar() {
	navbar.classList.remove("opened");
	navbarToggle.setAttribute("aria-label", "Open navigation menu.");
}

let navbarToggle = navbar.querySelector(".navbar-toggle");
navbarToggle.addEventListener("click", () => {
	if (navbar.classList.contains("opened")) {
		closeMobileNavbar();
	} else {
		openMobileNavbar();
	}
});

/* ALLOW USER TO CLOSE NAVIGATION MENU */
let navbarMenu = navbar.querySelector(".navbar-menu");
let navbarLinksContainer = navbar.querySelector(".navbar-links");
let homeLink = navbar.querySelector(".home-link");

homeLink.addEventListener("click", closeMobileNavbar);
navbarMenu.addEventListener("click", closeMobileNavbar);

navbarLinksContainer.addEventListener("click", (clickEvent) => {
	clickEvent.stopPropagation();
});

/* CLOSE NAVIGATION MENU ON LINK CLICK */
let navbarLinks = navbar
	.querySelector(".navbar-links")
	.querySelectorAll(".navbar-link");

navbarLinks.forEach((e) => {
	e.addEventListener("click", closeMobileNavbar)});




	
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
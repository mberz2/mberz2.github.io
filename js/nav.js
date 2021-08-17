const navbar = document.getElementById("navbar");
const navbarToggle = navbar.querySelector(".navbar-toggle");
const navbarMenu = navbar.querySelector(".navbar-menu");
const navbarLinks = navbar
	.querySelector(".navbar-links")
	.querySelectorAll(".navbar-link");

function openMobileNavbar() {
	//console.log("Adding OPENED from classlist");
	navbar.classList.add("opened");
}

function closeMobileNavbar() {
	//console.log("Removing OPENED from classlist");
	navbar.classList.remove("opened");
}

navbarToggle.addEventListener("click", () => {
	//console.log("Clicked toggle [navbarToggle]");
	if (navbar.classList.contains("opened")) {
		closeMobileNavbar();
	} else {
		openMobileNavbar();
	}
});

navbarLinks.forEach(e => {
	e.addEventListener('click', function(){
			//console.log("Clicked a link [navbarLink]");
			if (navbar.classList.contains("opened")) {
				closeMobileNavbar();
			} else {
				openMobileNavbar();
			}
	})
})
const navbar = document.getElementById("navbar");
const navbarToggle = navbar.querySelector(".navbar-toggle");

function openMobileNavbar() {
	navbar.classList.add("opened");
}

function closeMobileNavbar() {
	navbar.classList.remove("opened");
}

navbarToggle.addEventListener("click", () => {
	if (navbar.classList.contains("opened")) {
		closeMobileNavbar();
	} else {
		openMobileNavbar();
	}
});

const navbarMenu = navbar.querySelector(".navbar-menu");
const navbarLinksContainer = navbar.querySelector(".navbar-links");

navbarLinksContainer.addEventListener("click", (clickEvent) => {
	clickEvent.stopPropagation();
});

navbarMenu.addEventListener("click", closeMobileNavbar);
let navbar = document.getElementById("navbar");
let navbarMenu = navbar.querySelector(".navbar-menu");
let navbarLinks = navbar
	.querySelector(".navbar-links")
	.querySelectorAll(".navbar-link");
let homeLink = navbar.querySelector(".home-link");

function openMobileNavbar() {
	//console.log("Adding OPENED from classlist");
	navbar.classList.add("opened");
}

function closeMobileNavbar() {
	//console.log("Removing OPENED from classlist");
	navbar.classList.remove("opened");
}

[
	navbar.querySelector(".icon-bar"),
	navbar.querySelector(".navbar-toggle"),
].forEach((item) => {
	item.addEventListener("click", () => {
		console.log("Clicked toggle [navbarToggle2]");
		if (navbar.classList.contains("opened")) {
			closeMobileNavbar();
		} else {
			openMobileNavbar();
		}
	});
});

homeLink.addEventListener("click", () => {
	console.log("Clicked toggle [navbarToggle]");
	if (navbar.classList.contains("opened")) {
		closeMobileNavbar();
	}
});

navbarLinks.forEach((e) => {
	e.addEventListener("click", function () {
		console.log("Clicked a link [navbarLink]");
		if (navbar.classList.contains("opened")) {
			closeMobileNavbar();
		} else {
			openMobileNavbar();
		}
	});
});

/* Closes the navbar if the window is resized while its opened to a
larger size, preventing some errors */
window.addEventListener(
	"resize",
	function () {
		if (
			window.matchMedia("(min-width: 700px)").matches &&
			navbar.classList.contains("opened")
		) {
			closeMobileNavbar();
		}
	},
	true
);

let test = document.getElementById("test");
test.addEventListener("mouseover", function (e) {
	//console.log("MOUSEOVER");
});

$("#test").hover(
	function () {
		console.log("MOUSEOVER"), $(".navbar-menu").addClass("hover");
	},
	function () {
		console.log("MOUSEOVER2"), $(".navbar-menu").removeClass("hover");
	}
);

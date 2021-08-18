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
	e.addEventListener("click", closeMobileNavbar);
});

/* MODALS */
let modalparent = document.getElementsByClassName("modal_multi");
let modal_btn_multi = document.getElementsByClassName("myBtn_multi");
let span_close_multi = document.getElementsByClassName("close_multi");

function setDataIndex() {
	for (i = 0; i < modal_btn_multi.length; i++) {
		modal_btn_multi[i].setAttribute("data-index", i);
		modalparent[i].setAttribute("data-index", i);
		span_close_multi[i].setAttribute("data-index", i);
	}
}

for (i = 0; i < modal_btn_multi.length; i++) {
	modal_btn_multi[i].onclick = function () {
		var ElementIndex = this.getAttribute("data-index");
		modalparent[ElementIndex].style.display = "block";
	};

	span_close_multi[i].onclick = function () {
		var ElementIndex = this.getAttribute("data-index");
		modalparent[ElementIndex].style.display = "none";
	};
}

window.onload = function () {
	setDataIndex();
};

window.onclick = function (event) {
	if (event.target === modalparent[event.target.getAttribute("data-index")]) {
		modalparent[event.target.getAttribute("data-index")].style.display = "none";
	}
};
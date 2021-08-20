/* NAVBAR */
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

/* CLOSE WINDOW ON RESIZE */
window.addEventListener("resize", function(){
		if (navbar.classList.contains("opened")) {
			closeMobileNavbar();
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

/* ANIMATE SKILLS */
$(document).ready(function () {
	$(".expander").click(function () {
		if ($(".skills").css("display") == "block") {
			$(".skills").css("display", "none");
			reset();
		} else {
			$(".skills").css("display", "block");
			animate();
		}
	});
});

function animate() {
	$(".c").animate({ width: "45%" }, 1500);
	$(".c2").animate({ width: "70%" }, 1500);
	$(".java").animate({ width: "80%" }, 1500);
	$(".python").animate({ width: "75%" }, 1500);
	$(".css").animate({ width: "50%" }, 1500);
	$(".js").animate({ width: "55%" }, 1500);
	$(".jquery").animate({ width: "25%" }, 1500);
	$(".html").animate({ width: "70%" }, 1500);
}

function reset() {
	$(".c").animate({ width: "0%" }, 1);
	$(".c2").animate({ width: "0%" }, 1);
	$(".java").animate({ width: "0%" }, 1);
	$(".python").animate({ width: "0%" }, 1);
	$(".css").animate({ width: "0%" }, 1);
	$(".js").animate({ width: "0%" }, 1);
	$(".jquery").animate({ width: "0" }, 1);
	$(".html").animate({ width: "0%" }, 1);
}

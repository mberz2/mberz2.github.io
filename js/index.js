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
window.addEventListener("resize", function () {
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

/* SCRIPTING FOR MULTIPLE MODALS */
let modalparent = document.getElementsByClassName("modal_multi");
let modal_btn_multi = document.getElementsByClassName("myBtn_multi");
let span_close_multi = document.getElementsByClassName("close_multi");

window.onload = function () {
	for (i = 0; i < modal_btn_multi.length; i++) {
		modal_btn_multi[i].setAttribute("data-index", i);
		modalparent[i].setAttribute("data-index", i);
		span_close_multi[i].setAttribute("data-index", i);
	}
};

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

window.onclick = function (event) {
	if (event.target === modalparent[event.target.getAttribute("data-index")]) {
		modalparent[event.target.getAttribute("data-index")].style.display = "none";
	}
};

/* ANIMATE SKILLS */
let TIMER = 1000;

$(document).ready(function () {
	let animating = false;

	$(".container-skills .expander").click(function () {
		if (animating) return false;

		$(".container-skills .expander").css("display", "none");
		$(".container-skills .closer").css("display", "block");
		$(".container-skills .skills").css("display", "block");
		animate();
		setTimeout(() => {
			animating = false;
		}, TIMER);
	});

	$(".container-skills .closer").click(function () {
		$(".container-skills .skills").css("display", "none");
		$(".container-skills .expander").css("display", "block");
		$(".container-skills .closer").css("display", "none");
		reset();
	});
});

function animate() {
	$(".cb").each(function (i) {
		var myDelay = 300;
		var myElement = $(this);
		setTimeout(function () {
			myElement.prop("checked", true);
		}, ++i * myDelay);
	});

	$(".c").animate({ width: "45%" }, TIMER);
	$(".c2").animate({ width: "70%" }, TIMER);
	$(".java").animate({ width: "80%" }, TIMER);
	$(".python").animate({ width: "75%" }, TIMER);
	$(".css").animate({ width: "50%" }, TIMER);
	$(".js").animate({ width: "55%" }, TIMER);
	$(".jquery").animate({ width: "25%" }, TIMER);
	$(".html").animate({ width: "70%" }, TIMER);
}

function reset() {
	let skills = document.querySelectorAll(".prof");
	skills.forEach(function (e) {
		e.style.width = "0%";
	});

	$(".cb").each(function (i) {
		$(this).prop("checked", false);
	});
}

/* EMAIL FORM */
$(document).ready(function () {
	$("#send").on("click", function (e) {
		console.log($("subject"));
		e.preventDefault();
		subject = $("#subject").val();
		body = $("#message").val();
		window.location =
			"mailto:mberz2@pdx.edu?subject=" + subject + "&body=" + body;
	});
});

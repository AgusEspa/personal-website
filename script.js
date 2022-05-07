const hamburgerButton = document.getElementsByClassName("hamburger")[0];
const navbarLinks = document.getElementsByClassName("links-menu")[0];

hamburgerButton.addEventListener("click", () => {
	navbarLinks.classList.toggle("active");
	hamburgerButton.classList.toggle("active");
});

const navbarLink = Array.from(document.getElementsByClassName("link"));

navbarLink.forEach((anchor) => {
	anchor.addEventListener("click", () => {
		navbarLinks.classList.toggle("active");
		hamburgerButton.classList.toggle("active");
	});
});

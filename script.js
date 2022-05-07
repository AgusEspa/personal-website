const hamburgerButton = document.getElementsByClassName("hamburger")[0];
const navbarLinks = document.getElementsByClassName("links-menu")[0];

hamburgerButton.addEventListener("click", () => {
	navbarLinks.classList.toggle("active");
});

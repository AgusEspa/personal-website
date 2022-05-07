function toggleReadMore() {
	const period = document.getElementById("period");
	const moreText = document.getElementById("more");
	const btnText = document.getElementById("readMoreBtn");

	if (period.style.display === "none") {
		period.style.display = "inline";
		btnText.innerHTML = "Read more";
		moreText.style.display = "none";
		window.scroll(0, 0);
	} else {
		period.style.display = "none";
		btnText.innerHTML = "Read less";
		moreText.style.display = "block";
	}
}

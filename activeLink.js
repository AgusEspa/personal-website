const sections = document.querySelectorAll("section");
const links = document.getElementsByClassName("link");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.target.id === "about") {
        links[0].classList.toggle("active", entry.isIntersecting);
      } else if (entry.target.id === "skillset") {
        links[1].classList.toggle("active", entry.isIntersecting);
      } else if (entry.target.id === "projects") {
        links[2].classList.toggle("active", entry.isIntersecting);
      } else if (entry.target.id === "resume") {
        links[3].classList.toggle("active", entry.isIntersecting);
      } else if (entry.target.id === "contact") {
        links[4].classList.toggle("active", entry.isIntersecting);
      }
    });
  },
  { threshold: 0.35, rootMargin: "30px" }
);

sections.forEach((section) => {
  observer.observe(section);
});

const aboutBtn = document.getElementById("aboutBtn");
const aboutMeSection = document.getElementById("about-me-section");

aboutBtn.addEventListener("click", () => {
	aboutMeSection.scrollIntoView({ behavior: "smooth" });
});

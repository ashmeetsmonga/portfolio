const aboutBtn = document.getElementById("about-btn");
const projectsBtn = document.getElementById("projects-btn");
const aboutMeSection = document.getElementById("about-me-section");
const projectsSection = document.getElementById("projects-section");

aboutBtn.addEventListener("click", () => {
	aboutMeSection.scrollIntoView({ behavior: "smooth" });
});

projectsBtn.addEventListener("click", () => {
	let offSet = 120;
	let sectionPosition = projectsSection.getBoundingClientRect().top;
	let offSetPosition = sectionPosition + window.scrollY - offSet;

	window.scrollTo({
		top: offSetPosition,
		behavior: "smooth",
	});
});

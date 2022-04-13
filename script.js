const navBar = document.getElementById("nav-bar");
const aboutBtn = document.getElementById("about-btn");
const projectsBtn = document.getElementById("projects-btn");
const aboutMeSection = document.getElementById("about-me-section");
const projectsSection = document.getElementById("projects-section");
const navBarLogo = document.getElementById("nav-bar-logo");
const experienceBtn = document.getElementById("experience-btn");
const experienceSection = document.getElementById("experience-section");
const contactMeSection = document.getElementById("contact-me-section");
const contactMeBtn = document.getElementById("contact-me-btn");

navBarLogo.addEventListener("click", () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
});

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

experienceBtn.addEventListener("click", () => {
	experienceSection.scrollIntoView({ behavior: "smooth" });
});

window.onscroll = () => {
	console.log("Scrolling : " + document.documentElement.scrollTop);
	if (document.documentElement.scrollTop > 0) navBar.classList.add("shadow");
	else navBar.classList.remove("shadow");
};

contactMeBtn.addEventListener("click", () => {
	contactMeSection.scrollIntoView({ behavior: "smooth" });
});

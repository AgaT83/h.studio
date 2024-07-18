const openMenu = document.querySelector(".open");
const closeMenu = document.querySelector(".close");
const navMobile = document.querySelector(".navbar-mobile");
const navLinks = document.querySelectorAll(".nav-links");
const footerYear = document.querySelector(".footer__year");

openMenu.addEventListener("click", () => {
	navMobile.classList.toggle("navbar-mobile--active");
});

closeMenu.addEventListener("click", () => {
	navMobile.classList.toggle("navbar-mobile--active");
});

navLinks.forEach(navLink => {
	navLink.addEventListener("click", () => {
		navMobile.classList.toggle("navbar-mobile--active");
	})
});

const handleFooterYear = () => {
	let year = (new Date).getFullYear();
	footerYear.innerText = year;
}

handleFooterYear();

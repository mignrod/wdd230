const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const nav = document.querySelector("nav a");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌓︎")) {
		body.style.background = "#000";
		body.style.color = "#fff";
        nav.style.color = "white";
        header.style.background = "rgb(15, 97, 129)";
        footer.style.background = "rgb(15, 97, 129)";
		modeButton.textContent = "☼";
		modeButton.style.color = "white";
	} else {
		body.style.background = "#eee";
		body.style.color = "#000";
        header.style.background = "rgb(15, 97, 159)";
        footer.style.background = "rgb(15, 97, 159)";
		modeButton.textContent = "🌓︎";
		modeButton.style.color = "black";
	}
});
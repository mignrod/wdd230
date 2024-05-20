const currentTime = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeStyle: "short" }).format(currentTime);

document.querySelector('#hidden-time').textContent = fulldate;


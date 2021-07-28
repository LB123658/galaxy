var info = document.getElementById("info");
info.innerHTML = "The 2020 Tokyo Olympics are going on right now. <a href='https://lb123658.github.io/galaxy/search?q=2020+Tokyo+Olympics'>Learn more</a>";
if (window.location.search == "?source=blocked_page") {
info.innerHTML = "Galaxy blocks searches it doesn't think are safe.";
}

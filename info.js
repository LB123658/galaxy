var info = document.getElementById("info");
info.innerHTML = "Get the new Galaxy browser extension. <a href='https://lb123658.github.io/galaxy/extension/extension.zip'>Download here</a>";
if (window.location.search == "?source=blocked_page") {
info.innerHTML = "Galaxy blocks searches it doesn't think are safe.";
}

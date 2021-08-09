function displayNotification(text) {
var css = document.createElement("style");
css.innerHTML = "#banner { position: absolute; top: 15px; right: 15px; width: 250px; z-index: 10; background: #5765f2; color: white; padding: 10px; border-radius: 8px; animation-name: slide; animation-duration: 1s; cursor: pointer; user-select: none; transition: transform 0.5s; text-align: center; }#banner:hover {transform: scale(1.1);}@keyframes slide { 0% {right: -270px;} 100% {right: 15px;} }";
document.head.appendChild(css);
var banner = document.createElement("div");
banner.id = "banner";
banner.innerHTML = text;
banner.title = "Click to close";
banner.onclick = function() {banner.style.visibility = "hidden";};
document.body.appendChild(banner);
}
if (location.search == "?source=blocked_page") {
  displayNotification("Galaxy thought your last search wasn't safe so it blocked it.");
} else if (location.search == "?source=new_user") {
  displayNotification("Welcome to Galaxy!");
} else if (location.search.split("?q=")[1].length > 30) {
  displayNotification("That was a long search.<br>Galaxy may not have found the best results.");
}

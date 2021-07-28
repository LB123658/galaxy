function displayNotification(text) {
var css = document.createElement("style");
css.innerHTML = "#banner { position: absolute; top: 20px; right: 20px; width: 250px; z-index: 1; background: #5765f2; color: white; padding: 10px; border-radius: 8px; animation-name: slide; animation-duration: 1s; cursor: pointer; user-select: none; transition: transform 0.5s; }#banner:hover {transform: scale(1.1);}@keyframes slide { 0% {right: -270px;} 100% {right: 20px;} }";
document.head.appendChild(css);
var banner = document.createElement("div");
banner.id = "banner";
banner.innerHTML = text;
banner.title = "Click to close";
banner.onclick = function() {banner.style.visibility = "hidden";};
document.body.appendChild(banner);
}

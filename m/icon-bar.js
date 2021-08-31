function iconBar() {
var iconbarStyle = "#bottom-icon-row { position: fixed; bottom: 0px; left: 0px; width: 100%; height: 200px; overflow: hidden; background: #e8e4e3; z-index: 2; background: white; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.39);} #bottom-icon-row button { width: 33.3%; float: left; background: transparent; border: none; height: 400px; margin-top: -100px; border-radius: 60%; transition: transform 0.5s; } #bottom-icon-row button:hover { background: #c7cbf0; transform: scale(1.2); } #bottom-icon-row button:focus { background: #c7cbf0; transform: scale(1.2); }";
var css = document.createElement("style");
css.innerHTML = iconbarStyle;
document.head.appendChild(css);
var bottomiconRow = document.createElement("div");
bottomiconRow.id = "bottom-icon-row";
bottomiconRow.innerHTML = "<a href='https://lb123658.github.io/galaxy/m'><button id='home'><span class='material-icons' style='color:black;font-size:80px;'>home</span></button></a> <a href='https://lb123658.github.io/galaxy/m/history'><button id='history'><span class='material-icons' style='color:black;font-size:80px;'>history</span></button></a> <button id='more' onclick='share()'><span class='material-icons' style='color:black;font-size:80px;'>more_vert</span></button>";
document.body.appendChild(bottomiconRow);

var home = document.getElementById("home");
var hist = document.getElementById("history");
var more = document.getElementById("more");
if (window.location.href == "https://lb123658.github.io/galaxy/m/") {
home.style.background = "#c7cbf0";
home.style.transform = "scale(1.2)";
} else if (window.location.href == "https://lb123658.github.io/galaxy/m/history") {
hist.style.background = "#c7cbf0";
hist.style.transform = "scale(1.2)";
} else if (window.location.href == "https://lb123658.github.io/galaxy/m/share") {
more.style.background = "#c7cbf0";
more.style.transform = "scale(1.2)";
home.innerHTML = "<span class='material-icons' style='color:black; font-size:80px;'>arrow_back_ios</span>";
home.onclick = function() {window.history.back();};
}

}
iconBar();

function share() {
localStorage.setItem("share-page",window.location.href);
window.open("https://lb123658.github.io/galaxy/m/share","_self");
}

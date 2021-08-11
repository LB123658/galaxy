function iconBar() {
var iconbarStyle = "#bottom-icon-row { position: fixed; bottom: 0px; left: 0px; width: 100%; height: 200px; overflow: hidden; background: #e8e4e3; z-index: 2; } #bottom-icon-row button { width: 33.3%; float: left; background: transparent; border: none; height: 400px; margin-top: -100px; border-radius: 60%; transition: transform 0.5s; } #bottom-icon-row button:hover { background: lightgrey; transform: scale(1.2); } #bottom-icon-row button:focus { background: lightgrey; transform: scale(1.2); }";
var css = document.createElement("style");
css.innerHTML = iconbarStyle;
document.head.appendChild(css);
var bottomiconRow = document.createElement("div");
bottomiconRow.id = "bottom-icon-row";
bottomiconRow.innerHTML = "<button id='home'><span class='material-icons' style='color:black;font-size:40px;'>home</span></button> <button id='history'><span class='material-icons' style='color:black;font-size:40px;'>history</span></button> <button id='more'><span class='material-icons' style='color:black;font-size:40px;'>more_vert</span></button>";
document.body.appendChild(bottomiconRow);
}
iconBar();

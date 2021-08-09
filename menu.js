function makeMenu() {
var container = document.createElement("div");
container.style.position = "fixed";
container.style.top = "0px";
container.style.right = "0px";
container.style.width = "200px";
container.style.height = "100%";
container.style.zIndex = "10";
container.style.background = "#3b4451";
container.style.fontSize = "25px";
container.style.textAlign = "left";
container.style.padding = "10px";
container.style.visibility = "hidden";
container.style.overflowY = "hidden";
container.innerHTML = "<a href='https://lb123658.github.io/galaxy'>Home</a><br><a href='https://lb123658.github.io/galaxy/about'>About</a><br><a href='https://lb123658.github.io/galaxy/privacy'>Privacy Policy</a><br><a href='#' id='share'>Share this page</a><br><a href='https://lb123658.github.io/galaxy/history'>Search history</a><br><a href='https://lb123658.github.io/galaxy/store'>Galaxy Store</a><br><a href='https://github.com/lb123658/galaxy' target='_blank'>Source code</a><br><br><a href='#' id='close'>Close menu</a>";
document.body.appendChild(container);

var menu = document.createElement("button");
menu.innerHTML = "<span class='material-icons'>menu</span>";
menu.style.position = "absolute";
menu.style.top = "10px";
menu.style.right = "10px";
menu.style.zIndex = "9";
menu.style.background = "transparent";
menu.style.border = "none";
menu.style.cursor = "pointer";
menu.title = "Open Menu";
menu.id = "menu";
menu.onclick = function() {container.style.visibility = "visible"; x.style.visibility = "visible";};
document.body.appendChild(menu);

var x = document.createElement("button");
x.innerHTML = "<span class='material-icons'>close</span>";
x.style.position = "fixed";
x.style.top = "10px";
x.style.right = "10px";
x.style.zIndex = "11";
x.style.background = "transparent";
x.style.border = "none";
x.style.cursor = "pointer";
x.title = "Close Menu";
x.style.visibility = "hidden";
x.onclick = function() {container.style.visibility = "hidden"; x.style.visibility = "hidden";};
document.body.appendChild(x);

var sharing = document.createElement("div");
sharing.style.position = "fixed";
sharing.style.top = "200px";
sharing.style.left = "50%";
sharing.style.width = "300px";
sharing.style.marginLeft = "-150px";
sharing.style.borderRadius = "8px";
sharing.style.zIndex = "13";
sharing.style.fontSize = "18px";
sharing.style.padding = "20px";
sharing.style.background = "#282828";
sharing.style.color = "grey";
sharing.style.visibility = "hidden";
sharing.innerHTML = "Share this page:<br><br><input style='width:97%; background:#3b4351; border-radius:4px; border:none; font-size:17px; padding:5px; color:lightgrey;' id='shareLink' placeholder='Sharing link' value='https://lb123658.github.io/galaxy' autocomplete='off'><button style='position:absolute; top:10px; right:10px; background:transparent; border:none; cursor:pointer;' id='shareClose' title='Close'><span class='material-icons'>close</span></button>";
document.body.appendChild(sharing);

var shade = document.createElement("div");
shade.style.zIndex = "12";
shade.style.position = "fixed";
shade.style.top = "0px";
shade.style.left = "0px";
shade.style.height = "100%";
shade.style.width = "100%";
shade.style.background = "black";
shade.style.opacity = "0.5";
shade.style.visibility = "hidden";
document.body.appendChild(shade);

var close = document.getElementById("close");
var shareLink = document.getElementById("shareLink");
var shareClose = document.getElementById("shareClose");
var share = document.getElementById("share");

shareLink.value = window.location.href;
close.onclick = function() {container.style.visibility = "hidden"; x.style.visibility = "hidden";};
shareLink.onclick = function() {shareLink.select();};
shareClose.onclick = function() {sharing.style.visibility = "hidden"; document.body.style.pointerEvents = "auto"; shade.style.visibility = "hidden";};
share.onclick = function() {document.body.style.pointerEvents = "none"; sharing.style.visibility = "visible"; sharing.style.pointerEvents = "auto"; sharing.style.opacity = "2"; shade.style.visibility = "visible";};
}
makeMenu();

function makeMenu() {
var menuStyle = document.createElement("style");
menuStyle.innerHTML = "#submenu {width:100%; user-select:none; height:40px; background: #282828; border-radius:8px;} #submenu span {color:grey; width:25%; text-align:center; margin-top:7px; cursor:pointer; transition: color 0.5s;} #submenu span:hover {color:white;} #ad {width:100%; user-select:none; background: #282828; border-radius:8px; font-size:20px; padding-top:10px; padding-bottom:10px; text-align:center;} #ad * {margin:10px;} #menulinkcontainer { width: 100%; background: #282828; text-align: left; padding: 5px 0px 10px 0px; border-radius: 8px; } #menulinkcontainer a { color: grey; text-decoration: none; font-size: 15px; padding: 5px; margin-left: 10px; border-radius: 8px; width: 160px; transition: color 0.5s,background 0.5s; } #menulinkcontainer a:hover { color: white; background: #3b4451; }";
document.head.appendChild(menuStyle);

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
container.innerHTML = "<br><div id='menulinkcontainer'><a href='https://lb123658.github.io/galaxy'>Home</a><br><a href='https://lb123658.github.io/galaxy/about'>About</a><br><a href='https://lb123658.github.io/galaxy/privacy'>Privacy Policy</a><br><a href='#' id='share'>Share this page</a><br><a href='https://lb123658.github.io/galaxy/history'>Search history</a><br><a href='https://lb123658.github.io/galaxy/store'>Galaxy Store</a><br><a href='https://github.com/lb123658/galaxy' target='_blank'>Source code</a></div><br> <div id='submenu'><a href='https://lb123658.github.io/galaxy' title='Home page'><span class='material-icons'>home</span></a><a href='https://lb123658.github.io/galaxy/about' title='Info'><span class='material-icons'>info</span></a><a href='#' title='Notifications'><span class='material-icons'>notifications</span></a><a href='https://lb123658.github.io/galaxy/history' title='Search history'><span class='material-icons'>history</span></a></div><br><div id='ad'><p id='timer'></p></div>";
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

var shareLink = document.getElementById("shareLink");
var shareClose = document.getElementById("shareClose");
var share = document.getElementById("share");

shareLink.value = window.location.href;
shareLink.onclick = function() {shareLink.select();};
shareClose.onclick = function() {sharing.style.visibility = "hidden"; document.body.style.pointerEvents = "auto"; shade.style.visibility = "hidden";};
share.onclick = function() {document.body.style.pointerEvents = "none"; sharing.style.visibility = "visible"; sharing.style.pointerEvents = "auto"; sharing.style.opacity = "2"; shade.style.visibility = "visible";};
}
makeMenu();

setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("timer").innerHTML = d.toLocaleTimeString().slice(0,length-6) + " " + d.toLocaleTimeString().split(" ")[1];
}

var input = document.getElementById("input");
var icon = document.getElementById("icon");
var main = document.getElementById("main");
var auto = document.getElementById("auto");
var autoButton = document.getElementById("autoButton");

document.body.onload = function() {var wide = window.innerWidth - 280; main.style.width = wide + "px";};
document.body.onresize = function() {var wide = window.innerWidth - 280; main.style.width = wide + "px";};


// load content
function loadContent(text) {
main.innerHTML = "<p style='width:100%;text-align:center;margin-top:50px;color:grey;'><button class='animate' id='one'></button><button class='animate' id='two'></button><button class='animate' id='three'></button><br><br>" + text + "</p>";
var contentcss = document.createElement("style");
contentcss.innerHTML = ".animate { width: 25px; height: 25px; border-radius: 50%; border: none; background: #5765f2; margin: 5px; opacity: 0; } #one { animation: moveone 4s infinite; } #two { animation: movetwo 4s infinite; } #three { animation: movethree 4s infinite; } @keyframes moveone { 0% {opacity: 0;} 50% {opacity: 1;} 100% {opacity: 0;} } @keyframes movetwo { 0% {opacity: 0;} 75% {opacity: 1;} 100% {opacity: 0;} } @keyframes movethree { 0% {opacity: 0;} 100% {opacity: 1;} }";
document.head.appendChild(contentcss);
}
loadContent("Loading...");

setInterval(deleteSearch, 100);

function deleteSearch() {
if (input.value.length > 0) {
icon.innerHTML = "close";
icon.onclick = function() {input.value = ""; auto.style.visibility = "hidden"; autoButton.innerHTML = "";};
} else if (input.value.length < 1) {
icon.innerHTML = "search";
icon.onclick = function() {input.focus();};
}
}

setInterval(checkOnline, 100);
function checkOnline() {
if (navigator.onLine == false) {
loadContent("You are offline right now...");
} else {
console.log("You are online");
}
}

function autoSuggest() {
if (input.value.length > 0) {
auto.style.visibility = "visible";
autoButton.innerHTML = input.value;
} else if (input.value.length < 1) {
auto.style.visibility = "hidden";
autoButton.innerHTML = "";
} 
if (input.value == " ") {
auto.style.visibility = "hidden";
autoButton.innerHTML = "";
}
}

setTimeout(loadApps, 3000);
function loadApps() {
main.innerHTML = "";
show("Galaxy Search","Search privately with Galaxy, the search engine that never tracks you.","https://lb123658.github.io/galaxy?source=new_user");
show("Galaxy TV","Watch millions of videos of videos from YouTube without any trackers.","https://lb123658.github.io/galaxy/tv");
show("TeaBag","Brew virtual tea online, get money, and upgrade to better teapots, teabags, and tea varieties.","https://lb123658.github.io/tea");
show("Photon Games","Play video games all from one place.","https://lb123658.github.io/");
show("Docs","Edit and save documents online.","https://lb123658.github.io/docs");
show("Unkrafted","A singleplayer video game where you collect building materials and avoid falling bombs.","https://lb123658.github.io/unkrafted");
show("The Ultimate Goat Simulator","A goat that runs and jumps over logs. Available in English, Polish, and Spanish.","https://lb123658.github.io/goat/about");
show("Survival","Land on an island and try to survive.","https://lb123658.github.io/Survival");
show("Milo, the virtual assistant","A virtual assistant that can answer most questions.","https://lb123658.github.io/milo");
show("Vintage Docs","Write and edit documents with a vintage computer look.","https://lb123658.github.io/docs/old");
show("Dark Mode","Turn dark mode on for any website or add automatic dark and light modes to your own website.","https://lb123658.github.io/dark.mode");
show("Boost HTML Editor","Edit HTML easily online with features to preview the code or download it.","https://lb123658.github.io/Boost-HTML-Editor");
}

function show(title,content,link) {
var appDiv = document.createElement("div");
appDiv.innerHTML = "<h3>" + title + "</h3><p>" + content + "</p><a href='" + link + "' target='_blank'><button class='appLink'>OPEN</button></a>";
appDiv.className = "app-div";
main.style.background = "transparent";
main.appendChild(appDiv);
}

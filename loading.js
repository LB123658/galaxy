// for loading screen
function createloadingScreen() {
var loadingStyle = document.createElement("style");
loadingStyle.innerHTML = "#loading-div { position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; background: #2F3137; font-family: 'Montserrat', sans-serif; z-index: 999; color: white; user-select: none; -webkit-user-select: none;} ::selection {background: #5765f2;} :focus {outline-width: 0px;} #loadingLogo { position: absolute; top: 200px; left: 0px; width: 100%; text-align: center; font-size: 60px; } #loadingImg { position: absolute; top: 100px; left: 50%; width: 150px; margin-left: -75px;} #loadingBack { position: fixed; top: 380px; left: 50%; margin-left: -200px; width: 400px; height: 10px; border-radius: 4px; background: #181818; } #loadingBar { position: absolute; top: 0px; left: 0px; width: 90%; height: 100%; background: #5765f2; border: none; border-radius: 4px 0px 0px 4px; animation: loading 3s; } @keyframes loading { 0% {width: 0px;} 100% {width: 90%;} } #loadingStatus { position: fixed; top: 400px; left: 0px; width: 100%; text-align: center; font-size: 18px; color: grey; }";
document.head.appendChild(loadingStyle);
var loadingDiv = document.createElement("div");
loadingDiv.id = "loading-div";
loadingDiv.innerHTML = "<img src='https://lb123658.github.io/galaxy/favicon.png' id='loadingImg'><p id='loadingLogo'>Galaxy</p><div id='loadingBack'><button id='loadingBar'></button></div><p id='loadingStatus'>Loading...</p>";
document.body.appendChild(loadingDiv);

// variables
var loadingBar = document.getElementById("loadingBar");
var loadingStatus = document.getElementById("loadingStatus");
var html = document.getElementsByTagName("html")[1];
html.onload = setTimeout(checkLoad, 4000);
}
function checkLoad() {
loadingBar.style.width = "100%"; 
loadingBar.style.borderRadius = "4px";
loadingStatus.innerHTML = "Loading 100%";
console.log("The page has successfully loaded");
setTimeout(function() {document.getElementById("loading-div").remove();}, 750);
}
createloadingScreen();

if (Math.random() > 0 && Math.random() < 0.25) {
update("history","Galaxy keeps track of your search history.","history","Learn more");
} else if (Math.random() > 0.25 && Math.random() < 0.5) {
update("lock","Galaxy blocks searched that seem unsafe.","blocked","Learn more");
} else if (Math.random() > 0.5 && Math.random() < 0.75) {
update("place","Galaxy can use your location to find results near you.","https://lb123658.github.io/galaxy/search?q=parks+near+me","See example");
} else {
update("extension","Download the Galaxy extension for Chrome.","https://lb123658.github.io/galaxy/extension/extension.zip","Download");
} 
function update(icon,text,link,button) {
var updatedivStyle = document.createElement("style");
updatedivStyle.innerHTML = "#updateDiv { position: fixed; bottom: 0px; left: 0px; background: #3b4351; width: 100%; height: 100px; user-select: none; -webkit-user-select: none; z-index: 10; } #updateDiv * { float: left; } #updateDiv span { margin: 20px 20px 20px 20px; } #updateDiv p { margin-top: 35px; font-size: 20px; max-width: 70%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; } #updateDiv button { height: 40px; margin: 30px 20px 30px 20px; background: #5765f2; border: none; font-size: 20px; border-radius: 8px; cursor: pointer; }";
document.head.appendChild(updatedivStyle);
var updateDiv = document.createElement("div");
updateDiv.innerHTML = "<span class='material-icons' style='font-size:50px;color:#5765f2;'>" + icon + "</span><p>" + text + "</p><span class='material-icons' style='font-size:40px;margin:30px 20px 30px 20px;float:right;cursor:pointer;' onclick='document.getElementById(\"updateDiv\").remove()'>close</span><a href='" + link + "' style='float:right;'><button>" + button + "</button></a>";
updateDiv.id = "updateDiv";
document.body.appendChild(updateDiv);
}
